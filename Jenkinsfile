pipeline {
  agent any
    
  tools {nodejs 'node'}
    
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
        sh 'npm run test'
      }
    }
    stage('Test Coverage') {
      steps {
        sh 'npm run get-coverage'
      }
    }
  }
}
