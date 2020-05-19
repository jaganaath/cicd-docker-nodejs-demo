
pipeline {
    agent any

    environment {
      APP_TAG = "${GIT_COMMIT[0..7]}"
      REGISTRY = "jaganaath/test"
      REGISTRY_CREDENTIALS = 'jj-test-docker-hub'
      dockerImage = ''
    }
    stages {
        stage('Build Image') {
            steps {
                script {
                  //  dockerImage = docker.build registry + ":${env.APP_TAG}"
                    dockerImage = docker.build(registry + ":${env.APP_TAG}", "--build-arg GIT_COMMIT_HASH=${APP_TAG}")
                }
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
                script {
                        docker.withRegistry( '', REGISTRY_CREDENTIALS ) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}