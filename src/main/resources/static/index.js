$(function(){
    hentAlle()
});


function hentAlle() {

    $.get("/hentAlle", function( kundene ) {
        formaterData(kundene);
    });
}

function formaterData(kundene) {
    let ut = "<table class='table table-stipe'><tr><th>Personnr</th><th>Navn</th><th>Adresse</th>" +
        "<th>Lånebeløp</th><th>Grunnen Til lån</th><th>mobil</th></tr>";
    for (const kunde of kundene) {
        ut += "<tr><td>" + kunde.personnr + "</td><td>" + kunde.navn + "</td><td>" + kunde.adresse + "</td>" +
            "<td>" + kunde.laanebelop + "</td><td>" + kunde.grunn + "</td><td>" + kunde.mobil + "</td>"+
            "<td><button class='btn btn-danger' onclick='slettEnkunde("+kunde.personnr+")'> Slett </button> </td>"+
            "</tr>";
    }
    ut += "</table>";
    $("#allekundene").html(ut);
}


function slettEnkunde(personnr){
    const url = "/slettEnkunde?personnr=" +personnr;
    $.get(url,function (){
        window.location.href ="/";
    });
}

function slettAlle() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}

