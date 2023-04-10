import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoClienteFormComponent } from './nuevo-cliente-form.component';

describe('NuevoClienteFormComponent', () => {
  let component: NuevoClienteFormComponent;
  let fixture: ComponentFixture<NuevoClienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoClienteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
