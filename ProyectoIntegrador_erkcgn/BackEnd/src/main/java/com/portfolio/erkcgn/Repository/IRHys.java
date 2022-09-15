package com.portfolio.erkcgn.Repository;

import com.portfolio.erkcgn.Entity.Hys;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRHys extends JpaRepository<Hys, Integer>{
    Optional<Hys> findByNombre(String name);
    public boolean existsByNombre(String name);
}
