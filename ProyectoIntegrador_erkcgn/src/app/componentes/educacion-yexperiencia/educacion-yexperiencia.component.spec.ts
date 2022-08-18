import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionYExperienciaComponent } from './educacion-yexperiencia.component';

describe('EducacionYExperienciaComponent', () => {
  let component: EducacionYExperienciaComponent;
  let fixture: ComponentFixture<EducacionYExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionYExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionYExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
