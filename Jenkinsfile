pipeline {
  agent any
    
//  tools {NodeJS "NodeJS"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/malipramod/jenkins-test'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
