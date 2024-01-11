import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less'],
})
export class DashComponent implements OnInit {
  data: any;

  options: any;
  constructor(private router: Router) {}

  retornoAPI = {
    total: 1000,
    valorContribuiaoMensal: 500,
    porcentagemSalario: 5,
    valorContribuiaoVoluntaria: 500,
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

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['A', 'B'],
      datasets: [
        {
          data: [499999.99, 499999.99],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
          },
        },
      },
    };
  }

  getIconPath(fileName: string): string {
    return `assets/icons/${fileName}.png`;
  }

  redirect(param: string) {
    switch (param) {
      case 'Ver Extrato':
        // this.router.navigate(['/extrato']);
        break;

      case 'Contribuição Mensal':
        // this.router.navigate(['/contribuicao-mensal']);
        break;

      default:
        break;
    }
  }
}
