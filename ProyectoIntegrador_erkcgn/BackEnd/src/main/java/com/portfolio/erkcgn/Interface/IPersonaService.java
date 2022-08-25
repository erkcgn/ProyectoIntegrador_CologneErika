package com.portfolio.erkcgn.Interface;

import com.portfolio.erkcgn.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //traer una lista de clase persona

    public List<Persona> getPersona();
    
    //guardar un objeto de tipo persona
    public void savePersona(Persona persona); 
    
    //Eliminar un objeto por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    
    public Persona findPersona(Long id);
}
