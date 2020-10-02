pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                checkout scm
               script {
                    if(env.GIT_BRANCH == "origin/master") {
                        echo 'I only execute on the master branch'
                    } else {
                        echo 'I execute elsewhere'
                    }
                }
               
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