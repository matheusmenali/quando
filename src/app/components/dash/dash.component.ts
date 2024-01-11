import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less'],
})
export class DashComponent implements OnInit {
  data: any;

  options: any;
  constructor() {}

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
          data: [300, 50],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }

  getIconPath(fileName: string): string {
    // Supondo que o arquivo esteja em uma pasta chamada "assets/images"
    return `assets/icons/${fileName}.png`;
  }
}
