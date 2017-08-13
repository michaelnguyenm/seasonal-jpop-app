import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeViewComponent } from './anime-view.component';

describe('AnimeViewComponent', () => {
  let component: AnimeViewComponent;
  let fixture: ComponentFixture<AnimeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
