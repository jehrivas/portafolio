import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any [] = [];
  // tslint:disable-next-line:no-inferrable-types
  cargando: boolean = true;

  constructor( private http: Http ) {

    this.cargar_productos();

   }

   public cargar_producto( cod: string ) {
    return this.http.get(`https://paginaweb-94813.firebaseio.com/productos/${ cod }.json`);
  }

public cargar_productos() {

  this.cargando = true;

   this.http.get('https://paginaweb-94813.firebaseio.com/productos_idx.json').subscribe( res => {

    // console.log(res.json());
    this.cargando = false;
    this.productos = res.json();

    });

  }


}
