# Step 1: Create Game Objects

Pong has 3 main game objects: 2 paddles, one for each player, and a ball. So let's create sprites for each one.

We'll use the `Sprite.create()` function, passing `"player"` into the `()` for each paddle, and `"projectile"` for the ball.

Let's also give each object a name by storing them in variables. Your code should look like this:

```
function start() {
    player1 = Sprite.create("player");
    player2 = Sprite.create("player");
    ball = Sprite.create("projectile");
}
```

If you 'Run' the code, you should see only two objects, a square and a circle. That's because the players are on top of each other!

We'll fix that soon, but first, we have to learn about properties. To do that, we'll take a look at the `Canvas`.