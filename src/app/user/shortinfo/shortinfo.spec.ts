import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shortinfo } from './shortinfo';

describe('Shortinfo', () => {
  let component: Shortinfo;
  let fixture: ComponentFixture<Shortinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shortinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shortinfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
