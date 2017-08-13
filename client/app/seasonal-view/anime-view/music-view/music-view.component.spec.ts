import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicViewComponent } from './music-view.component';

describe('MusicViewComponent', () => {
  let component: MusicViewComponent;
  let fixture: ComponentFixture<MusicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
