package com.portfolio.erkcgn.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hys {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String imagen;
    private int porcentaje;
    private String outerStrokeColor;
    private String innerStrokeColor;

    public Hys() {
    }

    public Hys(String imagen, int porcentaje, String outerStrokeColor, String innerStrokeColor) {        
        this.imagen = imagen;
        this.porcentaje = porcentaje;
        this.outerStrokeColor = outerStrokeColor;
        this.innerStrokeColor = innerStrokeColor;
    }    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }   

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }

    public String getOuterStrokeColor() {
        return outerStrokeColor;
    }

    public void setOuterStrokeColor(String outerStrokeColor) {
        this.outerStrokeColor = outerStrokeColor;
    }

    public String getInnerStrokeColor() {
        return innerStrokeColor;
    }

    public void setInnerStrokeColor(String innerStrokeColor) {
        this.innerStrokeColor = innerStrokeColor;
    }

    
}
