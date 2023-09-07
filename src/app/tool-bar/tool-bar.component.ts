import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
  imports: [ MatListModule,MatToolbarModule, MatButtonModule, MatIconModule,MatSidenavModule,
    ],
  standalone:true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolBarComponent {

}
