class Draw {
    static canvas = document.getElementById("canvas");
    static cc = canvas.getContext("2d");

    static rect(x, y, width, height, color = "#FF0000", fillRect = true) {
        if (fillRect) {
            this.cc.fillStyle = color;
            this.cc.fillRect(x, y, width, height);
        } else {
            this.cc.strokeStyle = color;
            this.cc.lineWidth = 4;
            this.cc.strokeRect(x, y, width, height);
        }
    } 

    static circle(x, y, radius, color = "#0000FF", fillCircle = true) {
        if (fillCircle) {
            this.cc.fillStyle = color;
        } else {
            this.cc.strokeStyle = color;
            this.cc.lineWidth = 4;
        }
        this.cc.beginPath();
        
        this.cc.arc(x, y, radius, 0, 2 * Math.PI, true);

        if (fillCircle) {
            this.cc.fill();
        } else {
            this.cc.stroke();
        }
    }

    static image(image, x, y, width, height) {
        this.cc.drawImage(image, x, y, width, height);
    }

    static text(text, x, y, baseline = "top", textAlign = "left", color = "#000000", fill = true, font = "24px Arial") {
        this.cc.font = font;
        this.cc.textBaseline = baseline;
        this.cc.textAlign = textAlign;
        if (fill) {
            this.cc.fillStyle = color;
            this.cc.fillText(text, x, y);
        } else {
            this.cc.strokeStyle = color;
            this.cc.lineWidth = 1;
            this.cc.strokeText(text, x, y);
        }
    }
}

class Canvas {
    static get width() {
        return Draw.canvas.width;
    }

    static get height() {
        return Draw.canvas.height;
    }

    static setColor(color="#FFFFFF") {
        Draw.canvas.style.backgroundColor = color;
    }
}

class Shape {

    constructor() {

    }
    
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        
    }
}

class Rect extends Shape {

    constructor(x=0, y=0, width=50, height=50, color="#FF0000", fill=true) {
        super();
        this.x = x - width/2;
        this.y = y - height/2;
        this.width = width;
        this.height = height;
        this.color = color;
        this.fill = fill;
    }
    
    setPosition(x, y) {
        this.x = x - this.width/2;
        this.y = y - this.height/2;
    }

    draw() {
        Draw.rect(this.x, this.y, this.width, this.height, this.color, this.fill);
    }
}

class Circle extends Shape {

    constructor(x=0, y=0, radius=25, color="#0000FF", fill=true) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.fill = fill;
    }

    draw() {
        Draw.circle(this.x, this.y, this.radius, this.color, this.fill);
    }
}

class ImageShape extends Shape {

    constructor(x, y, image) {
        super();
        this.image = image;
        this.x = x - this.image.width/2;
        this.y = y - this.image.height/2;
        this.width = this.image.width;
        this.height = this.image.height;
    }

    draw() {
        Draw.image(this.image, this.x, this.y, this.width, this.height);
    }
}

class TextShape extends Shape {

    constructor(x=0, y=0, text="Hello World", color="#000000", fill=true) {
        super();
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.fill = fill;
        this.baseline = "top";
        this.textAlign = "left";
    }

    draw() {
        Draw.text(this.text, this.x, this.y, this.baseline, this.textAlign, this.color, this.fill);
    }

}