import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  menuType: string = ""
  corFundo: string = "#8a8ae7"

  constructor() { 
    this.produtos = [
      "mouse",
      "teclado",
      "fonte",
      "monitor"
    ]
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("mousepad")
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }

}
