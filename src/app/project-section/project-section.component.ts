import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit {

  base = '../../assets/img'
  projects = [
    {
      name: 'Fin360',
      url: 'https://www.fin360.mx',
      src: `${this.base}/svg/fin360.svg`,
      description: ''
    },
    {
      name: 'Letica',
      url: 'https://play.google.com/store/apps/details?id=com.softcontrolsinternational.letica',
      src: `${this.base}/svg/letica.svg`,
      description: ''
    },
    {
      name: 'Universidades Renovadas',
      url: 'https://play.google.com/store/apps/details?id=com.renovaciontabasco.gouapp',
      src: `${this.base}/webp/gou.webp`,
      description: ''
    },
    {
      name: 'Curia Diocesana',
      url: '',
      src: `${this.base}/png/curia.png`,
      description: ''
    }
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

}
