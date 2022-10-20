
package com.portfolio.erkcgn.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Proyecto {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private int id;
    private String nombreP;
    private String descripcionP;
    private String imgP;
    private String imgP2;
    private String imgP3;    
    private String link;

    public Proyecto() {
    }

    public Proyecto(String nombreP, String descripcionP, String imgP, String imgP2, String imgP3, String link) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
        this.imgP2 = imgP2;
        this.imgP3 = imgP3;        
        this.link = link;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    
    
    
    
}
