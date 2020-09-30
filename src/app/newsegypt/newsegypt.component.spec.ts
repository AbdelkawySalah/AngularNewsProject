import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsegyptComponent } from './newsegypt.component';

describe('NewsegyptComponent', () => {
  let component: NewsegyptComponent;
  let fixture: ComponentFixture<NewsegyptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsegyptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsegyptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
