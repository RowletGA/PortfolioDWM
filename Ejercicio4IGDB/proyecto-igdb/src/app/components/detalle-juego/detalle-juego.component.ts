import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() juego: any; 

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
  }

  cerrarModal(): void {
    this.bsModalRef.hide(); 
  }
}
