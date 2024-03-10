$(function(){
    hentAlle();
});


function søk() {
    const kunde = {
        personnr: $("#personnr").val(),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        grunn: $("#grunn").val(),
        laanebelop: $("#laanebelop").val(),
        mobil: $("#mobil").val(),
    };


    if (ingenValideringsFeil()) {
        alert("Søknaden din er mottat til Husbanken");
        $.post("/lagre", kunde, function () {
            hentAlle();
        });
        window.location.href = "/"
    }
}