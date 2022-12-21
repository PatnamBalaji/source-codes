import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}
  success(message: string) {
    this.snackbar.open(message, "Success", {
      duration: 10000,
    });
  }
  error(message: string) {
    this.snackbar.open(message, "Error", {
      duration: 10000,
    });
  }
}
