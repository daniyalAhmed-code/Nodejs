pipeline {
    agent any
    stages {
        stage('---clean---') {
            steps {
                checkout scm
                echo env.BRANCH_NAME
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