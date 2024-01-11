import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserData(): Observable<any> {
    //fake api service
    const retornoAPI = {
      total: 1000,
      valorContribuiaoMensal: 500,
      porcentagemSalario: 5,
      valorContribuiaoVoluntaria: 500,
      valorGraficoContribuicaoMensal: 499999.99,
      valorGraficoContribuicaoVoluntaria: 499999.99,
      menuPlano: [
        { menu: 'Ver Extrato', icone: 'file-invoice-dollar' },
        { menu: 'Contribuição Mensal', icone: 'envelope-open-dollar' },
        { menu: 'Contribuição Extra', icone: 'sack-dollar' },
        { menu: 'Documentos', icone: 'file-alt' },
        { menu: 'Regime de Tributação', icone: 'user-chart' },
        { menu: 'Solicitar Benefício', icone: 'comment-dollar' },
        { menu: 'Extrato Regressivo', icone: 'file-chart-line' },
        { menu: 'Informações', icone: 'info' },
      ],
    };
    return of(retornoAPI);
  }
}
