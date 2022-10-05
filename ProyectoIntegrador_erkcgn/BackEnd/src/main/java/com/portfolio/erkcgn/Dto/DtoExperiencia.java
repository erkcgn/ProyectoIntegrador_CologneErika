
package com.portfolio.erkcgn.Dto;

import javax.validation.constraints.NotBlank;


public class DtoExperiencia {
    
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String color;
    @NotBlank
    private String opacity;

    public DtoExperiencia() {
    }

    public DtoExperiencia(String nombreE, String descripcionE, String color, String opacity) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.color = color;
        this.opacity = opacity;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getOpacity() {
        return opacity;
    }

    public void setOpacity(String opacity) {
        this.opacity = opacity;
    }
    
       
    
}
