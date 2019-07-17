import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {
    this.onOpenMenu();
  }

  ngAfterViewInit() {
    this.onOpenMenu();
  }

  onOpenMenu() {
    this.menuCtrl.open();
  }
}
