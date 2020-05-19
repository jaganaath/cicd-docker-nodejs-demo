
pipeline {
    agent any

    environment {
      APP_TAG = "${GIT_COMMIT[0..7]}"
      REGISTRY = "jaganaath/test"
    }
    stages {
        stage('Build Image') {
            steps {
                echo "Building image ${env.APP_TAG}"
                //sh "docker build -t cicd_demo:${env.APP_TAG} . --build-arg GIT_COMMIT_HASH=${env.APP_TAG}"
                sh "APP_TAG=${env.APP_TAG} make build-image"
            }
        }
        stage('Unit Testing') {
            steps {
                echo 'Unit testing'
                //sh 'make unit-test'
            }
        }
        stage('Push Image') {
            steps {
                /*
              withCredentials([usernamePassword(usernameVariable: 'DOCKER_HUB_USER', passwordVariable: 'DOCKER_HUB_PWD', credentialsId: 'docker-hub-credentials')]) {
                sh "docker login -u ${DOCKER_HUB_USER} -p ${DOCKER_HUB_PWD}"
                sh "DOCKER_HUB_USER=${DOCKER_HUB_USER} DOCKER_HUB_PWD=${DOCKER_HUB_PWD}"
                //sh "DOCKER_HUB_USER=${DOCKER_HUB_USER} DOCKER_HUB_PWD=${DOCKER_HUB_PWD} make docker-push"
              }

              docker.withRegistry('https://registry.hub.docker.com', 'jj-test-docker-hub') {
                    sh "docker push cicd_demo:${env.APP_TAG}"
                }
              */                
              withDockerRegistry([credentialsId: 'jj-test-docker-hub', url: 'https://index.docker.io/v1/']) {
                    echo "Hello"
                }
            }
        }
    }
}