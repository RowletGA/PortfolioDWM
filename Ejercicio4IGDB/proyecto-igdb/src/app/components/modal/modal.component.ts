import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() juego: any;
  @Output() cerrar = new EventEmitter<void>();
  
  cerrarModal() {
    this.cerrar.emit();
  }
}
