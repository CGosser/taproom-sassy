import { Component, OnInit } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.scss']
})
export class KegListComponent implements OnInit {

  kegs: Keg[] = [
    new Keg('Beak Breaker IPA', 'Pelican Brewing', 5.00, 9.6),
    new Keg('Samuel Adams American Lager', 'Sam Adams Brewing', 3.50, 5.0),
    new Keg('Terminator Stout', 'McMenamins', 6, 6.45),
    new Keg('Thundercone', 'McMenamins', 7, 6.19)
  ];


  constructor() { }

  ngOnInit() {

  }

}
