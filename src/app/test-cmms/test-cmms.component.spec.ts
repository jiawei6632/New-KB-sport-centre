import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCMMSComponent } from './test-cmms.component';

describe('TestCMMSComponent', () => {
  let component: TestCMMSComponent;
  let fixture: ComponentFixture<TestCMMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCMMSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCMMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
