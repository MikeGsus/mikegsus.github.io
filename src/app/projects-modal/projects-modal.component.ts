import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.css']
})
export class ProjectsModalComponent implements OnInit {
  
  @Input() details: any
  
  constructor () {
  }

  ngOnInit(): void {
  }
}