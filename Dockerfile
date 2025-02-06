# Usa Rust con WebAssembly
FROM rust:latest

# Instalar wasm-pack para compilar Rust a WebAssembly
RUN cargo install wasm-pack

# Crear directorio de trabajo
WORKDIR /usr/src/wasm-project

# Copiar archivos del proyecto
COPY ./Cargo.toml .
COPY ./src ./src

# Compilar Rust a WebAssembly
RUN wasm-pack build --target web

# Instalar Node.js y http-server para servir archivos
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g http-server

# Copiar el frontend
WORKDIR /usr/src/wasm-project/frontend
COPY ./frontend .

# Servir el frontend con http-server
CMD ["http-server", "/usr/src/wasm-project", "-p", "8080"]

