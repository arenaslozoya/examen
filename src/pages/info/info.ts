import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
producto;
reviews;
carrito = CarritoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = this.navParams.get('producto');
    this.reviews = this.navParams.get('reviews');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  clickCarrito(p)
  {
  this.navCtrl.push(this.carrito,{carrito:p});
  }
}
