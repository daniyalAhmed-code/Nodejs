pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sshagent (credentials:['d79a83a1-c3a8-4a99-96e1-cd84e5c9898e']){
                 sh 'ssh -p 122 -o StrictHostKeyChecking=no ec2-user@ec2-3-21-231-10.us-east-2.compute.amazonaws.com'   
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
        }
    }
}