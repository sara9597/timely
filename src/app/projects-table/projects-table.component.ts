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
    // Called after the constructor and called  after the first ngOnChanges()
    this.projectList = this.projectList[0];
    //console.log(this.projectList);
  }

  Click() {
    this.projectList = this.projectList[0];
    console.log(this.projectList);
  }

  addRow() {}
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['project', 'start', 'end', 'duration'];
}
