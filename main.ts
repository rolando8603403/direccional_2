basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index < 4; index++) {
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
})
