import { AbstractForm } from './AbstractForm.js';
class Pyramide  extends  AbstractForm {

    // you create new Rectangles by calling this as a function
    // these are the arguments you pass in
    // add default values to avoid errors on empty arguments
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
        // console.log(this.toString())
        // destructuring
        // const {
        //   x, y, width, height,
        //   fillColor, strokeColor, strokeWidth
        // } = this

        // saves the current styles set elsewhere
        // to avoid overwriting them
        ctx.save()

        // set the styles for this shape
        ctx.fillStyle = this.fillColor
        ctx.lineWidth = this.strokeWidth

        // create the *path*
        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor



        const MAX_HEAD = 80
        let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD: this.y
        let Brick_in_base = 8;
        let wCase = ~~(this.width / 6)
        let hCase = ~~(this.height / 6)

        for (let i = 1 ; i<= Brick_in_base;i++){
            for (let j = 0;j<i;j++){

                ctx.rect(this.x + j * wCase, new_y + i * hCase, wCase, hCase);
                ctx.fillRect(this.x + j * wCase, new_y + i * hCase, wCase, hCase);
            }

        }

        ctx.fill()
        ctx.stroke()
        ctx.restore()
    }


    static buildForms() {
        let color = ["red","yellow","green","blue","white","orange","purple"]
        let i =  ~~(Math.random() *color.length)
        let widthCase = 100;
        let max = ~~Math.random() * 10 + 7
        let forms = []
        for (let i=0; i<max; i++ ) {
            forms.push(new Pyramide(
                ~~(Math.random() * window.innerWidth),
                ~~(Math.random() * 400),
                ~~(Math.random() * (widthCase)),
                ~~(Math.random() * (widthCase*2)),
                color[i],
                'black',
                1,
                true
            ))
        }
        return forms
    }
}

export { Pyramide }
