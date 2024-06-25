import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtntgleComponent } from './btntgle.component';

describe('BtntgleComponent', () => {
  let component: BtntgleComponent;
  let fixture: ComponentFixture<BtntgleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtntgleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtntgleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
