
package com.portfolio.erkcgn.Dto;

import javax.validation.constraints.NotBlank;

public class dtoProyecto {
    @NotBlank
    private String nombreP;
    @NotBlank
    private String descripcionP;
    @NotBlank
    private String imgP;
    @NotBlank
    private String imgP2;
    @NotBlank
    private String imgP3;

    public dtoProyecto() {
    }

    public dtoProyecto(String nombreP, String descripcionP, String imgP, String imgP2, String imgP3) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
        this.imgP2 = imgP2;
        this.imgP3 = imgP3;
    }

    public String getNombreP() {
        return nombreP;
    }

    public void setNombreP(String nombreP) {
        this.nombreP = nombreP;
    }

    public String getDescripcionP() {
        return descripcionP;
    }

    public void setDescripcionP(String descripcionP) {
        this.descripcionP = descripcionP;
    }

    public String getImgP() {
        return imgP;
    }

    public void setImgP(String imgP) {
        this.imgP = imgP;
    }

    public String getImgP2() {
        return imgP2;
    }

    public void setImgP2(String imgP2) {
        this.imgP2 = imgP2;
    }

    public String getImgP3() {
        return imgP3;
    }

    public void setImgP3(String imgP3) {
        this.imgP3 = imgP3;
    }
    
    
}
