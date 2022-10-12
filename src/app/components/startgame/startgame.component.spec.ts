import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartgameComponent } from './startgame.component';

describe('StartgameComponent', () => {
  let component: StartgameComponent;
  let fixture: ComponentFixture<StartgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
