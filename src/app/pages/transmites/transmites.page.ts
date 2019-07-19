import { Component, OnInit } from '@angular/core';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';

@Component({
  selector: 'app-transmites',
  templateUrl: './transmites.page.html',
  styleUrls: ['./transmites.page.scss'],
})
export class TransmitesPage implements OnInit {
  info = require('../../../assets/i18n/es.json');
  private bulletPoints;

  constructor() {}

  ngOnInit() {
    this.bulletPoints = this.info.TRANSMITES.PUNTOS;
  }
}
