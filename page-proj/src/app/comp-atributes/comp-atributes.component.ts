import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributes',
  templateUrl: './comp-atributes.component.html',
  styleUrls: ['./comp-atributes.component.css']
})
export class CompAtributesComponent implements OnInit 
{
  estilo: string = "enable"
  constructor() { }

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
