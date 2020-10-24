import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {
  data;
  codMun;
  constructor(
    private peticiones: PeticionesService,
    private rutaActiva: ActivatedRoute
  ) { }


  ngOnInit() {
    this.codMun = this.rutaActiva.snapshot.params.municipio;
    this.obtenerDatos();
  }

  async obtenerDatos() {
    try {
      this.data = await this.peticiones.obtenerInstituciones(this.codMun);
      console.log(this.data);
    } catch (error) {
      console.log('Error al obtener datos');
    }
  }

}
