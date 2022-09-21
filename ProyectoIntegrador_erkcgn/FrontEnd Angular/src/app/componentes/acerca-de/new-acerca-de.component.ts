import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-new-acerca-de',
  templateUrl: './new-acerca-de.component.html',
  styleUrls: ['./new-acerca-de.component.css']
})
export class NewAcercaDeComponent implements OnInit {
  nombre: string;
  apellido: string;
  titulo: string;
  descripcion: string;
  imgPerfil: string;
  imgBanner: string;

  constructor(private personaService: PersonaService,
              private router: Router) { }
  
  
  ngOnInit(): void {
  }
  
  onCreate(): void {
    const persona = new Persona(this.nombre, this.apellido, this.titulo, this.descripcion, this.imgPerfil, this.imgBanner);
    this.personaService.save(persona).subscribe(data => {
      alert("Persona creada correctamente");
      this.router.navigate(['/']);
    }, err => {
      alert("Falló");
      this.router.navigate(['/']);
    })
  }
}
