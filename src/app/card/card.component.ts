import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  //templateUrl: './card.component.html',
    template: `<div class="card">
                  <div class="card__plan card__item">Plano <b>teste</b></div>
                  <div class="card__price card__item">R$ {{plano.valor}}</div>
                  <app-card-button></app-card-button>
                  <app-card-cancel-button></app-card-cancel-button> 
                </div>`,
  styleUrl: './card.component.scss'
})
export class CardComponent {

  plano = {
    tipo: 'adsada aa',
    valor:300,
  }


}
