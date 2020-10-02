pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                checkout scm
                if(env.GIT_BRANCH == "origin/master")
                {
                    echo "MASTER IS HERE"
                }
                else
                {
                    echo "DEVELOPER IS HERE"
                }
    
            }
        }
    }
}