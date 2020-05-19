
pipeline {
    agent any
    // Environment variables
    environment {
      APP_TAG = "${GIT_COMMIT[0..7]}"   // Gets the last commit hash
      REGISTRY = "jaganaath/test"   // Docker Hub Registry
      REGISTRY_CREDENTIALS = 'jj-test-docker-hub'   // Jenkins configured credentials for DockerHub
      dockerImage = ''
    }
    stages {
        stage('Build Image') {  // Build image with Git commit hash tag
            steps {
                script {
                    dockerImage = docker.build registry + ":${env.APP_TAG}"
                }
            }
        }
        stage('Unit Testing') { // Perform integration testing. See files under 'test'
            steps {
                echo 'Integration testing'
                // << Integration testing to be integrated here >> //
            }
        }
        stage('Push Image') {   // Push the image to Docker Hub repository
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