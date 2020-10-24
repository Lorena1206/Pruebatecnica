import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {
  data;
  codsedes;

  constructor(
    private peticiones: PeticionesService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
    this.codsedes = this.rutaActiva.snapshot.params.sedes;
    this.obtenerDatos();
  }
  async obtenerDatos() {
    try {
      this.data = await this.peticiones.obtenerGrupos(this.codsedes);
      console.log(this.data);
    } catch (error) {
      console.log('Error al obtener datos');
    }
  }


}
