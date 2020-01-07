# ionic-frameworkjs-tests

# vue-ionic-test

- instructions: https://ionicframework.com/blog/announcing-the-ionic-vue-beta/
- caveats
- - there is a bug between ionic and vue that has to deal with the ionicons
- - - https://github.com/ionic-team/ionic/issues/20031
- - - https://github.com/ionic-team/ionic/issues/18640
- - - https://forum.ionicframework.com/t/export-icon-paths-was-not-found-in-ionicons-icons/167394/8
- - work around solution
- - - delete node_modules folder
- - - add in "ionicons": "4.5.9-1" to dev dependences
- - - npm install
- finally got navigation working

# react-ionic-test

- instructions: https://ionicframework.com/docs/react/your-first-app
- tsconfig.js turned strict to false
- converted ts back to js
