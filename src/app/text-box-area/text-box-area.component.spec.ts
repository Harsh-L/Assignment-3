import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxAreaComponent } from './text-box-area.component';

describe('TextBoxAreaComponent', () => {
  let component: TextBoxAreaComponent;
  let fixture: ComponentFixture<TextBoxAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBoxAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBoxAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
