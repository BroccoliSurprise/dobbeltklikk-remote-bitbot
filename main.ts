/**
 * Dette er del 2 av "Dobbeltklikk-remote", til micro:biiten som skal stå i BitBot-bilen.
 * 
 * Kjører på radiokanal 8
 */
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    music.playMelody("- G - G - - - - ", 120)
    bitbot.rotatems(BBRobotDirection.Left, 60, 3000)
})
radio.onReceivedString(function (receivedString) {
    demo = 0
    if (receivedString == "nedA") {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 60)
    } else if (receivedString == "oppA") {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 0)
    } else if (receivedString == "nedB") {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
    } else if (receivedString == "oppB") {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 0)
    } else if (receivedString == "nedAB") {
        bitbot.move(BBMotor.Both, BBDirection.Forward, 100)
    } else if (receivedString == "dobbelKlikkA") {
        if (klikkAtoggle == 1) {
            bitbot.ledClear()
            klikkAtoggle = 0
        } else {
            bitbot.ledRainbow()
            klikkAtoggle = 1
        }
    } else if (receivedString == "dobbelKlikkB") {
        bitbot.stop(BBStopMode.Coast)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (receivedString == "rist") {
        bitbot.goms(BBDirection.Reverse, 60, 1000)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    demo = 1
    bitbot.setLedColor(0xFF0000)
    for (let indeks = 0; indeks <= 6; indeks++) {
        bitbot.setPixelColor(indeks * 2, 0x0000FF)
    }
})
let klikkAtoggle = 0
let demo = 0
bitbot.select_model(BBModel.XL)
bitbot.ledBrightness(40)
radio.setGroup(8)
let ledTimer = 12
let tikk = 0
// Loop uten "pause"
basic.forever(function () {
    if (input.runningTime() > tikk + ledTimer && demo == 0) {
        bitbot.ledRotate()
        tikk = input.runningTime()
    }
})
