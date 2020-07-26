import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  @Input() focusId : string

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => { this.scrollFunction() }
  }

  scrollFunction () : void {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar-top").style.padding = "1rem 10px";
      document.getElementById("title").style.fontSize = "20px";
    } else {
      document.getElementById("navbar-top").style.padding = "1.5rem 10px";
      document.getElementById("title").style.fontSize = "35px";
    }
  }
}
