import {
  Component,
  DoCheck,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modalpopup',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule],
  templateUrl: './edit-modalpopup.component.html',
  styleUrl: './edit-modalpopup.component.scss',
})
export class EditModalpopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditModalpopupComponent>, // Reference to the dialog instance
    @Inject(MAT_DIALOG_DATA) public modaldata: any // The data passed from the parent component
  ) {}
  userForm!: any;
  imgurl!: string;
  email = new FormControl('', [Validators.required, Validators.minLength(4)]);
  first_name = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  last_name = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  avatar = new FormControl();
  ngOnInit(): void {
    this.email.setValue(this.modaldata.email);
    this.first_name.setValue(this.modaldata.first_name);
    this.last_name.setValue(this.modaldata.last_name);
    if (this.userfile != null || this.userfile != undefined)
      this.avatar.setValue(this.userfile);
    this.imgurl = this.modaldata.avatar;
    this.userForm = new FormGroup({
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      avatar: this.avatar,
    });
  }
  userfile: any;
  Imagechange(e: any) {
    let filereader = new FileReader();
    filereader.readAsDataURL(e.target.files[0]);
    this.userfile = e.target.files[0];
    filereader.onload = (event: any) => {
      this.imgurl = event.target.result;
    };
  }
  closemodal() {
    this.dialogRef.close();
  }
}
