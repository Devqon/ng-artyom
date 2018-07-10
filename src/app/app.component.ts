import { ArtyomService } from './../../projects/ng-artyom/src/lib/artyom.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private artyom: ArtyomService) {
    this.artyom.say('welcome');
  }
}
