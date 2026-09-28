#!/bin/bash
set -euo pipefail

# Current directory
cdir=$(dirname "$0")

# Copia un .env.example al .env que usa compose.yaml, solo si este no existe.
# $1: directorio del .env.example (dentro de config/)
# $2: directorio del .env destino (dentro de config/, el referenciado en compose.yaml)
create_env() {
    local example="$cdir/config/$1/.env.example"
    local target="$cdir/config/$2/.env"

    if [[ -f "$target" ]]; then
        echo "Archivo .env para $2 ya existe, saltando creación"
        return
    fi
    if [[ ! -f "$example" ]]; then
        echo "No existe $example, saltando creación de .env para $2"
        return
    fi
    echo "Creando archivo .env para $2"
    mkdir -p "$(dirname "$target")"
    cp "$example" "$target"
}

# Lee el valor de una variable de un .env (sin comillas)
get_env_value() {
    local file="$1" key="$2"
    [[ -f "$file" ]] || return 0
    { grep -E "^${key}=" "$file" || true; } | tail -n 1 | cut -d= -f2- | sed -E 's/[[:space:]]+#.*$//; s/^"(.*)"$/\1/; s/^'"'"'(.*)'"'"'$/\1/'
}

# Define (o reemplaza) el valor de una variable en un .env
set_env_value() {
    local file="$1" key="$2" value="$3"
    if grep -qE "^${key}=" "$file"; then
        sed -i -E "s|^${key}=.*|${key}=\"${value}\"|" "$file"
    else
        printf '\n%s="%s"\n' "$key" "$value" >> "$file"
    fi
}

generate_key() {
    if command -v openssl > /dev/null 2>&1; then
        openssl rand -hex 32
    else
        head -c 32 /dev/urandom | od -An -tx1 | tr -d ' \n'
    fi
}

# compose.yaml usa config/alejoide-web/.env, mientras que el ejemplo vive en config/web
create_env "web" "alejoide-web"
create_env "projects-api" "projects-api"
create_env "projects-admin-frontend" "projects-admin-frontend"
create_env "nginx" "nginx"

# Sincronizar la API key entre projects-api y projects-admin-frontend
api_env="$cdir/config/projects-api/.env"
admin_env="$cdir/config/projects-admin-frontend/.env"

if [[ -f "$api_env" && -f "$admin_env" ]]; then
    api_key=$(get_env_value "$api_env" "ADMIN_API_KEY")
    admin_key=$(get_env_value "$admin_env" "PROJECTS_API_KEY")

    if [[ -z "$api_key" ]]; then
        echo "Generando ADMIN_API_KEY para projects-api"
        api_key=$(generate_key)
        set_env_value "$api_env" "ADMIN_API_KEY" "$api_key"
    fi

    if [[ -z "$admin_key" ]]; then
        echo "Configurando PROJECTS_API_KEY de projects-admin-frontend"
        set_env_value "$admin_env" "PROJECTS_API_KEY" "$api_key"
    elif [[ "$admin_key" != "$api_key" ]]; then
        echo "ADVERTENCIA: PROJECTS_API_KEY (projects-admin-frontend) no coincide con ADMIN_API_KEY (projects-api)" >&2
    fi
fi
