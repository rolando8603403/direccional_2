input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # . . .
            # . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # # . .
            # # # # .
            . # # . .
            . # . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # #
            . . # # .
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
    while (!(input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB)))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
