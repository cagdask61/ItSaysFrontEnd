import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartComponent } from './get-start.component';

describe('GetStartComponent', () => {
  let component: GetStartComponent;
  let fixture: ComponentFixture<GetStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
