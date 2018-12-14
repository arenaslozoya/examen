import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { CarritoPage } from '../carrito/carrito';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
info = InfoPage;
carritoP = CarritoPage;
productos = [
   {
    nombre: "La razón de estar contigo",
    precio: 299.00,
    foto: "../assets/LRDEC.jpg",
    vendedor: {
    nombre: "Milla Ramos de Hoyos",
    valoracion: [1, 2, 3, 4 , 5]},
    reviews: 
    {
    username: "Jose L. Nieto",
    avatar: "../assets/carita.jpg",
    fecha: "2018-11-27",
    review: "Después de leer la razón de estar contigo, nunca verás a tu perro de la misma forma"
    },
    fecha: "2018-10-2",
    disponibles: 55
   },

   {
    nombre: "El fuego invisible",
    precio: 298.00,
    foto: "../assets/FI.jpg",
    vendedor: {
    nombre: "Jenny Stuart",
    valoracion: [1, 2, 3]},
    reviews: 
    {
    username: "Sofia Torres",
    avatar: "../assets/carita.jpg",
    fecha: "2018-10-7",
    review: "Las aventuras no tienen nada de interesante, ninguno de los personajes está bien desarrollado "
    },
    fecha: "2018-10-2",
    disponibles: 104
   },
   {
    nombre: "La luz entre nosotros",
    precio: 239.00,
    foto: "../assets/LLEN.jpg",
    vendedor: {
    nombre: "Barbara",
    valoracion: [1, 2, 3,4,5]},
    reviews: 
    {
    username: "KEAL",
    avatar: "../assets/carita.jpg",
    fecha: "2018-5-13",
    review: "Un libro esperanzador, el cual brinda un mensaje muy importante, el alma vive por siempre, compartiendo su luz  "
    },
    fecha: "2018-10-2",
    disponibles: 80
   },
   {
    nombre: "El color prohibido",
    precio: 266.00,
    foto: "../assets/ECP.jpg",
    vendedor: {
    nombre: "Juan Eslava",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Pedro Rosas",
    avatar: "../assets/carita.jpg",
    fecha: "2018-5-23",
    review: "Que buen libro, estoy esperando la secuela"
    },
    fecha: "2018-10-2",
    disponibles: 39
   },
   {
    nombre: "El asesinato de Pitágoras",
    precio: 455.00,
    foto: "../assets/ADP.jpg",
    vendedor: {
    nombre: "Angeles Gonzalez",
    valoracion: [1, 2, 3, 4]},
    reviews: 
    {
    username: "Rene Gómez",
    avatar: "../assets/carita.jpg",
    fecha: "2018-6-1",
    review: "Me pareció apasionante. Leí también el siguiente libro, muy interesante. "
    },
    fecha: "2018-10-2",
    disponibles: 199
   },
   {
    nombre: "Sino, lo matamos",
    precio: 1175.00,
    foto: "../assets/SNLM.jpg",
    vendedor: {
    nombre: "Olivia Sánchez",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Nicolas A.",
    avatar: "../assets/carita.jpg",
    fecha: "2018-10-20",
    review: "Me gustó mucho, el crimen que pone todo en marcha no es un asesinato. Me encanto "
    },
    fecha: "2018-10-2",
    disponibles: 789
   },
   {
    nombre: "Una vida ajena",
    precio: 328.00,
    foto: "../assets/UVA.jpg",
    vendedor: {
    nombre: "Juan Javier González",
    valoracion: [1, 2, 3, 4]},
    reviews: 
    {
    username: "R. Vincent",
    avatar: "../assets/carita.jpg",
    fecha: "2018-4-9",
    review: "El mejor libro, el mejor regalo que he comprado"
    },
    fecha: "2018-10-2",
    disponibles: 687
   },
   {
    nombre: "Flight or Fright",
    precio: 421.00,
    foto: "../assets/FOF.jpg",
    vendedor: {
    nombre: "B. Silvia",
    valoracion: [1, 2, 3, 4]},
    reviews: 
    {
    username: "Cheryl Stout",
    avatar: "../assets/carita.jpg",
    fecha: "2018-4-9",
    review: "Is a variety of horror, sci-fi and murder-mystery…plus one poem. I love it!"
    },
    fecha: "2018-10-2",
    disponibles: 67
   },
   {
    nombre: "Harry Potter (8 book series)",
    precio: 1438.00,
    foto: "../assets/HP.jpg",
    vendedor: {
    nombre: "Jesus Armando",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Miguel Mendez",
    avatar: "../assets/carita.jpg",
    fecha: "2018-4-2",
    review: "This is the greatest book series that has ever been written."
    },
    fecha: "2018-10-2",
    disponibles: 24
   },
   {
    nombre: "Percy Jackson and the Olympians (5 book series)",
    precio: 420.00,
    foto: "../assets/PJ.jpg",
    vendedor: {
    nombre: "Israel León",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Senta McAdoo",
    avatar: "../assets/carita.jpg",
    fecha: "2018-3-6",
    review: "My son couldn´t put them down and he is 9 years old."
    },
    fecha: "2018-10-2",
    disponibles: 94
   },
   {
    nombre: "Fantastic Beasts: The Crimes of Grindelwand",
    precio: 235.00,
    foto: "../assets/FB.jpg",
    vendedor: {
    nombre: "José Gabriel García",
    valoracion: [1, 2, 3]},
    reviews:
    {
    username: "Mary Jo",
    avatar: "../assets/carita.jpg",
    fecha: "2018-11-16",
    review: "Sin duda uno de los mejores libros que podrás leer, muy recomendado y llego en excelentes condiciones."
    },
    fecha: "2018-10-2",
    disponibles: 297
   },
   {
    nombre: "Game of Thrones (5 book series)",
    precio: 1046.00,
    foto: "../assets/GOT.jpg",
    vendedor: {
    nombre: "Gabriel Alejandro",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Victor León",
    avatar: "../assets/carita.jpg",
    fecha: "2018-10-6",
    review: "Excelente boxset, sinceramente amo la saga."
    },
    fecha: "2018-10-2",
    disponibles: 227
   },
   {
    nombre: "La Cabaña",
    precio: 110.00,
    foto: "../assets/LC.jpg",
    vendedor: {
    nombre: "Shior Salazar",
    valoracion: [1, 2, 3, 4]},
    reviews:
    {
    username: "Marco Mejia",
    avatar: "../assets/carita.jpg",
    fecha: "2018-1-16",
    review: "Muy interesante como presenta la trama y rompen esquemas que la religión ha marcado."
    },
    fecha: "2018-10-2",
    disponibles: 83
   },
   {
    nombre: "Las batallas en el desierto",
    precio: 204.00,
    foto: "../assets/LBEED.jpg",
    vendedor: {
    nombre: "Samash Urias",
    valoracion: [1, 2, 3, 4]},
    reviews: 
    {
    username: "Rodolfo Ismael",
    avatar: "../assets/carita.jpg",
    fecha: "2018-8-5",
    review: "El libro llegó en muy buenas condiciones, indudable su contenido es interesante y seguramente lo aprovecharé"
    },
    fecha: "2018-10-2",
    disponibles: 30
   },
   {
    nombre: "El principito",
    precio: 178.00,
    foto: "../assets/EP.jpg",
    vendedor: {
    nombre: "José Luis Naranjo",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Marcela Hernández",
    avatar: "../assets/carita.jpg",
    fecha: "2018-7-5",
    review: "Excelente libro, todo un clásico que me encanta tenga la edad que tenga"
    },
    fecha: "2018-10-2",
    disponibles: 304
   },
   {
    nombre: "The Hobbit and the Lord of the Rings",
    precio: 595.00,
    foto: "../assets/LOTR.jpg",
    vendedor: {
    nombre: "Rosa Ahide",
    valoracion: [1, 2, 3, 4]},
    reviews: 
    {
    username: "Eduardo Morantes",
    avatar: "../assets/carita.jpg",
    fecha: "2018-7-25",
    review: "Los libros están en muy buenas condiciones, me gustaron, de muy buena calidad"
    },
    fecha: "2018-10-2",
    disponibles: 232
   },
   {
    nombre: "La maldición de Hill House",
    precio: 189.00,
    foto: "../assets/LMDHH.jpg",
    vendedor: {
    nombre: "Aylenn Analy",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Jack Dassaev",
    avatar: "../assets/carita.jpg",
    fecha: "2018-30-12",
    review: "Me gusto el misterio, la historia y los personajes. Gran producto de gran calidad"
    },
    fecha: "2018-10-2",
    disponibles: 43
   },
   {
    nombre: "La chica del tren",
    precio: 288.00,
    foto: "../assets/LCDT.jpg",
    vendedor: {
    nombre: "Beto H.",
    valoracion: [1, 2, 3, 4]},
    reviews: 
    {
    username: "Alexis Sandoval ",
    avatar: "../assets/carita.jpg",
    fecha: "2018-8-6",
    review: "Me ha gustado y me ha mantenido pegado a él desde que lo inicié a leer."
    },
    fecha: "2018-10-2",
    disponibles: 483
   },
   {
    nombre: "El barco de los niños",
    precio: 347.00,
    foto: "../assets/EBDLN.jpg",
    vendedor: {
    nombre: "María Teresa Elorza.",
    valoracion: [1, 2, 3, 4, 5]},
    reviews: 
    {
    username: "Verónica Burquez ",
    avatar: "../assets/carita.jpg",
    fecha: "2018-1-9",
    review: "Me encantó el libro, era un regalo pero ahora me lo quedaré yo"
    },
    fecha: "2018-10-2",
    disponibles: 496
   },
   {
    nombre: "The Handmaid´s Tale",
    precio: 259.00,
    foto: "../assets/THT.jpg",
    vendedor: {
    nombre: "Raul Juarez",
    valoracion: [1, 2, 3, 4]},
    reviews:
    {
    username: "Mariela",
    avatar: "../assets/carita.jpg",
    fecha: "2018-16-7",
    review: "Este libro es increíble. Súper bien escrito, donde la historia te atrapa y es difícil soltarlo."
    },
    fecha: "2018-10-2",
    disponibles:  242
   }
  ];

  carrito = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrito = this.navParams.get('carrito');
  }
  clickInfo(p)
  {
    this.navCtrl.push(this.info,{producto:p , carrito: this.carrito});
  }
  clickCarrito()
  {
    this.navCtrl.push(this.carritoP,{carrito: this.carrito});
  }
}

