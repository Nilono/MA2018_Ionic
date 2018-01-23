import { Component } from '@angular/core';
import {ActionSheetController, AlertController, LoadingController, NavController, ToastController} from 'ionic-angular';
import {NavigationPage} from "../navigation/navigation";

@Component({
  selector: 'page-components',
  templateUrl: 'components.html'
})
export class ComponentsPage {

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController,
                public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController) {

    }

    showToast() {
        let toast = this.toastCtrl.create({
            message: 'This is an example of a toast',
            duration: 3000
        });
        toast.present();

    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Example Alert',
            subTitle: 'This is an example of a basic alert',
            buttons: ['Understood!']
        });
        alert.present()
    }

    showLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }

    showActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'An example action sheet',
            buttons: [
                {
                    text: 'Option1',
                    role: 'option1',
                    handler: () => {
                        console.log('Option1 clicked');
                    }
                },{
                    text: 'Option2',
                    handler: () => {
                        console.log('Option2 clicked');
                    }
                },{
                    text: 'Option3',
                    role: 'option3',
                    handler: () => {
                        console.log('Option3 clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    goToAbout() {
        this.navCtrl.push(NavigationPage);
    }
}