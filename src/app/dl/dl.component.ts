import { Component, OnInit } from '@angular/core';
import { DlService } from '../dl.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-dl',
  templateUrl: './dl.component.html',
  styleUrls: ['./dl.component.css']
})
export class DlComponent implements OnInit {
  // address = {}

  success: number;
  constructor(
    private dlSercice: DlService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.success = 0;
  }

  getAddress(addrss): void {
    this.success = 1;
    this.dlSercice.getAddress(addrss)
      .subscribe(() => {
        this.success = 2
        this.snackBar.openFromComponent(PizzaPartyComponent, {
          duration: 500,
        });
      });
  }
}

@Component({
  selector: 'snack-bar-component-snack',
  templateUrl: 'snack-bar-component-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent { }
