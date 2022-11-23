function date_heure(id){
    date = new Date;
    annee = date.getFullYear();
    mois = date.getMonth();
    nvmois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
    j = date.getDate();
    jours = date.getDay();
    nvjours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    h = date.getHours();
    if(h<10){
            h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10){
            m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10){
            s = "0"+s;
    }
    resultat = 'Nous sommes le '+nvjours[jours]+' '+j+' '+nvmois[mois]+' '+annee+'  et il est '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = resultat;
    setTimeout('date_heure("'+id+'");','1000');
    return true;
}