function validerpersonnr(){
    const personnr = $("#personnr").val();
    const regexp = /^[0-9]{11}$/;
    const ok = regexp.test(personnr);
    if(!ok){
        $("#feilpersonnummer").html("Personnummeret må bestå av 11 siffer");
        return false;
    }
    else{
        $("#feilpersonnummer").html("");
        return true;
    }
}
function validernavn(){
    const navn = $("#navn").val();
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(navn);
    if(!ok){
        $("#feilnavn").html("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else{
        $("#feilnavn").html("");
        return true;}
}
function valideradresse(){
    const adresse = $("#adresse").val();
    const regexp = /[0-9a-zA-ZæøåÆØÅ. \-]{2,30}$/;
    const ok = regexp.test(adresse);
    if(!ok){
        $("#feiladresse").html("Adressen må bestå av 2 til 40 bokstaver og tall");
        return false;
    }
    else{
        $("#feiladresse").html("");
        return true;}
}
function validerlaanebelop(){
    const laanebelop = $("#laanebelop").val();
    const regexp = /[0-9]{2,8}$/;
    const ok = regexp.test(laanebelop);
    if(!ok){
        $("#feilAdresse").html("lånebeløp må bestå av 2 til 8 tall");
        return false;
    }
    else{
        $("#feilAdresse").html("");
        return true;}
}
function validergrunn(){
    const grunn = $("#grunn").val();
    const regexp = /[0-9a-zA-ZæøåÆØÅ. \-]{2,300}$/;
    const ok = regexp.test(grunn);
    if(!ok){
        $("#feilgrunn").html("grunn må bestå av 2 til 40 bokstaver og tall");
        return false;
    }
    else{
        $("#feiladresse").html("");
        return true;}
}
function validermobil(){
    const mobil = $("#mobil").val();
    const regexp = /^[0-9]{8}$/;
    const ok = regexp.test(mobil);
    if(!ok){
        $("#feilmobil").html("telefon nummeret må bestå av 8 siffer");
        return false;
    }
    else{
        $("#feilmobil").html("");
        return true;
    }
}
function ingenValideringsFeil(){
    return ( validerpersonnr() && validernavn() && valideradresse() && validerlaanebelop() && validergrunn() && validermobil() );
}
