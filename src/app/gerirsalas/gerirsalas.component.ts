import { Component, OnInit } from '@angular/core';
import { HttpsalasService } from './httpsalas.service';

@Component({
  selector: 'gerirsalas',
  templateUrl: './gerirsalas.component.html',
  styleUrls: ['./gerirsalas.component.css'],
})
export class GerirsalasComponent implements OnInit {
  value = 'Clear me';

  constructor(private httpService: HttpsalasService) {}

  ngOnInit() {}

  getSalas() {
    //
  }

  getAllSalas() {
    //
  }
}
