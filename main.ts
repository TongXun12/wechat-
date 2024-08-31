let Bank_but_banks_bank_bank = 0
input.onPinPressed(TouchPin.P0, function () {
    Eat()
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
function _8864 () {
    radio.sendString("ygfbf")
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.InBackground)
    Bank_but_banks_bank_bank += 1
}
input.onButtonPressed(Button.A, function () {
    _8864()
})
input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 10; index++) {
        radio.sendString("Bruh")
        radio.sendNumber(randint(0, 10))
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    ujjujujuujjuujujujjujuujujjujuju()
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendValue("name", 0)
})
function Eat () {
    if (input.temperature() > 0) {
        basic.showNumber(randint(0, 99))
    }
}
radio.onReceivedValue(function (name, value) {
    images.createBigImage(`
        . # . # . . # # . .
        . . # . . # . . # .
        . . # . . # . . # .
        . . # . . # . . # .
        . . # . . . # # . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        # . # . . . # . # .
        # . # . # . # . # .
        # . # . # . # . # #
        . . # . # . # . # .
        # . . # . # . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # . . # # #
        . . . # . # . . # .
        # . . # # # . . # .
        . # . # . # . . # .
        . # . # . # . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . # # . # . # . .
        . # . . # . . # . .
        . . # . . . . # . .
        . . . # . . . # . .
        . . # . . . . . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        # . # # . . # . . .
        # . # . # . # . . .
        # . # # . . # . . .
        # . # . . . . . . .
        . . # . . . # . . .
        `).scrollImage(1, 200)
})
function ujjujujuujjuujujujjujuujujjujuju () {
    if (Bank_but_banks_bank_bank > 1) {
        radio.sendNumber(0)
        radio.sendString("ooooooooooooff!")
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
}
basic.forever(function () {
    if (input.soundLevel() > 128) {
        radio.sendNumber(999)
    }
})
