pipeline {
  agent any
    
  tools {nodejs 'node'}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/malipramod/jenkins-test'
      }
    }
    stage('Install') {
      steps {
        sh 'echo "Installing depedency"'
        sh 'npm install'
      }
    }        
    stage('Test Coverage') {
      steps {
        sh 'echo "Running test coverage report"'
        sh 'npm run test'
      }
    },
    stage('Test') {
      steps {
        sh 'echo "Running tests"'
        sh 'npm test'
      }
    }
  }
}
