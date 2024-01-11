import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less'],
})
export class DashComponent implements OnInit {
  data: any;

  options: any;
  constructor(private userService: UserService, private router: Router) {}

  retornoAPI: any;
  // retornoAPI = {
  //   total: 1000,
  //   valorContribuiaoMensal: 500,
  //   porcentagemSalario: 5,
  //   valorContribuiaoVoluntaria: 500,
  //   valorGraficoContribuicaoMensal: 499999.99,
  //   valorGraficoContribuicaoVoluntaria: 499999.99,
  //   menuPlano: [
  //     { menu: 'Ver Extrato', icone: 'file-invoice-dollar' },
  //     { menu: 'Contribuição Mensal', icone: 'envelope-open-dollar' },
  //     { menu: 'Contribuição Extra', icone: 'sack-dollar' },
  //     { menu: 'Documentos', icone: 'file-alt' },
  //     { menu: 'Regime de Tributação', icone: 'user-chart' },
  //     { menu: 'Solicitar Benefício', icone: 'comment-dollar' },
  //     { menu: 'Extrato Regressivo', icone: 'file-chart-line' },
  //     { menu: 'Informações', icone: 'info' },
  //   ],
  // };

  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      (response) => {
        if (response) this.retornoAPI = response;
      },
      (error) => {
        console.error('Error getting fake data array:', error);
        //acao ao retornar erro
      }
    );

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['Contribuição mensal', 'Contribuição voluntária'],
      datasets: [
        {
          data: [
            this.retornoAPI.valorGraficoContribuicaoMensal,
            this.retornoAPI.valorGraficoContribuicaoVoluntaria,
          ],
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
            textAlign: 'center',
            pointStyle: 'circle',
          },
        },
        tooltip: {
          usePointStyle: true,
        },
      },
    };
  }

  getIconPath(fileName: string): string {
    return `assets/icons/${fileName}.png`;
  }

  redirect(param: string) {
    switch (param) {
      case 'Dash':
        this.router.navigate(['/dash']);
        break;
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
