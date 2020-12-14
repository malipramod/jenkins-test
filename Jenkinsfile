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
    stage('Build') {
      steps {
        sh 'echo "Building"'
        sh 'npm run build'
      }
    }
    stage('Test Coverage') {
      steps {
        sh 'echo "Running test coverage report"'
        sh 'CI=true npm test ${testCoverage}'
      }
    }
    stage('Test') {
      steps {
        sh 'echo "Running tests"'
        sh 'CI=true npm test ${watchAll}'
      }
    }  
  }
}
