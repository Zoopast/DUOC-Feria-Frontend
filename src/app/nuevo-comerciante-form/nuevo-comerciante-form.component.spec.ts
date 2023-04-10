import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComercianteFormComponent } from './nuevo-comerciante-form.component';

describe('NuevoComercianteFormComponent', () => {
  let component: NuevoComercianteFormComponent;
  let fixture: ComponentFixture<NuevoComercianteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoComercianteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoComercianteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
