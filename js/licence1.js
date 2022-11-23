
function removingContent(){
    let p = document.getElementById("matiere");
    p.remove();
}

//Semestre 1

function AnalyseS1(){
    removingContent();
    let p2 = document.getElementById("module");
    let message = '<div class="module"><h1 class="titre">Analyse</h1><p class="description">Les CM et TD d&#8217analyse du premier semstre</p><h2 class="description">CM</h2><div class="titouan"><div><a class="biensur" href="../media/discord.webp">CM</a></div></div><br/><h2 class="description">TD</h2><div class="titouan"><div><a href="../media/pdp.jpg" class="biensur">TD 1 <br/> - <br/> Fonction</a></div><div><a href="../media/pdp.jpg" class="biensur">TD 2</a></div><div><a href="../media/pdp.jpg" class="biensur">TD 3</a></div><div><a href="../media/pdp.jpg" class="biensur">TD 4</a></div><div><a href="../media/pdp.jpg" class="biensur">TD 5</a></div><div><a href="../media/pdp.jpg" class="biensur">TD 6</a></div></div></div>';
    p2.innerHTML = message;
}

function AlgebreS1(){
    removingContent();
}

function Algo(){
    removingContent();
}

function Web(){
    removingContent();
}

function Electronique(){
    removingContent();
}

//Semestre 2

function AnalyseS2(){
    removingContent();
}

function AlgebreS2(){
    removingContent();
}

function ProgObjet(){
    removingContent();
}

function InterfaceVisuelle(){
    removingContent();
}