import stringHash from "string-hash"

export const getHash = (str) => {

    const hash2 = stringHash(str)


    let hash = 5381

    console.log("hasheando xd")
    console.log(str.length)

    for (let i = str.length; i >= 0; i--) {
        hash = (hash * 33) ^ str.charCodeAt(i)
        // console.log(str.charCodeAt(i))
    }
    // console.log(hash2)

    return hash

}

export const getColorHslTriald = (hash) => {

    console.log("base recibida")
    console.log(hash)

    const BH = hash % 360
    const BS = (hash % 50) + 50
    const Bb = (hash % 25) + 75

    console.log(BH)
    console.log(BS)
    console.log(Bb)
}

export const hslAnalogoAdobeColor = (hash) => {


    const BH = hash % 360
    const BS = (hash % 50) + 50
    const Bb = (hash % 25) + 75
    // const BH = 344
    // const BS = 96
    // const Bb = 98



    let colorA = [(BH + 32) % 360, BS + 5 > 100 ? 100 - ((BS + 5) % 100) : BS + 5, Bb + 5 > 100 ? 100 - ((Bb + 5) % 100) : Bb + 5]
    let colorB = [(BH + 16) % 360, BS + 5 > 100 ? 100 - ((BS + 5) % 100) : BS + 5, Bb + 9 > 100 ? 100 - ((Bb + 9) % 100) : Bb + 9]
    let colorC = [BH, BS, Bb]
    let colorD = [BH - 16 < 0 ? 360 + ((BH - 16) % 360) : (BH - 16) % 360, BS + 5 > 100 ? 100 - ((BS + 5) % 100) : BS + 5, Bb + 9 > 100 ? 100 - ((Bb + 9) % 100) : Bb + 9]
    let colorE = [BH - 32 < 0 ? 360 + ((BH - 32) % 360) : (BH - 32) % 360, BS + 5 > 100 ? 100 - ((BS + 5) % 100) : BS + 5, Bb + 5 > 100 ? 100 - ((Bb + 5) % 100) : Bb + 5]





    console.log("colorA", colorA)
    console.log("colorB", colorB)
    console.log("colorC", colorC)
    console.log("colorD", colorD)
    console.log("colorE", colorE)

    console.log("caso negativo")

    const cuadrado = Math.pow((-32 % 360), 2)
    console.log("cuadrado", cuadrado)

    console.log("caso negativo", Math.sqrt(Math.pow((-32 % 360), 2)))


    return {
        colorA,
        colorB,
        colorC,
        colorD,
        colorE
    }

}

export const hslToHex = (h, s, b) => {
    console.log("se recibio", "h: ", h, "s :", s, "b: ", b)

    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));

    const rHex = Math.round(255 * f(5)).toString(16)
    const gHex = Math.round(255 * f(3)).toString(16)
    const bHex = Math.round(255 * f(1)).toString(16)

    return `#${rHex}${gHex}${bHex}`


}

export const HSBToRGB = (h, s, b) => {

    console.log("se recibio", "h: ", h, "s :", s, "b: ", b)

    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [Math.round(255 * f(5)), Math.round(255 * f(3)), Math.round(255 * f(1))];
};

