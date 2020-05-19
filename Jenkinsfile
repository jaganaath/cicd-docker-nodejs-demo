
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
                    dockerImage = docker.build registry + ":${env.APP_TAG}"
                   // dockerImage = docker.build(registry + ":${env.APP_TAG}", "--build-arg GIT_COMMIT_HASH=${APP_TAG} --network host -f Dockerfile .")
                }
            }
        }
        stage('Unit Testing') {
            steps {
                echo 'Unit testing'
                sh "docker run -it -d -p 3000:3000 ${env.REGISTRY}:${env.APP_TAG}"
                sh "npm run test"
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