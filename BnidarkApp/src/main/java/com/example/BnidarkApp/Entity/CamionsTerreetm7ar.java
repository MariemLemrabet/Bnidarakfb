package com.example.BnidarkApp.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "camions_terreetm7ar")
public class CamionsTerreetm7ar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "capacite")
    private Integer capacite;

    @Column(name = "contact", length = 20)
    private String contact;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCapacite() {
        return capacite;
    }

    public void setCapacite(Integer capacite) {
        this.capacite = capacite;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

}