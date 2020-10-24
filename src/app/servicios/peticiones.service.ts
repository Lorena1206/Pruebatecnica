import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(
    public http: HttpClient
  ) { }

  /**
   * Funcion realizada para obtener municipios
   */
  obtenerMunicipios() {
    return new Promise(async (resolve, reject) => {
      try {
        let dataPeticion = {
          User: 'etraining',
          Password: 'explorandoando2020%',
          option: 'municipios'
        };
        let data = await this.http.post('https://www.php.engenius.com.co/DatabaseIE.php', dataPeticion,
          { headers: httpHeaders }).toPromise();
        console.log(data);

        if (data['login'] == "Success") {
          resolve(data['data']);
        } else {
          reject();
        }

      } catch (error) {
        reject();
      }
    });
  }

  /**
   * Funcion realizada para obtener instituciones
   * @param codMun Codigo Municipo
   */
  obtenerInstituciones(codMun) {
    return new Promise(async (resolve, reject) => {
      try {
        let dataPeticion = {
          User: 'etraining',
          Password: 'explorandoando2020%',
          option: 'instituciones',
          CodMun: codMun
        };
        let data = await this.http.post('https://www.php.engenius.com.co/DatabaseIE.php', dataPeticion,
          { headers: httpHeaders }).toPromise();
        console.log(data);

        if (data['login'] == "Success") {
          resolve(data['data']);
        } else {
          reject();
        }

      } catch (error) {
        reject()
      }
    });
  }
  /**
   * funcion para obtener datos de las sedes
   * @param codins codigo de la institucion 
   */

  obtenerSedes(codins) {
    return new Promise(async (resolve, reject) => {
      try {
        let dataPeticion = {
          User: 'etraining',
          Password: 'explorandoando2020%',
          option: 'sedes',
          CodInst: codins
        };
        let data = await this.http.post('https://www.php.engenius.com.co/DatabaseIE.php', dataPeticion,
          { headers: httpHeaders }).toPromise();
        console.log(data);

        if (data['login'] == "Success") {
          resolve(data['data']);
        } else {
          reject();
        }

      } catch (error) {
        reject()
      }
    });
  }


  obtenerGrupos(codsedes) {
    return new Promise(async (resolve, reject) => {
      try {
        let dataPeticion = {
          User: 'etraining',
          Password: 'explorandoando2020%',
          option: 'grupos',
          CodSede: codsedes
        };
        let data = await this.http.post('https://www.php.engenius.com.co/DatabaseIE.php', dataPeticion,
          { headers: httpHeaders }).toPromise();
        console.log(data);

        if (data['login'] == "Success") {
          resolve(data['data']);
        } else {
          reject();
        }

      } catch (error) {
        reject()
      }
    });
  }

  obtenerInformacion(codGrupos) {
    return new Promise(async (resolve, reject) => {
      try {
        let dataPeticion = {
          User: 'etraining',
          Password: 'explorandoando2020%',
          option: 'infoGrupo',
          IdGrupo: codGrupos
        };
        let data = await this.http.post('https://www.php.engenius.com.co/DatabaseIE.php', dataPeticion,
          { headers: httpHeaders }).toPromise();
        console.log(data);

        if (data['login'] == "Success") {
          resolve(data['data'][0]);
        } else {
          reject();
        }

      } catch (error) {
        reject()
      }
    });
  }

}

