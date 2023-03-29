import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.page.html',
  styleUrls: ['./detalle-actividad.page.scss'],
})
export class DetalleActividadPage implements OnInit {
  cards = [
    {
      nombre: 'VicWithGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 2,
      comments: 7,
      shared: 5,
    },
    {
      nombre: 'VicWithFastGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 10,
      comments: 7,
      shared: 5,
    },
    {
      nombre: 'VicWithFastGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 2,
      comments: 7,
      shared: 5,
    },
  ];

  id: any;
  actividad: any;
  constructor(private AR: ActivatedRoute, private CS: ClientService) { }

  ngOnInit() {
    // localStorage.clear();
    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    localStorage.setItem('id',this.id)
    this.getActividad(this.id);
  }

  getActividad(id: number){
    this.CS.getActividad(id).subscribe((data: any) =>{
      console.log(data);
      this.actividad = [data];
    });
  }

}
