import { Component } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.scss']
})
export class ConsultaCepComponent {
  cep: string = '';
  endereco: any;

  constructor(private cepService: CepService) {}

  buscarCep() {
    if(this.cep.length === 8) {
      this.cepService.buscarCep(this.cep).subscribe(dados => this.endereco = dados);
    }
  }
}


