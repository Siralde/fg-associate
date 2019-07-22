import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import info from '../../../assets/i18n/es.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  constructor(private menuCtrl: MenuController) {}

  tramites: any;

  ngOnInit() {
    this.onOpenMenu();
    this.tramites = info.CONTENTS_MENU.TRANSMITES.PUNTOS;
  }

  ngAfterViewInit() {
    this.onOpenMenu();
  }

  onOpenMenu() {
    this.menuCtrl.open();
  }
}
