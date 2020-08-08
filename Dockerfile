FROM node:14.6.0
WORKDIR /app
COPY . /app
COPY docker-entrypoint.sh /usr/local/sbin/docker-entrypoint.sh
RUN chmod +x /usr/local/sbin/docker-entrypoint.sh
CMD docker-entrypoint.sh
