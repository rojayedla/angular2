# Angular6withFirebaseCurd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


connecting firebase projects steps:

Step1: 
1. create the angularcli project 
ex: ng new Angular6withFirebaseCurd
Step 2: 
1. console.firebase.google.com
2. click on Add project -> (project name: FirebaseCURD) continue -> develop -> click on (Real time ) create Database.
3. select start test mode -> enable-> dismiss.

install npm in angularproject
Step 3: 
1. npm i --s firebase angularfire2
2. goto firebase project overview -> click on webprojecticon </> abd copy the code 
	environment -> environment.ts copy this code 
	
	export const environment = {
  production: false,
 firebaseConfig:    {
      apiKey: 'AIzaSyD-lV5JS_XBiYRwj-hL8jfjpjqF1Z9WYW4',
      authDomain: 'fir-curd-3addc.firebaseapp.com',
      databaseURL: 'https://fir-curd-3addc.firebaseio.com',
      projectId: 'fir-curd-3addc',
      storageBucket: 'fir-curd-3addc.appspot.com',
      messagingSenderId: '304544609630'
    }

};
Step 4:
3. import the firebase module and environgment file in app-module.ts file
	
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
  imports: [
 AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
	]
