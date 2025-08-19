FROM debian:bullseye-slim AS builder

# Install build dependencies
RUN apt-get update && apt-get install -y build-essential libsdl2-dev libsdl2-image-dev nodejs npm

# Copy source code
COPY . /app
WORKDIR /app

# Build the application
RUN make web-decker
RUN npm install

FROM debian:bullseye-slim

# Install runtime dependencies
RUN apt-get update && apt-get install -y nodejs npm

# Copy built artifacts from builder
COPY --from=builder /app/js /app/js
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/server.js /app/server.js

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]
