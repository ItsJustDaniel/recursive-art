
function setup() {
    createCanvas(windowWidth,windowHeight)
    
}

function draw(){
    translate(windowWidth/3.5,windowHeight);
    rotate(PI + (PI/6));
    outerTriangle(600,PI/3);
    //triangle(windowWidth/5, windowHeight, windowWidth-windowWidth/5, windowHeight, windowWidth/2, windowHeight/12)

}

function outerTriangle(len,ang){
    push()

    line(0,0,0,len);
    innerTriangle(len/2,ang)
    translate(0,len);
    rotate(ang + ang)
    line(0,0,0,len)
    translate(0,len);
    rotate((ang+ang))
    line(0,0,0,len)
    translate(0,len)
    pop()

}
function innerTriangle(len,ang){
    if (len < 10){
        return
    }

        push()
        translate(0,len);
        rotate(ang)
        line(0,0,0,len)
        innerTriangle(len/2,-ang)
        translate(0,len)
        
        rotate(ang+ang)
        
        line(0,0,0,len)
        
        innerTriangle(len/2,-ang)
        translate(0,len)
        rotate(ang+ang)
        line(0,0,0,len)
        innerTriangle(len/2,-ang)
        pop()
    

    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }