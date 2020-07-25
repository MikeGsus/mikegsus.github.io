import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  elementId : string
  sectionsContainer : Element[]
  
  ngOnInit () {
    this.sectionsContainer = Array.from(document.getElementById('sectionsContainer')
      .children)
  }

  @HostListener('scroll', ['$event'])
  handleScroll ($event : Event) {
    let scrollOffset : number = (<any>$event.srcElement)
      .children[0]
      .scrollTop + 200
      
    this.sectionsContainer &&
      this.sectionsContainer.forEach((element, i) => {
        let elementTop : number = (<any>element.children[0]
          .attributes[2]
          .ownerElement)
          .offsetTop
          
        if (scrollOffset >= elementTop) {
          this.elementId = element.firstElementChild.id
        }
      });
  }
}
