import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Servicio1Service } from '../services/servicio1.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  // arrPersonas : Array<any> = [] as Array<JSON>;
  // blnNext : boolean;
  // blnNotes : boolean;
  // strMessage : string;
  // clnNombre: string;
  // clnCorreo: string;
  // clnTelefono: number;
  // clnNotas: string;
  // sexo2 : string;
  // sexo : boolean;
  // tslint:disable-next-line: max-line-length
  // regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public alertController: AlertController, public servicio: Servicio1Service) {}


  // async addPerson(strNombre : string, intNumero : number, strCorreo : string, strNotas : string){

  //   if(this.sexo2 === 'Femenino'){
  //     this.sexo = false;
  //   }else if(this.sexo2 === 'Masculino'){
  //     this.sexo = true;
  //   }

  //   this.strMessage = '';

  //   this.blnNext = false;

  //   (strNombre)? this.fnError() : this.fnError('Error: Llena el nombre plox');
  //   (intNumero)? this.fnError() : this.fnError('Error : Osea te estoy pidiendo el teléfono');
  // tslint:disable-next-line: max-line-length
  //   (strCorreo)? (this.regexp.test(strCorreo)) ? this.fnError() : this.fnError('Error : No puedes poner un simple correo?') : this.fnError('Error : Favor de llenar el correo <.<');
  //   (strNotas)? this.fnError() : this.fnError('Error : Dejame una notita c;');

  //   this.clnNombre='';
  //   this.clnTelefono = 0;
  //   this.clnCorreo='';
  //   this.clnNotas='';

  //   let sex = this.sexo;

  //   if(!this.blnNext){
  //     const jsnPersona: any = {
  //       strNombre,
  //       intNumero,
  //       strCorreo,
  //       strNotas,
  //       sex
  //     };
  //   this.arrPersonas.push(jsnPersona);
  //   console.log(this.arrPersonas);

  //   const alert = await this.alertController.create({
  //     header: 'Niceee',
  //     message: 'Tienes un nuevo amigo!',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  //   }else{
  //     this.presentAlert();
  //   }
  // }

  // fnError(msg?: string){
  //   if(msg){
  //     //console.log(msg);
  //     this.strMessage += '<br>' + msg + '<br>';
  //     this.blnNext = true;
  //   }else if(this.blnNext){
  //     this.blnNext = true;
  //   }else{
  //     this.blnNext = false;
  //   }
  // }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Erroresssss',
  //     message: this.strMessage,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  // async borrarPaSiempre(item){
  //   const alert = await this.alertController.create({
  //     message : 'Se borrará pa siempre e.e',
  //     buttons : [
  //         {
  //           text : 'Mejor nel',
  //           role : 'cancel'
  //         },
  //         {
  //           text : 'Sisi ya a la chin...',
  //           handler: () => {
  //             let i = this.arrPersonas.indexOf(item);
  //             this.arrPersonas.splice(i,1);
  //           }
  //         }
  //     ]
  //   });
  //   alert.present();
  // }

  // showNotes($event){
  //   console.log($event.detail.checked);
  //   return this.blnNotes = $event.detail.checked;
  // }
  
}