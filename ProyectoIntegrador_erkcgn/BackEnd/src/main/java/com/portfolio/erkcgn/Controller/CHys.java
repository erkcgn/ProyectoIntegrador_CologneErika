package com.portfolio.erkcgn.Controller;

import com.portfolio.erkcgn.Dto.DtoHys;
import com.portfolio.erkcgn.Entity.Hys;
import com.portfolio.erkcgn.Security.Controller.Mensaje;
import com.portfolio.erkcgn.Service.SHys;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"https://portfolioerkcgn.web.app", "http://localhost:4200"})
@RequestMapping("/skill")
public class CHys {
    @Autowired
    SHys sHys;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Hys>> list(){
        List<Hys> list = sHys.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Hys> getById(@PathVariable("id") int id){
        if(!sHys.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        }
        Hys hys = sHys.getOne(id).get();
        return new ResponseEntity(hys, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody DtoHys dtohys){
        if(StringUtils.isBlank(dtohys.getImagen())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if(sHys.existsByNombre(dtohys.getImagen())){
            return new ResponseEntity(new Mensaje("Esa Skill existe"), HttpStatus.BAD_REQUEST);
        }
        Hys hys = new Hys(dtohys.getImagen(),dtohys.getPorcentaje(), dtohys.getOuterStrokeColor(), dtohys.getInnerStrokeColor());
        sHys.save(hys);
        
        return new ResponseEntity(new Mensaje("Skill agregada"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody DtoHys dtohys){
        if(!sHys.existsById(id)){
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
        if(sHys.existsByNombre(dtohys.getImagen()) && sHys.getByNombre(dtohys.getImagen()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Este Skill ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtohys.getImagen())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        
        Hys hys = sHys.getOne(id).get();
        hys.setImagen(dtohys.getImagen());
        hys.setPorcentaje((dtohys.getPorcentaje()));
        hys.setOuterStrokeColor(dtohys.getOuterStrokeColor());
        hys.setInnerStrokeColor(dtohys.getInnerStrokeColor());
        
        sHys.save(hys);
        return new ResponseEntity(new Mensaje("Skill actualizada"), HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sHys.existsById(id)){
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
        sHys.delete(id);
        return new ResponseEntity(new Mensaje("Skill eliminada"), HttpStatus.OK);
    }
    
}
