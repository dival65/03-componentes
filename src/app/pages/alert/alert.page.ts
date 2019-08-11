import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public titulo: string;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Ok');
          }
        },
      ]
    });

    await alert.present();
  }

  // input del nombre del componente
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Introduce un nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Boton OK', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }
}
