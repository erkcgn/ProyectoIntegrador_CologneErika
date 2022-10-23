import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  imagen: string;
  porcentaje: number;
  outerStrokeColor: string;
  innerStrokeColor: string;

  constructor(private skillS: SkillService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.imagen, this.porcentaje,this.outerStrokeColor, this.innerStrokeColor);
    this.skillS.save(skill).subscribe((skill: Skill) => {
      alert("Skill creada correctamente");
      this.router.navigate(['/']);
    }, err => {
      alert("Falló al añadir");
      this.router.navigate(['/'])
    })
  }

}
