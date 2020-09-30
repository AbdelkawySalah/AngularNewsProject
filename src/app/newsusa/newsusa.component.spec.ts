import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsusaComponent } from './newsusa.component';

describe('NewsusaComponent', () => {
  let component: NewsusaComponent;
  let fixture: ComponentFixture<NewsusaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsusaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
