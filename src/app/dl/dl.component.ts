import { Component, OnInit } from '@angular/core';
import { DlService } from '../dl.service';
import { MatSnackBar } from '@angular/material';
import { ok } from 'assert';

@Component({
  selector: 'app-dl',
  templateUrl: './dl.component.html',
  styleUrls: ['./dl.component.css']
})
export class DlComponent implements OnInit {
  // address = {}
  showFiller = false;
  constructor(
    private dlSercice: DlService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getAddress(addrss): void {
    this.dlSercice.getAddress(addrss)
      .subscribe(()=>{
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
export class PizzaPartyComponent {}
