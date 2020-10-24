import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {
  data;
  codGru;

  constructor(
    private peticiones: PeticionesService,
    private rutaAcitva: ActivatedRoute
  ) { }

  ngOnInit() {
    this.codGru = this.rutaAcitva.snapshot.params.grupos;
    this.obtenerDatos();
  }

  async obtenerDatos() {
    try {
      this.data = await this.peticiones.obtenerInformacion(this.codGru);
      console.log(this.data);
    } catch (error) {
      console.log('Error al obtener datos');
    }
  }

}
