pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                 checkout scm
               script {
                    if(env.GIT_BRANCH == "origin/master") {
                     sshPublisher(publishers: [sshPublisherDesc(configName: 'daniyal-ec2', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'ls -la', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                        echo 'I only execute on the master branch'
                    } else {
                         sshPublisher(publishers: [sshPublisherDesc(configName: 'daniyal-dev', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'ls -la', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                        echo 'I execute elsewhere'
                        echo 'branch'
                    }
                }
                }
            }
        
        }
    }