import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributes',
  templateUrl: './comp-atributes.component.html',
  styleUrls: ['./comp-atributes.component.css']
})
export class CompAtributesComponent implements OnInit 
{
  estilo: string = "enable"
  corFundo: string = "#8a8ae7"
  item: string = ""
  lista: string[] = []
  isEnableBlock: boolean = true

  constructor() { }

  adicionarItem()
  {
    this.lista.push(this.item)
  }

  removerItem(index: number)
  {
    this.lista.splice(index, 1)
  }
  
  ngOnInit(): void { }

  Change()
  {
    if(this.estilo == "disable")
    {
      this.estilo = "enable"
    } else 
    {    
      this.estilo = "disable"
    }
  }
}
