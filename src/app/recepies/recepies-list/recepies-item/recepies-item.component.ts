import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../recepie-model';
import { RecepieService } from '../../recepies.service';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {
  @Input() item: Recepie;
  @Input() name: string;
  constructor(private recepieService: RecepieService) { }

  ngOnInit() {
  }
}
