package com.portfolio.erkcgn.Dto;

import javax.validation.constraints.NotBlank;

public class DtoHys {
    
    @NotBlank
    private String imagen;
    @NotBlank
    private int porcentaje;
    @NotBlank
    private String outerStrokeColor;
    @NotBlank
    private String innerStrokeColor;

    public DtoHys() {
    }

    public DtoHys(String imagen, int porcentaje, String outerStrokeColor, String innerStrokeColor) {
        this.imagen = imagen;
        this.porcentaje = porcentaje;
        this.outerStrokeColor = outerStrokeColor;
        this.innerStrokeColor = innerStrokeColor;
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
