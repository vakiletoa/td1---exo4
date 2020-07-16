input.onButtonPressed(Button.A, function () {
    led.unplot(posX, 0)
    posX += -1
    if (posX < 0) {
        posX = 0
    }
    led.plot(posX, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, 0)
    posX += 1
    led.plot(posX, 0)
    if (posX > 4) {
        led.plot(0, 1)
    }
})
let posX = 0
posX = 0
led.plot(posX, 0)
