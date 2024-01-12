package com.example.BnidarkApp.Controllers;

import com.example.BnidarkApp.Entity.Employe;
import com.example.BnidarkApp.Services.EmployeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeController {
    private final EmployeService employeService;

    public EmployeController(EmployeService employeService) {
        this.employeService = employeService;
    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }
    @GetMapping("/emp")
    public List<Employe> getAllEmployes() {
        return employeService.getAllEmployes();
    }

    @GetMapping("/{id}")
    public Employe getEmployeById(@PathVariable Integer id) {
        return employeService.getEmployeById(id).orElse(null);
    }

    @PostMapping("/addemp")
    public Employe saveEmploye(@RequestBody Employe employe) {
        return employeService.saveEmploye(employe);
    }

    @DeleteMapping("/{id}")
    public void deleteEmploye(@PathVariable Integer id) {
        employeService.deleteEmploye(id);
    }
}
