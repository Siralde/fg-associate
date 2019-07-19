import { Component, OnInit } from '@angular/core';
import info from '../../../assets/i18n/es.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public facebook: string;
  public twitter: string;
  public instagram: string;
  public dir1: string;
  public dir2: string;
  public tel1: string;
  public tel2: string;
  public tel3: string;

  constructor() {}

  ngOnInit() {
    this.facebook = info.CONTENTS_MENU.CONTACTS.FACEBOOK;
    this.twitter = info.CONTENTS_MENU.CONTACTS.TWITTER;
    this.instagram = info.CONTENTS_MENU.CONTACTS.INSTAGRAM;
    this.dir1 = info.CONTENTS_MENU.CONTACTS.DIR_1;
    this.dir2 = info.CONTENTS_MENU.CONTACTS.DIR_2;
    this.tel1 = info.CONTENTS_MENU.CONTACTS.TELEF_1;
    this.tel2 = info.CONTENTS_MENU.CONTACTS.TELEF_2;
    this.tel3 = info.CONTENTS_MENU.CONTACTS.TELEF_3;
  }
}
