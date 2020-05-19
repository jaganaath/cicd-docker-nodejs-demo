ARG GIT_COMMIT_HASH

FROM alpine:latest
RUN apk add --no-cache nodejs npm

ENV ENV_GIT_COMMIT_HASH ${GIT_COMMIT_HASH}

WORKDIR /cicd_app
COPY . /cicd_app

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["index.js"]