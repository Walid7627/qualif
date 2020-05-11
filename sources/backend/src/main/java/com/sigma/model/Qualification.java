package com.sigma.model;

import java.util.List;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Qualif {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private int ca1;
    private int ca2;
    private int ca3;
    private int ebe1;
    private int ebe2;
    private int ebe3;


    public Qualif() {
        // TODO Auto-generated constructor stub
    }

    public Qualif(int c1, int c2, int c3, int e1, int e2, int e3) {
        this.ca1 = c1;
        this.ca2 = c2;
        this.ca3 = c3;
        this.ebe1 = e1;
        this.ebe2 = e2;
        this.ebe3 = e3;
    }

    public Long getId() { return id; }

    public int getCa1() {
        return ca1;
    }

    public int getCa2() {
        return ca2;
    }

    public int getCa3() {
        return ca3;
    }

    public int getEbe1() {
        return ebe1;
    }

    public int getEbe2() {
        return ebe2;
    }

    public int getEbe3() {
        return ebe3;
    }

    public void setCa1(int ca) {
        this.ca1 = ca;
    }

    public void setCa2(int ca) {
        this.ca2 = ca;
    }

    public void setCa3(int ca) { this.ca3 = ca; }

    public void setEbe1(int ca) { this.ebe1 = ca; }

    public void setEbe2(int ca) { this.ebe2 = ca; }

    public void setEbe3(int ca) { this.ebe3 = ca; }

}

