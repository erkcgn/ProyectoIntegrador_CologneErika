import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editlogro',
  templateUrl: './editlogro.component.html',
  styleUrls: ['./editlogro.component.css']
})
export class EditlogroComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private proyectoS: ProyectoService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar Proyecto");
      this.router.navigate(['']);
    });
  }

}
