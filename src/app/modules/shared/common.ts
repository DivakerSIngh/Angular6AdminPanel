import { MatSnackBar } from "@angular/material";
export class Common {
    constructor(private snackBar:MatSnackBar) {
    }
    openSnackBar(message: string) {
        this.snackBar.open(message, 'Close', {
          duration: 1200
        });
      }
}
