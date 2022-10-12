import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';
}
