
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
                //sh "APP_TAG=${env.APP_TAG} make build-image"
            }
        }
        /*
        stage('Unit Testing') {
            steps {
                echo 'Unit testing'
                //sh 'make unit-test'
            }
        }
        stage('Push Image') {

            steps {
              withCredentials([usernamePassword(usernameVariable: 'DOCKER_HUB_USER', passwordVariable: 'DOCKER_HUB_PWD', credentialsId: 'docker-hub-credentials')]) {
                sh "DOCKER_HUB_USER=${DOCKER_HUB_USER} DOCKER_HUB_PWD=${DOCKER_HUB_PWD} make docker-push"
              }
            }
        }
        */
    }
}