/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapsapiComponent } from './mapsapi.component';

describe('MapsapiComponent', () => {
  let component: MapsapiComponent;
  let fixture: ComponentFixture<MapsapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
