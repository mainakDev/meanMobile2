import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestComponentComponent } from './rest-component.component';

describe('RestComponentComponent', () => {
  let component: RestComponentComponent;
  let fixture: ComponentFixture<RestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
