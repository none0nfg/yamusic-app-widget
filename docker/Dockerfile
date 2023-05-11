FROM node:18-alpine
USER node
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

COPY --chown=node:node src /app/src
EXPOSE 1337
HEALTHCHECK --interval=5s --timeout=3s --start-period=3s --retries=3 CMD [ "/bin/netstat", "-tulpn", "|", "grep", "1337", "||", "exit 1" ]

CMD node src/script.mjs