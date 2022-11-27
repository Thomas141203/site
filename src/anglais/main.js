
function removingContent(){
    let p = document.getElementById("contenu");
    p.remove();
}

function textAnglais(){
    removingContent();
    let para = document.getElementById("mainClass");
    let message = '<div id="contenu"><p>We have all seen those creaky old windmills on farms, and although they may seem about as low-tech as you can get, those old windmills are the predecessors for new modern wind turbines that generate electricity. The same wind that used to pump water for cattle is now turning giant wind turbines to power cities and homes. OK, have a look at this wind farm in the California desert, a hot desert next to tall mountains an ideal place for a lot of wind. Here’s another one on the windy prairies of Wyoming. Now, today’s wind turbines are much more complicated machines than old prairie windmills, but the principle is the same. Both capture the wind’s energy. Ok, here’s how it works. First a wind turbine blade works sort of like an airplane wing. Blowing air passes around both. The shape of the blade causes the air pressure to be uneven (higher on one side of the blade and lower on the other side) and that’s what make it spin. The uneven pressure causes the blades to spin around the center of the turbine. On the top, there’s a weather vane that’s connected to a computer to keep the turbine turned into the wind so it captures the most energy. Now the blades are attached to a shaft which only turns about 18 revolutions a minute, and that’s not nearly fast enough to generate electricity by itself. So the rotor shaft spins a series of gears that increase the rotation of gears that increase the rotation up to about 1800 revolutions per minute. And at that speed, a generator can produce a lot of electricity. So why are wind turbines so tall ? Well, the higher up you go, the windier it is; more wind naturally means electricity. And in many cases, larger turbines can also capture wind energy more efficiently. The blades can sweep a circle in the sky as long as a football field. Now, what’s really cool is that even a small wind farm like this one in Wyoming can generate enough energy to power more than 9000 homes, and larger farms can provide much more clean energy for our home and businesses.</p></div>';
    para.innerHTML = message;
}

function textFrancais(){
    removingContent();
    let para = document.getElementById("mainClass");
    let message = '<div id="contenu"><p>Nous avons tous vu ces vieux moulins à vent grinçants dans les fermes, et bien qu ils puissent sembler aussi rudimentaires que possible, ces vieux moulins à vent sont les prédécesseurs des nouvelles éoliennes modernes qui produisent de l électricité. Le même vent qui pompait l eau pour le bétail transforme maintenant des éoliennes géantes pour alimenter les villes et les maisons. OK, jetez un œil à ce parc éolien dans le désert californien, un désert chaud à côté de hautes montagnes, un endroit idéal pour beaucoup de vent. En voici un autre dans les prairies venteuses du Wyoming. Maintenant, les éoliennes d aujourdhui sont des machines beaucoup plus compliquées que les anciens moulins à vent des prairies, mais le principe est le même. Les deux capturent l énergie du vent. Ok, voici comment cela fonctionne. Premièrement, une pale d éolienne fonctionne un peu comme une aile davion. Lair soufflé passe autour des deux. La forme de la pale rend la pression de lair inégale (plus élevée dun côté de la pale et plus basse de lautre côté) et cest ce qui la fait tourner. La pression inégale fait tourner les pales autour du centre de la turbine. Sur le dessus, il y a une girouette qui est connectée à un ordinateur pour maintenir la turbine tournée vers le vent afin quelle capte le plus d énergie. Maintenant, les pales sont attachées à un arbre qui ne tourne qu environ 18 tours par minute, et ce n est pas assez rapide pour générer de l électricité par lui-même. Ainsi, l arbre du rotor fait tourner une série d engrenages qui augmentent la rotation des engrenages qui augmentent la rotation jusqu à environ 1800 tours par minute. Et à cette vitesse, un générateur peut produire beaucoup d électricité. Alors pourquoi les éoliennes sont-elles si hautes ? Eh bien, plus vous montez, plus il y a de vent; plus de vent signifie naturellement de l électricité. Et dans de nombreux cas, des éoliennes plus grandes peuvent également capter l énergie éolienne plus efficacement. Les pales peuvent balayer un cercle dans le ciel aussi long qu un terrain de football. Maintenant, ce qui est vraiment cool, c est que même un petit parc éolien comme celui-ci dans le Wyoming peut générer suffisamment d énergie pour alimenter plus de 9000 foyers, et les plus grands parcs peuvent fournir beaucoup plus d énergie propre pour notre maison et nos entreprises.</p></div>';
    para.innerHTML = message;
}


function questions(){
    removingContent();
    let para = document.getElementById("mainClass");
    let message = '<div id="contenu"><h2 id="question">Question 1: Commpléter une phrase au début de la vidéo</h2><h2 id="reponse">Those old windmills are the predecessors for new modern wind turbines that generate electricity</h2><h2 id="question">Question 2: Quel est la différence entre les vielles et nouvelles éoliennes et quel est leur point commun ?</h2><h2 id="reponse">There is no big difference between old and new wind turbines, the principle is the same even if they are more complicated</h2><h2 id="question">Question 3: A quoi peut on comparer une pale d éolienne  ?</h2><h2 id="reponse">A wind turbine blade works much like an airplane wing /// First a wind turbine blade works sort of like an airplane wing.</h2><h2 id="question">Question 4: Expliquer comment une pale tourne ?</h2><h2 id="reponse">The blown air passes around both. The shape of the blade makes the air pressure uneven and that is what makes it spin. The air pressure is higher on one side of the blade and lower on the other side.</h2><h2 id="question">Question 5: Donner 2 moyens qui pemettent de capter plus de vent et donc plus d énergie ?</h2><h2 id="reponse">First, the rotor shaft spins a series of gears that increase the rotation and produce a lot of electricity. Secondly, the higher you are, the windier it will be.</h2><h2 id="question">Question 6: Vrai ou faux : Les petits éoliennes de campagnes ne produisent pas assez d éléctricité ?</h2><h2 id="reponse">False: Wyoming wind farm can generate enough energy to power more than 9,000 homes</h2><h2 id="question">Question 7: Vrai ou faux : Les USA ont beaucoup d éoliennes offshore ?</h2><h2 id="reponse">False</h2><h2 id="question">Question 8: En quoi les éoliennes offshore sont biens et ou vit majoritairement la population américaine</h2><h2 id="reponse">Mainly in Californie, Texas, Floride</h2></div>';
    para.innerHTML = message;
}