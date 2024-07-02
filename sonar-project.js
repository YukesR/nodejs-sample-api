const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'https://sonarqube.bitcotapps.com/',
        options : {
            'sonar.login' : 'squ_390eb3f3abe1fbe34c98f5983e3c9105fc7cafd1',
            'sonar.projectKey' : 'sample-project',
            'sonar.sources':  '.',
            'sonar.tests':  '.',
            'sonar.inclusions'  :  'index.js', 
            'sonar.test.inclusions':  'index.test.js',
            'sonar.javascript.lcov.reportPaths':  './coverage/lcov.info'
        }
    }, () => {});
