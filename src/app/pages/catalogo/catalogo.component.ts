import { Component, OnInit } from '@angular/core';
import { vehiculos } from '../../data/articulos';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModalVehiculoComponent } from '../../components/modal-vehiculo/modal-vehiculo.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ModalVehiculoComponent],
})
export class CatalogoComponent implements OnInit {
  vehiculos = vehiculos;

  constructor() {}

  ngOnInit(): void {}

  modalOpen = false;
  selectedVehiculo: any = null;

  openModal(vehiculo: any): void {
    this.selectedVehiculo = vehiculo;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.selectedVehiculo = null;
  }
}
