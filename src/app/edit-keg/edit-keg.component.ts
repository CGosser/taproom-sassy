import { Component, OnInit, Input } from '@angular/core';
import { Keg } from './../models/keg.model';
import { KegListComponent } from './../keg-list/keg-list.component';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.scss']
})
export class EditKegComponent implements OnInit {

  constructor() { };

  ngOnInit() {
  };

  @Input() currentKeg: Keg;

}
