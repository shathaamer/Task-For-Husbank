package com.example.taskforintervijuethusbank;

import org.springframework.jdbc.core.BeanPropertyRowMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class KundeRepository {
    @Autowired
    private JdbcTemplate db;
    public void lagreKunde(Kunde kunde){
        String sql = "INSERT INTO Kunde (personnr,navn,adresse,laanebelop,grunn,mobil) VALUES(?,?,?,?,?,?)";
        db.update(sql,kunde.getPersonnr(),kunde.getNavn(),kunde.getAdresse(),kunde.getLaanebelop(),kunde.getGrunn(),kunde.getMobil());
    }

    public List<Kunde> hentAlle() {
        String sql = "SELECT * FROM Kunde";
        return db.query(sql, new BeanPropertyRowMapper(Kunde.class));

    }

    public Kunde henteEnkunde(int id){
        String sql="SELECT * FROM Kunde WHERE id=?";
        List<Kunde> enkunde= db.query(sql
                ,new BeanPropertyRowMapper(Kunde.class),id);
        return enkunde.get(0);
    }

    public void slettEnkunde(String personnr) {
        String sql = "DELETE FROM Kunde WHERE personnr=?";
        db.update(sql, personnr);

    }
    public void slettAlle(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);
    }
}
