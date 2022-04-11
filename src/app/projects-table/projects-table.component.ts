import { Component, Input } from '@angular/core';

export interface ProjectsTableComponent {
  projectName: string;
  startTime: number;
  endTime: number;
  totalTime: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent {
  @Input() projectList: any[];

  ngOnInit() {
    this.projectList = this.projectList[0];
  }
}
