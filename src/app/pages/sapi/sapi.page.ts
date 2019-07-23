import { Component, OnInit } from '@angular/core';
import info from '../../../assets/i18n/es.json';

@Component({
  selector: 'app-sapi',
  templateUrl: './sapi.page.html',
  styleUrls: ['./sapi.page.scss'],
})
export class SapiPage implements OnInit {
  public title: any;
  private bulletPoints: any;
  public nonSelectedPoints: any;
  public selectedPoint: any;

  constructor() {}

  ngOnInit() {
    this.title = info.CONTENTS_MENU.SAPI.TITULO;
    this.bulletPoints = info.CONTENTS_MENU.SAPI.PUNTOS;
    this.selectedPoint = info.CONTENTS_MENU.SAPI.PUNTOS[0];
    this.nonSelectedPoints = [...this.bulletPoints];
    this.nonSelectedPoints.splice(0, 1);
  }

  onSelectPoint(point: any) {
    this.selectedPoint = point;
    this.nonSelectedPoints = [...this.bulletPoints];
    this.nonSelectedPoints.splice(this.bulletPoints.indexOf(point), 1);
  }
}
