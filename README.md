## Générateur de paysages virtuels 
##KANOUTE HAMIDOU SIO12


Projet de développement logiciel à destinatation d'apprentis développeur.

Objectifs  

* prise en main d'une petite application javascript (sans framework)
* programmation en javascript dans une approche objet et événementielle
* utilisation de l'API 2D JS intégrée
* développement de la créativité  

### Squelette de l'application

#### structure des dossiers

```
.
├── css
│   ├── lavalamp.png
│   ├── layout.css
│   ├── menu_bg.png
│   ├── menu.css
│   └── menu_line.png
├── docs
│   ├── analyse.dia
│   ├── analyse.png
│   ├── java-genPaysageEtudiant.zip
│   └── java-paysage-virutel.png
|
├── js
│   ├── main.js
│   └── modules
│       ├── AbstractForm.js
│       ├── Cloud.js
|       ├── Immeuble.js
|       ├── Planete.js
|       ├── Pyramide.js
|       ├── Rond.js
|       ├── Stickman.js
|       ├── Triangle.js
│       └── TruePyramide.js
|      
├── index.html
└── README.md
```

* `index.html` : le point d'entrée de l'interprétation par un navigateur. Hormis les inclusion `css`, 
ce fichier contient quelques instructions `javascript` faisant appel à des fonction de `main.js`
* `css` : l'application utilise le template : http://www.script-tutorials.com/pure-css3-lavalamp-menu/
* `main.js` : déclare utiliser des modules (des classes `js`) et définit 2 fonctions : ̀

```javascript 
function drawThisForm(whichForm) {
  if (whichForm === 'Immeuble') {
    _drawForms(Immeuble.buildForms())
  } else if (whichForm === 'Triangle') {
    _drawForms(Triangle.buildForms())
  } else if (whichForm === 'AbstractForm') {
  _drawForms(AbstractForm.buildForms())
  }
}

function drawAllForms () {
  _drawForms(buildForms())
}
```

le dossier `modules` : il contient le code source de classes javascript. C'est dans ce dossier 
que vous placerez vos classes représentant les formes issues de votre imagination. 

* `AbstractForm.js` : c'est la classe de base des formes à venir (deux sont fournies en exemple)
* `Immeuble.js` et `Triangle.js` sont des exemples.

Les nouvelles formes seront représentées par des classes

Conformément aux exemples fournis 
 
 
![analyse](docs/analyse.png)

### Analyse du code existant

#### index.html

La barre de menu contient une liste déroulante présentant les composants de forme

```html
  <li><a class="hsubs" href="#">Composant</a>
      <ul class="subs">
        <li><a href="#" onclick="drawForm('Immeuble');return false;">Immeuble</a></li>
        <li><a href="#" onclick="drawForm('Triangle');return false;">Triangle</a></li>
        <li><a href="#" onclick="drawForm('AbstractForm');return false;">AbstractForm</a></li>
      </ul>
  </li>
```

Un clic utilisateur sur un des items de cette liste provoquera 
un appel à la fonction `drawForm`.

```javascript
<script type="module" src="js/main.js"></script>

<script>
  function drawForm(form) {
    document.drawForm(form)
  }
</script>

``` 
En allant voir  `main.js` on comprend que la fonction `drawForm` 
est une référence la fonction  `drawThisForm` du module `main.js` (importé juste avant)
  

### ajouter/supprimer une nouvelle classe de forme

Voici où vous devriez alors intervenir  :

* dans `index.html`, ajouter un ou supprimer un item à la liste `<li>` qui 
définit la fonction `js` à appeler lorsque l'utilisateur clique sur le lien l'instruction 
`return false;` qui suit est pour là pour stopper l'action normal du navigateur 
lorsque l'utilisateur clique sur un lien - comme suivre le lien ou scroller la page).     

```html
  <li><a class="hsubs" href="#">Composant</a>
      <ul class="subs">
        <li><a href="#" onclick="drawForm('Immeuble');return false;">Immeuble</a></li>
        <li><a href="#" onclick="drawForm('Triangle');return false;">Triangle</a></li>
        <li><a href="#" onclick="drawForm('AbstractForm');return false;">AbstractForm</a></li>
      </ul>
  </li>
```

* dans `main.js`, modifier les fonctions `drawThisForm` et `drawThisForm`  

```javascript

/**
 * construit les différentes formes du paysage, en appelant la méthode statique
 * buildForms de chacune des classes
 * 
 * @return {Object[]}
 */
function buildForms() {
  let forms = Immeuble.buildForms()
  forms = forms.concat(Triangle.buildForms())
  forms = forms.concat(AbstractForm.buildForms())
  // à compléter/modifier
  // etc. pour chacune de vos classes
  return forms
}

/**
 *  dessine uniquement la forme passée dont le nom est reçu en paramètre
 * @param whichForm (si on peut le faire en dynamaique, je suis preneur,
 *                    style passer la classe au lieu de son nom)
 */
function drawThisForm(whichForm) {
  if (whichForm === 'Immeuble') {
    _drawForms(Immeuble.buildForms())
  } else if (whichForm === 'Triangle') {
    _drawForms(Triangle.buildForms())
  } else if (whichForm === 'AbstractForm') {
    _drawForms(AbstractForm.buildForms())
  }
}

```
#Les classe ajoutés ou à venir
|Classe Prévue|Classe ajouté|classe prévue|
|:---------: |:-----:|:-------:|
|Cloud.js    | ✔     |   ✗    |
|Pyramide.js | ✔     |   ✗    |
|Stickman.js | ✔     |   ✗    |
|Rond.js     | ✔     |   ✗    |


##Première classe ajoutés
* ##Rond.js
![Rond](docs/Rond.PNG)

Cette première classe et un copier/coller de la classe triangle avec des modification afin de dessiner un rond. Grâce à cette classe j'ai pu prendre en main le code déjà présent et comprendre la structure.

* ###Pyramide.js 
Cette seconde classe à permis d'appliquer les cours vue sur le canvas afin de crée une "pyramide", ce fut soldé par un echec mais cependant cela donne un résultat satisfaisant donc je l'ai gardé.

* ###TruePyramide et Stickman
Cette troisième classe est le fruit de recherche sur internet et à permis de crée une vrai pyramide d'ou le nom "TruePyramide" de même pour stickman.

#Problème rencontrer 

![TruePyramideCode](docs/CodePyramide.PNG)
####Voici le code perméttant de dessiner les pyramides,et nous pouvons voir que les coordonées sont fixent ce qui donne des dessins fixe comme ci-dessous.
![Fixe](docs/TruePyramide.PNG)

####Cependant l'ojectif de ce projet est de crée des paysage de façon aléatoire de ce fait il fait mettre des coordonnés de façon aléatoire.




#Solution




