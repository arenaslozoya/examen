import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
usuarios =[];
correo;
contra;
nombre;
tel;

constructor(public navCtrl: NavController, public navParams: NavParams,public alert: AlertController, public storage: Storage) {
  this.usuarios = this.navParams.get('usuarios');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  clickRegistro() {
    if(this.correo.length > 0 && this.tel.length > 0 && this.nombre.length > 0 && this.contra.length >= 8)
    {
    console.log(this.correo);
    console.log(this.contra);
    this.usuarios.push({
      correo: this.correo,
      contra: this.contra,
      tel: this.tel,
      nombre: this.nombre
    });
    }
    else{
      console.log("la nota está vacía");
  
      const alert = this.alert.create({
        title: "Ooops!",
        subTitle: "Algun parametro esta vacio o la contraseña no es mayor a 8 caractereres",
        buttons: ['OK']
      });
      alert.present();
    }
    
    // modicar la llave para tener diferentes usuarios
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
    this.navCtrl.pop();
  }
}
