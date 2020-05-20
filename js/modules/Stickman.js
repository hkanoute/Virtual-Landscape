import { AbstractForm } from './AbstractForm.js';
class Stickman  extends  AbstractForm {

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
        ctx.fillStyle = "black"; // #ffe4c4
        ctx.arc(this.x+200, this.y+50, 50, 0, Math.PI * 2, true); // draw circle for head
// (x,y) center, radius, start angle, end angle, anticlockwise
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = "white"; // color
        ctx.lineWidth = 6;
        ctx.arc(this.x+200, this.y+60, 20, 0, Math.PI, false); // draw semicircle for smiling
        ctx.stroke();

// eyes
        ctx.beginPath();
        ctx.fillStyle = "white"; // color
        ctx.arc(this.x+190, this.y+50, 3, 0, Math.PI * 2, true); // draw left eye
        ctx.fill();
        ctx.arc(this.x+210, this.y+50, 3, 0, Math.PI * 2, true); // draw right eye
        ctx.fill();

// body
        ctx.beginPath();
        ctx.moveTo(this.x+200, this.y+100);
        ctx.lineTo(this.x+200, this.y+180);
        ctx.strokeStyle = "black";
        ctx.stroke();

// arms
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x+200, this.y+100);
        ctx.lineTo(this.x+150, this.y+130);
        ctx.moveTo(this.x+200, this.y+100);
        ctx.lineTo(this.x+250, this.y+130);
        ctx.stroke();

// legs
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x+200, this.y+180);
        ctx.lineTo(this.x+150, this.y+280);
        ctx.moveTo(this.x+200, this.y+180);
        ctx.lineTo(this.x+250, this.y+280);
        ctx.stroke();


    }


    static buildForms() {


        let widthCase = 100;
        let max = ~~Math.random() * 10 + 4
        let forms = []
        let x =  ~~(Math.random() *750)
        let y =650
        for (let i=0; i<max; i++ ) {
            forms.push(new Stickman( x, y))
        }
        return forms
    }
}


export { Stickman }
