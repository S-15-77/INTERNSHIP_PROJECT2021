import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpComponent } from './recp.component';

describe('RecpComponent', () => {
  let component: RecpComponent;
  let fixture: ComponentFixture<RecpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
