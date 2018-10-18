import { Component, OnInit } from '@angular/core';
import { Keg } from './../models/keg.model';
import { KegListComponent } from './../keg-list/keg-list.component'

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.scss']
})
export class AddKegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addKeg() {
  let newKeg: Keg = new Keg("name", "brand", 0, 0);
  }


}
