package com.example.taskforintervijuethusbank;

public class Kunde {
    public Kunde(int id, String personnr, String navn, String adresse, int laanebelop, String grunn, String mobil) {
        this.id=id;
        this.personnr =  personnr;
        this.navn = navn;
        this.adresse = adresse;
        this.laanebelop = laanebelop;
        this.grunn = grunn;
        this.mobil = mobil;
    }

    public Kunde() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private int id;
    private String personnr;
    private String navn;
    private String adresse;
    private int laanebelop;
    private String grunn;
    private String mobil;

    public String getPersonnr() {
        return personnr;
    }

    public void setPersonnr(String personnr) {
        this.personnr = personnr;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public int getLaanebelop() {
        return laanebelop;
    }

    public void setLaanebelop(int laanebelop) {
        this.laanebelop = laanebelop;
    }

    public String getGrunn() {
        return grunn;
    }

    public void setGrunn(String grunn) {
        this.grunn = grunn;
    }

    public String getMobil() {
        return mobil;
    }

    public void setMobil(String mobil) {
        this.mobil = mobil;
    }
}
