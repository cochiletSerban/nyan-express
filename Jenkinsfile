pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/cochiletSerban/nyan-express', branch: 'master')
      }
    }

    stage('build') {
      steps {
        sh 'npm i'
      }
    }

  }
}