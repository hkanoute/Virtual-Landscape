import { AbstractForm } from './AbstractForm.js';
class Cloud  extends  AbstractForm {

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

        // draw cloud
        let color = ["red","yellow","green","blue","white","orange","purple"]
        let i =  ~~(Math.random() *7)

        ctx.beginPath();
        ctx.moveTo(this.x+140, this.y+80);
        ctx.bezierCurveTo(this.x+100,  this.y+100, this.x+130, this.y+150, this.x+130,  this.y+150);
        ctx.bezierCurveTo(this.x+250, this.y+180, this.x+320, this.y+180, this.x+340,  this.y+150);
        ctx.bezierCurveTo(this.x+420, this.y+150, this.x+420, this.y+120, this.x+390,  this.y+100);
        ctx.bezierCurveTo(this.x+430, this.y+40, this.x+370, this.y+30, this.x+340,  this.y+50);
        ctx.bezierCurveTo(this.x+320, this.y+5, this.x+250, this.y+20, this.x+250,  this.y+50);
        ctx.bezierCurveTo(this.x+200, this.y+5, this.x+150, this.y+20, this.x+170,  this.y+80);
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.fillStyle = color[i];
        ctx.fill();
        ctx.strokeStyle = color[i];
        ctx.stroke();
    }


    static buildForms() {


        let widthCase = 100;
        let max = ~~Math.random() * 10 + 4
        let forms = []
        for (let i=0; i<max; i++ ) {
            forms.push(new Cloud(
                ~~(Math.random() * window.innerWidth),
                ~~(Math.random() * 400),
                ~~(Math.random() * (widthCase)),
                ~~(Math.random() * (widthCase*2)),
            ))
        }
        return forms
    }
}


export { Cloud }
