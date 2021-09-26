# Step 2: The Canvas Object

The `Canvas` is the screen we're drawing on, and where our game is taking place.

One thing we can do is change the size of the screen, by accessing the `Canvas`'s *properties*.

To do that, we need to access the *canvas* (what we're drawing on), which we can do through the `Canvas` object.

The `Canvas` object has a function attached to it called `setColor()`. You use it like so:

`Canvas.setColor("black");`

If you write that code just above the code you wrote in Step 1 (inside the start function!), and 'Run', the screen should turn black!

## Moving the paddles

The paddles are on top of each other, so let's move them to opposite sides of the screen.

To change each paddle's position, we have to change their `x` 