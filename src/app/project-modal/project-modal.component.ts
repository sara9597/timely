import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  @Input() time: number;
  @Input() totalTime: any;
  projectName: string = '';
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ProjectModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
  stopTimer(form: NgForm) {
    if (form.name) this.closeModal(form);
  }

  closeModal(form: NgForm) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }

  close() {
    this.dialogRef.close({
      clicked: 'close'
    });
  }
}
