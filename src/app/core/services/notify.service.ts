import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private _snackBar: MatSnackBar,
  ) { }
  
  success = (message:string,action:string) => {
    this._snackBar.open(message,action,{
      duration: 5000,
      panelClass: ["success-style-alert"]
      //verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
      //horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }






}
