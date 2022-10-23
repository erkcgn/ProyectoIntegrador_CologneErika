
package com.portfolio.erkcgn.Controller;

import com.portfolio.erkcgn.Dto.dtoPersona;
import com.portfolio.erkcgn.Entity.Persona;
import com.portfolio.erkcgn.Security.Controller.Mensaje;
import com.portfolio.erkcgn.Service.SPersona;

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
@RequestMapping("/persona")
//, "http://localhost:4200"
@CrossOrigin(origins = "https://portfolioerkcgn.web.app")

public class PersonaController {
    @Autowired
    SPersona sPersona;
    
    @GetMapping("/mostrar")
    public ResponseEntity<List<Persona>> list(){
        List<Persona> list = sPersona.getPersona();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Persona> getById(@PathVariable("id") int id){
        if(!sPersona.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }
        
        Persona persona = sPersona.getOne(id).get();
        return new ResponseEntity(persona, HttpStatus.OK);
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sPersona.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        
        sPersona.delete(id);
        return new ResponseEntity(new Mensaje("Persona eliminada"), HttpStatus.OK);
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoPersona dtopersona){
        if(StringUtils.isBlank(dtopersona.getNombre())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if(sPersona.existsByNombre(dtopersona.getNombre())){
            return new ResponseEntity(new Mensaje("Este nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        Persona persona = new Persona(dtopersona.getNombre(), dtopersona.getApellido(), dtopersona.getTitulo(), dtopersona.getDescripcion(), dtopersona.getImgPerfil(), dtopersona.getImgBanner());
        sPersona.save(persona);
        return new ResponseEntity(new Mensaje("Persona creada"), HttpStatus.OK);
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody dtoPersona dtopersona){
        if(!sPersona.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if(sPersona.existsByNombre(dtopersona.getNombre()) && sPersona.getByNombre(dtopersona.getNombre()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Este nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtopersona.getNombre())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        
        Persona persona = sPersona.getOne(id).get();
        
        persona.setNombre(dtopersona.getNombre());
        persona.setApellido(dtopersona.getApellido());
        persona.setTitulo(dtopersona.getTitulo());
        persona.setDescripcion(dtopersona.getDescripcion());
        persona.setImgPerfil(dtopersona.getImgPerfil());
        persona.setImgBanner(dtopersona.getImgBanner());
        
        sPersona.save(persona);
        return new ResponseEntity(new Mensaje("Persona actualizada"), HttpStatus.OK);
    }
    
    @GetMapping("/traer/perfil")
    public Persona findPersona(int id) {
        return sPersona.findPersona((int)1);
    }
    
//    public Persona findPersona(int id) {
//        return sPersona.findPersona((int)1);
//    }

}
