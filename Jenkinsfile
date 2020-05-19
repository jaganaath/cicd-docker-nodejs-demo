
pipeline {
    environment {
      APP_TAG = "${GIT_COMMIT[0..6]}"
      REGISTRY = "jaganaath/test"
    }
    stages {
        stage('Build Image') {
            steps {
                sh 'APP_TAG=${env.APP_TAG} make build-image'
            }
        }
        stage('Unit Testing') {
            steps {
                //sh 'make unit-test'
            }
        }
        stage('Push Image') {
            /*
            when {
                anyOf {
                  branch 'master'
                  branch 'staging'
                  branch 'develop'
                }
            }
            */
            steps {
              withCredentials([usernameVariable: 'DOCKER_HUB_USER', passwordVariable: 'DOCKER_HUB_PWD', credentialsId: 'docker-hub-credentials']) {
                sh 'DOCKER_HUB_USER=${DOCKER_HUB_USER} DOCKER_HUB_PWD=${DOCKER_HUB_PWD} make docker-push'
              }
            }
        }
    }
}