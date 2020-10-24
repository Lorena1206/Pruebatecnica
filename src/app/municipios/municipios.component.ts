import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent implements OnInit {
  data;
  constructor(
    private peticiones: PeticionesService
  ) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  async obtenerDatos() {
    try {
      this.data = await this.peticiones.obtenerMunicipios();
      console.log(this.data);
    } catch (error) {
      console.log('Error al obtener datos');
    }
  }
}
