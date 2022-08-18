import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaYeducacionComponent } from './experiencia-yeducacion.component';

describe('ExperienciaYeducacionComponent', () => {
  let component: ExperienciaYeducacionComponent;
  let fixture: ComponentFixture<ExperienciaYeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaYeducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaYeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
