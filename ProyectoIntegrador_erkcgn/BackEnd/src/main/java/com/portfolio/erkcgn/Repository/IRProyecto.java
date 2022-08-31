
package com.portfolio.erkcgn.Repository;

import com.portfolio.erkcgn.Entity.Proyecto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRProyecto extends JpaRepository<Proyecto, Integer>{
    public Optional<Proyecto> findByNombreP(String nombreP);
    public boolean existsByNombreP(String nombreP);
    
}
