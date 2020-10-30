import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DePaginatorComponent } from './de-paginator.component';

describe('DePaginatorComponent', () => {
  let component: DePaginatorComponent;
  let fixture: ComponentFixture<DePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
