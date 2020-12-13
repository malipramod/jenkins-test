pipeline {
  agent any
    
  tools {NodeJS "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/malipramod/jenkins-test'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
