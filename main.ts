let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
})
