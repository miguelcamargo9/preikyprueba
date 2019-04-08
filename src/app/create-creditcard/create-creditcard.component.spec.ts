import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreditcardComponent } from './create-creditcard.component';

describe('CreateCreditcardComponent', () => {
  let component: CreateCreditcardComponent;
  let fixture: ComponentFixture<CreateCreditcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCreditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
