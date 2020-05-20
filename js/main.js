import {Immeuble} from './modules/Immeuble.js';
import {Triangle} from './modules/Triangle.js';
import {AbstractForm} from './modules/AbstractForm.js';
import {Rond} from "./modules/Rond.js";
import {Building} from "./modules/Building.js";
import {TruePyramide} from "./modules/TruePyramide.js";
import {Planete} from "./modules/Planete.js";
import {Cloud} from "./modules/Cloud.js";
import {Stickman} from "./modules/Stickman.js";

var cwPrev = null
var chPrev = null

function clearCanvas() {
  const c = document.getElementById('sceneryCanvas')
  const ctx = c.getContext("2d");

  if (cwPrev) {
    ctx.clearRect(0, 0, cwPrev, chPrev)
  }
  const cw = c.width = window.innerWidth;
  const ch = c.height = window.innerHeight - 80;

  console.log("window.innerHeight : " + window.innerHeight);

  cwPrev = cw
  chPrev = ch
}

function _drawForms(forms) {
  const c = document.getElementById('sceneryCanvas')
  const ctx = c.getContext("2d");

  clearCanvas()
  console.log("forms :" + JSON.stringify(forms))

  // draw all forms by looping over them
  forms.forEach(form => form.draw(ctx))
}


/**
 * construit les différentes formes du paysage, en appelant la méthode statique
 * buildForms de chacune des classes
 *
 * @return {Object[]}
 */
function buildForms() {
  let forms = Immeuble.buildForms()
  forms = forms.concat(Triangle.buildForms())
  forms = forms.concat(Rond.buildForms())
  forms = forms.concat(Building.buildForms())
  forms = forms.concat(TruePyramide.buildForms())
  forms = forms.concat(Planete.buildForms())
  forms = forms.concat(Cloud.buildForms())
  forms = forms.concat(Stickman.buildForms())
  // à compléter/modifier
  // etc. pour chacune de vos classes
  return forms
}

/**
 *  dessine uniquement la forme passée dont le nom est reçu en paramètre
 * @param whichForm (si on peut le faire en dynamaique, je suis preneur, style passer la classe au lieu de son nom)
 */
function drawThisForm(whichForm) {
  if (whichForm === 'Immeuble') {
    _drawForms(Immeuble.buildForms())
  } else if (whichForm === 'Triangle') {
    _drawForms(Triangle.buildForms())
  } else if (whichForm === 'AbstractForm') {
    _drawForms(AbstractForm.buildForms())
  } else if (whichForm === 'Rond') {
    _drawForms(Rond.buildForms())
  } else if (whichForm === 'Pyramide') {
    _drawForms(Building.buildForms())
  } else if (whichForm === 'TruePyramide') {
  _drawForms(TruePyramide.buildForms())
  } else if (whichForm === 'Planete') {
    _drawForms(Planete.buildForms())
  } else if (whichForm === 'Cloud') {
    _drawForms(Cloud.buildForms())
  } else if (whichForm === 'Stickman') {
    _drawForms(Stickman.buildForms())
  }

}

function drawAllForms() {
  _drawForms(buildForms())
}

// accroche des fonctions du module au document courant (pour être appelées ensuite)
document.drawForm = drawThisForm
document.drawAllForms = drawAllForms
document.addEventListener('DOMContentLoaded', document.drawAllForms)

