let r = 12
let a = 2
let randomRed = (10, 60)




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.parent("background")
}

function draw() {
    background(0, 0, 0,);
    strokeWeight(1)
    frameRate(60)

    push()
    for (let i = 5; i < 1000; i += 18) {
        noFill()
        let x = r * cos(a)
        let y = r * sin(a)

        stroke(255, 0, 70, 98)
        ellipse(width / 2, height / 2, i + mouseY + y, i - mouseX + x)
        stroke(randomRed, 0, 40,)
        ellipse(width / 2, height / 2, i + mouseX + x, i - mouseY + y)
    }
    pop()

    a += 0.03

}



// output.textContent = JSON.stringify(data, undefined, 2)});


