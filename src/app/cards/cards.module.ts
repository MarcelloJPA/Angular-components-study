import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardCancelButtonComponent } from '../card-cancel-button/card-cancel-button.component';





@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
    CardCancelButtonComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    CardComponent,
    CardRoxoComponent,
  ],
})
export class CardsModule { }
