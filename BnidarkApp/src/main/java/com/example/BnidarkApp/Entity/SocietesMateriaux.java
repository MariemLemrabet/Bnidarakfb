package com.example.BnidarkApp.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "societes_materiaux")
public class SocietesMateriaux {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "contact", length = 20)
    private String contact;

    @Lob
    @Column(name = "materiaux_disponibles")
    private String materiauxDisponibles;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getMateriauxDisponibles() {
        return materiauxDisponibles;
    }

    public void setMateriauxDisponibles(String materiauxDisponibles) {
        this.materiauxDisponibles = materiauxDisponibles;
    }

}