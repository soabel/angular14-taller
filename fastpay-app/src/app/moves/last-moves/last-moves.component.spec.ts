import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMovesComponent } from './last-moves.component';

describe('LastMovesComponent', () => {
  let component: LastMovesComponent;
  let fixture: ComponentFixture<LastMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
