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
- DrawingPad
- - using https://www.npmjs.com/package/signature_pad

# react-ionic-test

- instructions: https://ionicframework.com/docs/react/your-first-app
- tsconfig.js turned strict to false
- converted ts back to js
- `ionic serve` to start, localhost:8100

# react-reactnative-test

- instructions: https://facebook.github.io/react-native/docs/getting-started
- installed expo cli (interesting name) expo init [projectname]
- npm start (localhost:19002)
- not particularly useful for desktop development of app as it doesn't build to webview
- would need android studio and/or xcode to make any real use of this, can't just run in chrome

#vue-ionic-localforage-test

- using base of vue-ionic-test and adding in localforage code
- https://www.npmjs.com/package/localforage
- https://www.npmjs.com/package/vue-localforage
- for cryptojs using sjcl
- - https://www.npmjs.com/package/sjcl
- - http://bitwiseshiftleft.github.io/sjcl/
- - https://github.com/bitwiseshiftleft/sjcl
