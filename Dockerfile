ARG GIT_COMMIT_HASH

FROM alpine:latest
RUN apk add --no-cache nodejs npm

#WORKDIR /cicd_app
COPY . /cicd_app

RUN npm install

ENV GIT_COMMIT_HASH=${GIT_COMMIT_HASH}

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["index.js"]