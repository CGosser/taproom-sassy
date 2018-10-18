import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tAppRoot';

  kegs: Keg[] = [
    new Keg('Beak Breaker IPA', 'Pelican Brewing', 5.00, 9.6),
    new Keg('Samuel Adams American Lager', 'Sam Adams Brewing', 3.50, 5.0),
    new Keg('Terminator Stout', 'McMenamins', 6, 6.45),
    new Keg('Thundercone', 'McMenamins', 7, 6.19)
  ]
}
