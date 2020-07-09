import { Component, OnInit } from '@angular/core';
import {
  faNodeJs,
  faPython,
  faDev
} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  js = faNodeJs
  py = faPython
  dev = faDev
  constructor() { }

  ngOnInit(): void {
  }

}
