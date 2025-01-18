import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingleProjectComponent } from './portfolio-single-project.component';

describe('PortfolioSingleProjectComponent', () => {
  let component: PortfolioSingleProjectComponent;
  let fixture: ComponentFixture<PortfolioSingleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSingleProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSingleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
