import { AbstractForm } from './AbstractForm.js';

class Rond extends AbstractForm{

    constructor (
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesanteur= false
    ) {
        super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesanteur)
    }

    /**
     * Dessine la forme spécifique à cette classe
     * @param ctx contexte 2D du canvas
     */
    draw (ctx) {
        ctx.save()

        // set the styles for this shape
        ctx.fillStyle = this.fillColor
        ctx.lineWidth = this.strokeWidth

        // create the *path*
        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor

        // pousse l'objet au bas de l'écran
        const MAX_HEAD = 80
        let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD: this.y

        // un peu d'ombre pour les rond
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

        // création du rond
        ctx.arc(this.x,new_y,this.width/2,0,2 * Math.PI)
        ctx.stroke
        ctx.closePath()


        // draw the path to screen
        ctx.fill()
        ctx.stroke()

        // restores the styles from earlier
        // preventing the colors used here
        // from polluting other drawings
        ctx.restore()
    }

    /**
     * get array of forms
     * @return {[Triangle,...]}
     */
    static buildForms() {
        // create a new Rond object using the Immeuble class
        const myRond = new Rond(450, 450, 70, 400, 'yellow', '', 2, false )
        let max = ~~Math.random() * 10 + 3
        let forms = []
        for (let i=0; i<max; i++ ) {
            forms.push(
                new Rond(
                    ~~(Math.random()*3*myRond.x + 50) ,
                    ~~(Math.random()*myRond.y),
                    ~~(Math.random()*3*myRond.width),
                    ~~(Math.random()*myRond.height),
                    myRond.fillColor,
                    myRond.strokeColor,
                    '',
                    i%2===0))
        }
        const builds = forms

        return builds
    }

}

export { Rond }
