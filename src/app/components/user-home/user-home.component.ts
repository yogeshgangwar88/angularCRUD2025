import { Component, DestroyRef, Inject, inject, OnInit } from '@angular/core';
import { ApidataService } from '../../services/apidata.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeadermenuComponent } from '../headermenu/headermenu.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EditModalpopupComponent } from './edit-modalpopup/edit-modalpopup.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [HeadermenuComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss',
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }], // added for passing data in  material popup
})
export class UserHomeComponent implements OnInit {
  hidemodal() {
    //  throw new Error('Method not implemented.');
  }
  data: any;
  destroyref = inject(DestroyRef);
  readonly dialog = inject(MatDialog);
  constructor(
    private apidata: ApidataService,
    @Inject(MAT_DIALOG_DATA) public modaldata: any
  ) {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getdata();
  }
  getdata() {
    this.apidata
      .getUsersList()
      .pipe(takeUntilDestroyed(this.destroyref))
      .subscribe({
        next: (v: any) => {
          console.log(v.data);
          this.data = v.data;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          //console.log(this.data);
        },
      });
  }
  //////////////Material Popup start///////////////
  showmodal(modaldt: any) {
    this.dialog.open(EditModalpopupComponent, {
      width: '500px',
      enterAnimationDuration: '150ms',
      exitAnimationDuration: '150ms',
      data: modaldt,
    });
  }

  //////////////Material Popup End///////////////
}
