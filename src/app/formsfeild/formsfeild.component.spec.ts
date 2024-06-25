import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsfeildComponent } from './formsfeild.component';

describe('FormsfeildComponent', () => {
  let component: FormsfeildComponent;
  let fixture: ComponentFixture<FormsfeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsfeildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsfeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
