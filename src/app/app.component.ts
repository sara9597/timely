import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { DatePipe } from '@angular/common';
import { ProjectsTableComponent } from './projects-table/projects-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timely';
  projectList: ProjectsTableComponent[] = [];

  time: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  totalTime: string = '';
  projectName: string;
  startTime;
  endTime;

  interval;
  play: boolean = false;
  open: boolean = false;

  startTimer() {
    this.play = !this.play;
    if (this.play) {
      this.startTime = this.datepipe.transform(
        new Date(),
        'MM/dd/yyyy h:mm:ss'
      );
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
    } else {
      this.stopTimer();
    }
  }

  stopTimer() {
    this.endTime = this.datepipe.transform(new Date(), 'MM/dd/yyyy h:mm:ss');

    this.play = false;
    this.open = true;
    clearInterval(this.interval);

    if (this.time >= 3600) {
      this.hours = Math.floor(this.time / 3600);
      this.time -= 3600 * this.hours;
    }

    if (this.time >= 60) {
      this.minutes = Math.floor(this.time / 60);
      this.time -= 60 * this.minutes;
    }

    this.seconds = this.time;
    this.totalTime =
      (this.minutes < 10 ? '0' + this.minutes : this.minutes) +
      ':' +
      (this.seconds < 10 ? '0' + this.seconds : this.seconds);
    console.log(this.totalTime);
    this.openModal();
  }
  constructor(public matDialog: MatDialog, public datepipe: DatePipe) {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '500px';
    dialogConfig.width = '700px';
    const modalDialog = this.matDialog.open(
      ProjectModalComponent,
      dialogConfig
    );
    (<ProjectModalComponent>(
      modalDialog.componentInstance
    )).totalTime = this.totalTime;

    modalDialog.afterClosed().subscribe(data => {
      this.projectName = data.form.name;
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
      let customObj = new ProjectsTableComponent();
      customObj.projectName = this.projectName;
      customObj.startTime = this.startTime;
      customObj.endTime = this.endTime;
      customObj.totalTime = this.totalTime;
      this.projectList.push(customObj);
      //console.log(this.projectList);
      this.projectName = '';
      this.startTime = '';
      this.endTime = '';
      this.totalTime = '';
    });
  }
}
