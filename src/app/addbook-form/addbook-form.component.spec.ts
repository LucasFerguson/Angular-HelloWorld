import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookFormComponent } from './addbook-form.component';

describe('AddbookFormComponent', () => {
  let component: AddbookFormComponent;
  let fixture: ComponentFixture<AddbookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
