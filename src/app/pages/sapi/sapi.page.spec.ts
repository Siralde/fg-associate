import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapiPage } from './sapi.page';

describe('SapiPage', () => {
  let component: SapiPage;
  let fixture: ComponentFixture<SapiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
