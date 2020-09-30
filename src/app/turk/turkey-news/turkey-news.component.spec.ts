import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyNewsComponent } from './turkey-news.component';

describe('TurkeyNewsComponent', () => {
  let component: TurkeyNewsComponent;
  let fixture: ComponentFixture<TurkeyNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeyNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
