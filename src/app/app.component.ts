import { Component } from '@angular/core';
import { CepService } from './cep.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cep: string = '';
  endereco: any = {}; // Objeto para armazenar as informações do endereço

  constructor(private cepService: CepService) {} // Injeção do CepService

  buscarCep(): void {
    if(this.cep.length === 8) {
      this.cepService.buscarCep(this.cep).subscribe(dados => {
        this.endereco = dados;
        // Aqui você pode tratar a resposta como desejar
        // Por exemplo, verificando se a resposta contém um erro
      });
    }
  }
}
