(function() {
    function loadAssets() {
        for (var asset of assets) {
            console.log(asset);
            if (asset.includes("wav")) {
                Assets.audio[asset.replace(".wav", "")] = new Audio("Assets/" + asset);
            }
        }

        for (let i = 1; i <= 4; i++) {
            numAssets += 1;

            let newImage = new Image();
            newImage.src = "Assets/rocket" + i + ".png";

            newImage.onload = () => {
                numLoaded++;
                if (numLoaded === numAssets) {
                    loaded = true;
                }
            }
        }
        for (let i = 1; i <= 9; i++) {
            numAssets += 1;

            let newImage = new Image();
            newImage.src = "Assets/spaceship" + i + ".png";

            newImage.onload = () => {
                numLoaded++;
                if (numLoaded === numAssets) {
                    loaded = true;
                }
            }
        }

        sfx = [];
        sfx.push(new Audio("Assets/bounce.wav"));
        sfx.push(new Audio("Assets/hit1.wav"));
        sfx.push(new Audio("Assets/hit2.wav"));
        sfx.push(new Audio("Assets/hit3.wav"));
        sfx.push(new Audio("Assets/hit4.wav"));
    }

    function input() {
        if (Input.refresh) {
            for (let key in Input) {
                if (Input[key].hasOwnProperty("pressed")) {
                    Input[key].pressed = false;
                }
            }
        } else {
            Input.refresh = !Input.refresh;
        }
    }

    function updates(dt) {
        update(dt);

        for (let sprite of Sprite.sprites) {
            if ("update" in sprite && sprite.update) {
                sprite.update(dt);
            }
        }

        for (let i = 0; i < Sprite.sprites.length; i++) {
            if (Sprite.sprites[i].destroy) {
                Sprite.sprites.splice(i, 1);
                i--;
            }
        }
    }

    function render() {
        for (var sprite of Sprite.sprites) {
            sprite.render();
        }
    }

    function gameLoop(timeStamp) {
        requestAnimationFrame(gameLoop);
        if (!loaded || paused) return;

        let dt = (timeStamp - previousTimeStamp) / 1000;
        previousTimeStamp = timeStamp;

        input();

        Draw.cc.clearRect(0, 0, Draw.canvas.width, Draw.canvas.height);
        
        updates(dt);

        render();
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    let previousTimeStamp = 0;

    loaded = false;
    paused = false;
    let numAssets = 0;
    let numLoaded = 0;
    
    loadAssets();
    start();
    window.focus();
    requestAnimationFrame(gameLoop);

    function onKeyDown(e) {
        if (e.repeat) return;
        
        switch(e.key) {
            case "d":
                Input.right.held = true;
                Input.right.pressed = true;

                Input.d.held = true;
                Input.d.pressed = true;
                break;
            case "ArrowRight":
                Input.right.held = true;
                Input.right.pressed = true;

                Input.rightArrow.held = true;
                Input.rightArrow.pressed = true;
                break;
            case "a":
                Input.left.held = true;
                Input.left.pressed = true;

                Input.a.held = true;
                Input.a.pressed = true;
                break;
            case "ArrowLeft":
                Input.left.held = true;
                Input.left.pressed = true;

                Input.leftArrow.held = true;
                Input.leftArrow.pressed = true;
                break;
            case "w":
                Input.up.held = true;
                Input.up.pressed = true;

                Input.w.held = true;
                Input.w.pressed = true;
                break;
            case "ArrowUp":
                Input.up.held = true;
                Input.up.pressed = true;

                Input.upArrow.held = true;
                Input.upArrow.pressed = true;
                break;
            case "s":
                Input.down.held = true;
                Input.down.pressed = true;

                Input.s.held = true;
                Input.s.pressed = true;
                break;
            case "ArrowDown":
                Input.down.held = true;
                Input.down.pressed = true;

                Input.downArrow.held = true;
                Input.downArrow.pressed = true;
                break;
        }
        
        Input.keys[e.key] = {held: true, pressed: true};
        Input.refresh = false;
    }
    function onKeyUp(e) {
        switch(e.key) {
            case "d":
                Input.right.held = false;
                Input.d.held = false;
                break;
            case "ArrowRight":
                Input.right.held = false;
                Input.rightArrow.held = false;
                break;            
            case "a":
                Input.left.held = false;
                Input.a.held = false;
                break;
            case "ArrowLeft":
                Input.left.held = false;
                Input.leftArrow.held = false;
                break;
            case "w":
                Input.up.held = false;
                Input.w.held = false;
                break;
            case "ArrowUp":
                Input.up.held = false;
                Input.upArrow.held = false;
                break;
            case "s":
                Input.down.held = false;
                Input.s.held = false;
                break;
            case "ArrowDown":
                Input.down.held = false;
                Input.downArrow.held = false;
                break;
        }

        Input.keys[e.key].held = false;
    }

    function onMouseDown(e) {
        switch(e.button) {
            case 0:
                Input.mouse.held = true;
                Input.mouse.pressed = true;
                break;
        }
        Input.refresh = false;
    }
    function onMouseUp(e) {
        switch(e.button) {
            case 0:
                Input.mouse.held = false;
                break;
        }
    }
    function onMouseMove(e) {
        Input.mouse.x = e.offsetX;
        Input.mouse.y = e.offsetY;
    }
})();