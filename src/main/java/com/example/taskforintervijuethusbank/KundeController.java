package com.example.taskforintervijuethusbank;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import java.util.List;
@RestController
public class KundeController {
    @Autowired
    private KundeRepository rep;

    @PostMapping("/lagre")
    public void lagreKunde(Kunde kunde){
        rep.lagreKunde(kunde);
    }

    @GetMapping("/hentAlle")
    public List<Kunde> hentAlle(){
        return rep.hentAlle();
    }
    @GetMapping("/slettEnkunde")
    public void slettEnkunde(@RequestParam String personnr){
        rep.slettEnkunde(personnr);
    }

    @GetMapping("/henteEnkunde")
    public Kunde henteEnkunde(int id){
        return rep.henteEnkunde(id);


    }


    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }
}

