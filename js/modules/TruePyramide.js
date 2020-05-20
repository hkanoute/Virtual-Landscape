import { AbstractForm } from './AbstractForm.js';
class TruePyramide  extends  AbstractForm {

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


        ctx.beginPath();
        ctx.moveTo(this.x , this.y);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        //fill
        ctx.fillStyle = (this.x%2 === 0) ? "#3b230b" : "blue";
        ctx.fill();
        //wallb
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        //fill
        ctx.fillStyle = ctx.fillStyle = (this.x%2 === 0) ? "#d49c5f" : "yellow";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        //fill
        ctx.fillStyle =  ctx.fillStyle = (this.x%2 === 0) ? "#3b230b" : "red";
        ctx.fill();
        //wallb
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        //fill
        ctx.fillStyle =  ctx.fillStyle = ctx.fillStyle = (this.x%2 === 0) ? "#d49c5f" : "white";
        ctx.fill();

        ctx.fillStyle =  ctx.fillStyle = ctx.fillStyle = (this.x%2 === 0) ? "#d49c5f" : "white";
        ctx.fill();

    }


    static buildForms() {
        let x =  ~~(Math.random() *1000)
        const myTruePyramide = new TruePyramide(x, 650, )
        const forms = [myTruePyramide]
        return forms
    }
}

export { TruePyramide }
