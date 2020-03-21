import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponenteComponent } from '../components/componente/componente.component';


@NgModule({
  declarations: [ComponenteComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports: [ComponenteComponent]
})
export class ComponentsModule { }
