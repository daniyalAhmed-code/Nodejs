pipeline {
    agent any
    stages {
        stage('---clean---') {
            steps {
                checkout scm
                echo env.GIT_BRANCH
            }
        }
        stage('--test--') {
            steps {
                echo 'test'
            }
        }
        stage('--package--') {
            steps {
                echo 'package'
            }
        }
    }
}