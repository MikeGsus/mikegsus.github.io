import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit {

  base : string = '../../assets/img'
  projects : Array<object> = [
    {
      name: 'Fin360',
      description: 'Aplicacion creada para una FinTech donde clientes e inversionistas pueden darse de alta y solicitar o fondear creditos.',
      technologies: ['Angular', '.Net', 'SQL Server'],
      url: 'www.fin360.mx',
      src: `${this.base}/svg/fin360.svg`
    },
    {
      name: 'Universidades Renovadas',
      description: 'App desarrollada para informar acerca de los Grupos de Oración Universitarios, dar a conocer cuales son las universidades que cuentan con GOU en la diocesis de Tabasco',
      technologies: ['Java'],
      url: 'play.google.com/store/apps/details?id=com.renovaciontabasco.gouapp',
      src: `${this.base}/webp/gou.webp`
    },
    {
      name: 'Letica',
      description: 'App que recibe denuncias anonimas a las empresas y ayuda a dar seguimiento a las mismas.',
      technologies: ['React Native', 'Firebase'],
      url: 'play.google.com/store/apps/details?id=com.softcontrolsinternational.letica',
      src: `${this.base}/svg/letica.svg`
    // },
    // {
    //   name: 'Curia Diocesana',
    //   description: '',
    //   technologies: [],
    //   url: '',
    //   src: `${this.base}/png/curia.png`
    }
  ]
  selected: object

  constructor() {
  }

  ngOnInit(): void {
  }

  selectProject (project: object) : void {
    this.selected = project
  }

}
