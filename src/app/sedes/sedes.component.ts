import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})
export class SedesComponent implements OnInit {
  data;
  codins;

  constructor(
    private peticiones: PeticionesService,
    private rutaActiva: ActivatedRoute

  ) { }

  ngOnInit() {
    this.codins = this.rutaActiva.snapshot.params.instituciones;
    this.obtenerDatos();
  }

  async obtenerDatos() {
    try {
      this.data = await this.peticiones.obtenerSedes(this.codins);
      console.log(this.data);
    } catch (error) {
      console.log('Error al obtener datos');
    }
  }

}
