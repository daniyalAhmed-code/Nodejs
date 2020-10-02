def AGENT_LABEL = null

node('master') {
  stage('Checkout and set agent'){
     checkout scm
     if (env.BRANCH_NAME == 'master') {
        AGENT_LABEL = "prod"
     } else {
        AGENT_LABEL = "dev"
     }
   }
}

pipeline {
    agent {
       label "${AGENT_LABEL}"
    }

    stages {
        stage('Normal build') {
           steps {
              echo "Running in ${AGENT_LABEL}"
           
           }
        } 

         stage('Test build') {
           steps {
              echo "Running in ${AGENT_LABEL}"
           
           }
        } 
    }
}
