import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  menuGerirReunioes: boolean = false;
  menuGerirSalas: boolean = false;
  menuGerirRecursos: boolean = false;

  constructor() {}

  ngOnInit() {}

  typeOfMenus: string[] = ['Gerir Reuniões', 'Gerir Salas', 'Gerir Recursos'];

  showOption(menus) {
    // menus.selectedOptions.hasValue() ? showOption(menus) : 'None'
    // return menus.selectedOptions.selected[0].value;
    if (menus.selectedOptions.hasValue()) {
      
      var choiceNumber = menus.selectedOptions.selected[0].value;
    
      switch (choiceNumber) {
        case 0:
          this.menuGerirReunioes = true;
          this.menuGerirSalas = false;
          this.menuGerirRecursos = false;
          break;
        case 1:
          this.menuGerirReunioes = false;
          this.menuGerirSalas = true;
          this.menuGerirRecursos = false;
          break;
        case 2:
          this.menuGerirReunioes = false;
          this.menuGerirSalas = false;
          this.menuGerirRecursos = true;
          break;
        default:
          break;
      }

      return this.typeOfMenus[choiceNumber];
    } else {
      return 'None';
    }
  }
}
