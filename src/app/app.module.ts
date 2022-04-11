import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ProjectsTableComponent, ProjectModalComponent],
  imports: [
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([{ path: '', component: ProjectsTableComponent }])
  ],
  providers: [
    DatePipe,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
