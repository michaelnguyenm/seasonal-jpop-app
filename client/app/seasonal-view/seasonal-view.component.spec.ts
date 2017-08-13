import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalViewComponent } from './seasonal-view.component';

describe('SeasonalViewComponent', () => {
  let component: SeasonalViewComponent;
  let fixture: ComponentFixture<SeasonalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
