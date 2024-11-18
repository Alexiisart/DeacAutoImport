import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-vehiculo',
  templateUrl: './modal-vehiculo.component.html',
  styleUrls: ['./modal-vehiculo.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ModalVehiculoComponent {
  @Input() isOpen = false;
  @Input() vehiculo: any;
  @Output() close = new EventEmitter<void>();

  closeModal(event: MouseEvent): void {
    if (
      event.target === event.currentTarget ||
      (event.target as Element).classList.contains('close-button')
    ) {
      this.close.emit();
    }
  }
}
