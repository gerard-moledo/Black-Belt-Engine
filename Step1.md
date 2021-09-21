## Part 1: Create a Sprite

Type `Sprite.create();` inside of the `start` function and click 'Run'.

You should see a red square appear in the middle of the screen. Just like that, we created our first sprite!

## Part 2: Changing Shape

We can change what type of shape our sprite is.

If you type `Sprite.create("rectangle");`, the same sprite will appear on your screen.

But try changing `"rectangle"` to `"circle"`, like so: `Sprite.create("circle");`. 

This time, a blue circle should appear! Right now, these are the two shapes to choose from.

## Part 3: Changing Position

Let's try changing some other properties of our sprite, such as position (`x` and `y`).

To do so, make sure you choose which shape to use. Then after the shape, add a comma and curly braces.

Like so: `Sprite.create("rectangle", {});`.

Inside of the curly braces is where our custom properties will go. Examples will make things clear.

To give my sprite an `x` of `100`, I'd type `x: 100` in the curly braces: `Sprite.create("rectangle", {x: 100});`.

To give my sprite a `y` of `200`, I'd type `y: 200` in the curly braces: `Sprite.create("rectangle", {y: 200});`.

If I want both, I'd type both `x: 100` and `y: 200` inside of the curly braces, separated by commas.

So the final outcome would be: `Sprite.create("rectangle", {x: 100, y:200});`

## Part 4: Sprite Properties

Now that we know how to create a sprite with custom properties, all we need to know is what properties can be changed.

The properties depend on what shape you choose. Here is a list of all properties of the different kinds of sprites:

### `rectangle`
- `x`: where the center of the rectangle is horizontally (left edge = 0, right edge = 480)
- `y`: where the center of the rectangle is vertically (top edge = 0, bottom edge = 360)
- `width`: how wide the rectangle is
- `height`: how tall the rectangle
- `color`: color of the rectangle
- `fill`: whether the rectangle is filled or just an outline

### `circle`
- `x`: where the center of the circle is horizontally
- `y`: where the center of the circle is vertically
- `radius`: distance from the center of the circle to the edge
- `color`: color of the circle
- `fill`: whether the circle is filled or just an outline

## Part 5: Go crazy!

Now that you know all of the properties of sprites, you're able to customize your sprite however you'd like.