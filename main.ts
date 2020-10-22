/**
 * Dette er del 2 av "Dobbeltklikk-remote", til micro:biiten som skal stå i BitBot-bilen.
 * 
 * Kjører på radiokanal 8
 */
radio.onReceivedString(function (receivedString) {
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
let klikkAtoggle = 0
bitbot.select_model(BBModel.XL)
bitbot.ledBrightness(40)
radio.setGroup(8)
let ledTimer = 12
let tikk = 0
// Loop uten "pause"
basic.forever(function () {
    if (input.runningTime() > tikk + ledTimer) {
        bitbot.ledRotate()
        tikk = input.runningTime()
    }
})
