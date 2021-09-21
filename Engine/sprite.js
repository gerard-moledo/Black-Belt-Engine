class Sprite {
    static sprites = [];

    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.image = null;
    }

    static create(type="player", x, y, name) {
        let sprite;
        let shape;
        switch(type) {
            case "player":
                if (typeof x === "undefined") x = 240;
                if (typeof y === "undefined") y = 300;

                shape = new Rect(x, y, 50, 50, "#00FFFF", true);
                sprite = new Player(x, y, shape, shape.width, shape.height);
                sprite.name = name ? name : "player";
                sprite.update = window[sprite.name + "Update"];
                break;
            case "projectile":
                if (typeof x === "undefined") x = 240;
                if (typeof y === "undefined") y = 180;

                shape = new Circle(x, y, 5, "#0000FF", true);
                sprite = new Projectile(x, y, shape, shape.radius);
                sprite.name = name ? name : "projectile";
                sprite.update = window[sprite.name + "Update"];
                break;
            case "enemy":
                if (typeof x === "undefined") x = 240;
                if (typeof y === "undefined") y = 60;

                shape = new Rect(x, y, 20, 20, "#FF0000", true);
                sprite = new Enemy(x, y, shape, shape.width, shape.height);
                sprite.name = name ? name : "enemy";
                sprite.update = window[sprite.name + "Update"];
                break;
            case "text":
                if (typeof x === "undefined") x = 10;
                if (typeof y === "undefined") y = 10;
                
                shape = new TextShape(x, y, "New Text", "gold", true);
                sprite = new Text(x, y, shape, shape.text);
                sprite.name = name ? name : "text";
                sprite.update = window[sprite.name + "Update"];
                break;
            default:
                sprite = new Sprite();
                console.log("Missing Type");
                return;
        }
        Sprite.sprites.push(sprite);
        return sprite;
    }

    get color() {
        return this.shape.color;
    }

    set color(color) {
        this.shape.color = color;
    }

    render() {
        if (this.shape instanceof Rect) {
            this.shape.width = this.width;
            this.shape.height = this.height;
            this.shape.x = this.x - this.shape.width/2;
            this.shape.y = this.y - this.shape.height/2;
        }
        if (this.shape instanceof Circle) {
            this.shape.radius = this.radius;
            this.shape.x = this.x;
            this.shape.y = this.y;
        }
        if (this.shape instanceof ImageShape) { 
            this.shape.width = this.width;
            this.shape.height = this.height;
            this.shape.x = this.x - this.shape.width/2;
            this.shape.y = this.y - this.shape.height/2;
        }
        if (this.shape instanceof TextShape) {
            this.shape.x = this.x;
            this.shape.y = this.y;
            this.shape.text = this.text;
        }
        
        this.shape.draw();
    }

    static loadImages(...images) {
        loaded = false;

        for (let image of images) {
            let newImage = new Image();
            newImage.src = "Assets/" + image + ".png";

            newImage.onload = () => {
                loaded = true;
            }
        }
    }

    addImage(image, scaleX, scaleY) {
        let newImage = new Image();
        newImage.src = "Assets/" + image + ".png";
    
        newImage.onload = () => {
            this.image = newImage;
            this.width = this.image.width * (typeof scaleX === "undefined" ? 1 : scaleX);
            this.height = this.image.height * (typeof scaleY === "undefined" ? 1 : scaleY);
            this.shape = new ImageShape(this.x, this.y, this.image, this.width, this.height);
        }
    }

    isTouching(other) {
        if (typeof other === "function") {
            for (let sprite of Sprite.sprites) {
                if (sprite instanceof other) {
                    if (this.isTouching(sprite)) {
                        return sprite;
                    }
                }
            }
            return null;
        }
        if (this.shape instanceof Circle && (other.shape instanceof Rect || other.shape instanceof ImageShape)) {
            if (CheckCircleRectangle(this.shape, other.shape)) {
                return other;
            }
        }
        if ((this.shape instanceof Rect || this.shape instanceof ImageShape) && other.shape instanceof Circle) {
            if (CheckCircleRectangle(other.shape, this.shape)) {
                return other;
            }
        }

        return null;
    }

    remove() {
        this.destroy = true;
    }
}

class Player extends Sprite {
    constructor(x, y, shape, width, height) {
        super(x, y);
        this.shape = shape;
        this.width = width;
        this.height = height;
        this.type = "player";
    }

    update(dt) {
        
    }
}

class Projectile extends Sprite {
    constructor(x, y, shape, radius) {
        super(x, y);
        this.shape = shape;
        this.radius = radius;
        this.type = "projectile";
    }

    update(dt) {

    }
}

class Enemy extends Sprite {
    constructor(x, y, shape, width, height) {
        super(x, y);
        this.shape = shape;
        this.width = width;
        this.height = height;
        this.type = "enemy";
    }

    update(dt) {

    }
}

class Text extends Sprite {
    constructor(x, y, shape, text) {
        super(x, y);
        this.shape = shape;
        this.type = "text";
    }

    get text() {
        return this.shape.text;
    }

    set text(text) {
        this.shape.text = text;
    }

    update(dt) {
        
    }
}

function CheckCircleRectangle(circle, rect) {
    let distance = {x: Math.abs(circle.x - (rect.x + rect.width/2)), y: Math.abs(circle.y - (rect.y + rect.height/2))};
    if (distance.x > rect.width/2 + circle.radius) return false;
    if (distance.y > rect.height/2 + circle.radius) return false;
    if (distance.x <= rect.width/2) return true;
    if (distance.y <= rect.height/2) return true;
    let roundedCornerDist = Math.pow(distance.x - rect.width/2, 2) + Math.pow(distance.y - rect.height/2, 2);

    return roundedCornerDist <= (circle.radius * circle.radius);
}