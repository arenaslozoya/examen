import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage';
import { PrincipalPageModule } from '../principal/principal.module';
import { PrincipalPage } from '../principal/principal';
import { CarritoPage } from '../carrito/carrito';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
registro = RegistroPage;
principal = PrincipalPage;
carrito = CarritoPage;
usuarios=[];
correo;
contra;
  constructor(public navCtrl: NavController, 
    public alert: AlertController,
    public storage: Storage) {
     this.storage.keys()
      .then(keys => {
        if(keys.some(k => k == 'usuarios')){
        this.storage.get('usuarios')
        .then(usuarios =>{
          this.usuarios= JSON.parse(usuarios);})
     }
  });
  }
  clickRegistro()
  {
    this.navCtrl.push(this.registro, {usuarios:this.usuarios});
  }

  clickMensaje(){
    console.log(this.correo);
    console.log(this.contra);

    let index = this.usuarios.findIndex(u => u.correo == this.correo && u.contra == this.contra);

    if (index >= 0) {

      this.navCtrl.push(this.principal);
      }
      
    
    else {
      const alerta = this.alert.create({
        title: "App",
        subTitle: "Inicio de Sesión No Válido",
        buttons: ['Ok']
      });
      alerta.present();
    }

  }
}
