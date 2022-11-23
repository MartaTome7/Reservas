import { Component, OnInit } from '@angular/core';
import { HttpSalasService } from './httpsalas.service';

@Component({
  selector: 'gerirsalas',
  templateUrl: './gerirsalas.component.html',
  styleUrls: ['./gerirsalas.component.css'],
})
export class GerirsalasComponent implements OnInit {
  value = 'Clear me';

  constructor(private httpSalasService: HttpSalasService) {}

  ngOnInit() {}

  getSalas() {
    //
  }

  getAllSalas() {
    //
  }
}
