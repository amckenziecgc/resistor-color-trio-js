export function decodedResistorValue(colours) {

    const smallprefix = 'ohms'
    const bigprefix = 'kilo' + smallprefix
    const values = []

    for(const colour of colours){
        values.push(colourNum[colour.toUpperCase()])
    }

    //procedural hack-in
    const resistance = ((values[0] * 10) + values[1]) * (10 ** values[2])

    if(resistance >= 1000){
        return String(resistance/1000) + ' ' + bigprefix
    }
    else{
        return String(resistance) + ' ' + smallprefix
    }
}

const colourNum = {
    BLACK: 0,
    BROWN: 1,
    RED: 2,
    ORANGE: 3,
    YELLOW: 4,
    GREEN: 5,
    BLUE: 6,
    VIOLET: 7,
    GREY: 8,
    WHITE: 9
}