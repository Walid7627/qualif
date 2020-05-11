package com.sigma.dto;

public class QualifDto {
    private Long id;
    private int ca1;
    private int ca2;
    private int ca3;
    private int ebe1;
    private int ebe2;
    private int ebe3;

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
    public Long getId() {

        return id;
    }


    public void setCa1(int ca) {
        this.ca1 = ca;
    }

    public void setCa2(int ca) {
        this.ca2 = ca;
    }

    public void setCa3(int ca) {
        this.ca3 = ca;
    }

    public void setEbe1(int ebe) {
        this.ebe1 = ebe;
    }

    public void setEbe2(int ebe) {
        this.ebe2 = ebe;
    }
    public void setEbe3(int ebe) {
        this.ebe3 = ebe;
    }
    public void setId(Long id) {

        this.id = id;
    }
}
