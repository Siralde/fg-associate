import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitesPage } from './transmites.page';

describe('TransmitesPage', () => {
  let component: TransmitesPage;
  let fixture: ComponentFixture<TransmitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmitesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
