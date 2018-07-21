import { Component, OnInit } from '@angular/core';
import { DlService } from '../dl.service';

@Component({
  selector: 'app-dl',
  templateUrl: './dl.component.html',
  styleUrls: ['./dl.component.css']
})
export class DlComponent implements OnInit {
  // address = {}
  constructor(private dlSercice: DlService) { }

  ngOnInit() {
  }

  getAddress(addrss): void {
    this.dlSercice.getAddress(addrss)
      .subscribe();
  }
}
