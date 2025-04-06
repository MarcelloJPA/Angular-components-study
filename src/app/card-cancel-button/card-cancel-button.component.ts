import { Component } from '@angular/core';

@Component({
  selector: 'app-card-cancel-button',
  templateUrl: './card-cancel-button.component.html',
  //styleUrl: './card-cancel-button.component.scss'
  styles:[

    `.card-cancel-button{
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: yellow;
      cursor: pointer;
      padding:10px;
  }
    
    `
  ],
})
export class CardCancelButtonComponent {

}
