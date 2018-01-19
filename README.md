# Ionic Framework

## Purpose of this document

This document outlines essential information about the Ionic framework including installation, basic navigation and use of components. The repository demonstrates some of these features in a demo app.

## What is Ionic?

* a open-source web framework for developing hybrid apps for both iOS and Android
* a npm module (therefore requires Node.js)
* uses familiar web technologies like HTML5, CSS, Sass and JavaScript/TypeScript
* based on Angular and Apache Cordova
* offers multiple UI-elements and helps to create interactive mobile apps
* focuses on the front-end side of mobile apps

## Technical Requirements

* latest version of Ionic Command Line Utility (CLI)
	* tool that provides helpful developer commands
	* installs and updates Ionic
	* comes with a built-in development server
* latest version of Cordova
* recent version of Node.js

## How to create a new Ionic app

Running the following command from the command line will create a new project, install npm modules for the application and set up Cordova:

`$ ionic start MyIonicProject tabs`

Ionic offers some standard app templates, e.g. including layouts using tabs or a swipable side menu.
A quick preview of the app in the browser can be shown by using the serve command from within the project folder:

	$ cd MyIonicProject
	$ ionic serve

## Project Structure / Important Files

### `src/index.html`
* main entry point for the app
* sets up script and CSS includes and bootstrap
* includes the following scripts:
	* `build/main.js`: concatenated file containing Ionic, Angular and the app’s JavaScript
	* `cordova.js`: gets injected into the project during Cordova’s build process

### `src/app/app.module.ts`
* entry point for the app
* includes declarations, imports, bootstraps, entryComponents and providers

### `src/app/app.component.ts`
* root component of the app, first one to be loaded
* empty shell for other components to be loaded into
* in there, the template gets set to `src/app/app.html`

## Basic Navigation between pages

Navigation in Ionic works like a **stack**:

* use `push` to push new pages onto the top of the stack, which will navigate the user forward in the app and show a back button
* use `pop` to pop the top page off and go backwards in the app

The corresponding method is called `this.navCtrl.push(X)` and will navigate to the page **X**. One can also pass additional data to the next page.


## Components
The Ionic framework comes with a large number of components, e.g. `modals`, `popups` and `cards`, allowing one to quickly construct app interfaces.

Basics components such as buttons can easily be added to html files via `<button ion-button>Button</button>`.
Other components such as Toasts (subtle notifications) need to be imported in the corresponding `.ts` file of the page and given functionality:

	import { ToastController } from 'ionic-angular';

	export class HomePage {
	  constructor(public toastCtrl: ToastController) {
	  }

	  showToast() {
	    let toast = this.toastCtrl.create({
	      message: 'This is an example of a toast',
	      duration: 3000
	    });
	    toast.present();
	  }
	}

## Further Documentation
Check out the offical Ionic Documentation at <https://ionicframework.com/docs/>