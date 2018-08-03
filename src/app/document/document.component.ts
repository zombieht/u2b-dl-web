import { Component, OnInit } from '@angular/core';
import { DlService } from '../dl.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  document: any

  constructor(
    private dlSercice: DlService
  ) { }

  ngOnInit() {
    this.getDocument();
  }

  getDocument(): void {
    this.dlSercice.getDocument().subscribe(
      document => this.document = document
    );
  }


}
