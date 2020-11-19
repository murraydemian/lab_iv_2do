import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-listado',
  templateUrl: './item-listado.component.html',
  styleUrls: ['./item-listado.component.scss']
})
export class ItemListadoComponent implements OnInit {

  @Input() data: any;
  @Input() tipo: string = "materias";
  @Output() onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  elegir(){
    this.onSelect.emit(this.data);
  }

}
