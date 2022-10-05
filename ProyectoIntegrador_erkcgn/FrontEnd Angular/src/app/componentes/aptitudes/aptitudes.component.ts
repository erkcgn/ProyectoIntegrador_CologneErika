import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  skill: Skill[] = [];
  

  constructor(private skillS: SkillService,
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.skillS.lista().subscribe(skills => {
      this.skill = skills;
    })
  }

  eliminar(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(data=>{
        this.cargarSkill();
      },err => {
        alert("No se pudo eliminar");
      });
    }
  }

}
