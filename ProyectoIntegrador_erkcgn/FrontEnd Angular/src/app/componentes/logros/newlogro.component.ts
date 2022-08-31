import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newlogro',
  templateUrl: './newlogro.component.html',
  styleUrls: ['./newlogro.component.css']
})
export class NewlogroComponent implements OnInit {
  nombreP: string;
  descripcionP: string;

  constructor(private proyectoS: ProyectoService,
              private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP);
    this.proyectoS.save(proyecto).subscribe(data => {
      alert("Proyecto añadido correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    });
  }

}
