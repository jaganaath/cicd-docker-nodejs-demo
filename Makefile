BASE_IMAGE = cicd_demo:$(APP_TAG)

.EXPORT_ALL_VARIABLES:

.PHONY: all # no caching please

build-image:
	docker build -t ${BASE_IMAGE} . --build-arg GIT_COMMIT_HASH=${APP_TAG}

docker-push:
	docker push ${BASE_IMAGE}