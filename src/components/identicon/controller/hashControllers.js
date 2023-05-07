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

    let colorA = [(BH + 32) % 360, BS + 5 > 100 ? 100 - ((BS + 5) % 100) : BS + 5, Bb + 5 > 100 ? 100 - ((Bb + 5) % 100) : Bb + 5]
    let colorB = [(BH + 16) % 360, BS + 5 > 100 ? 100 - ((BS + 5) % 100) : BS + 5, Bb + 9 > 100 ? 100 - ((Bb + 9) % 100) : Bb + 9]

    console.log("colorA", colorA)
    console.log("colorB", colorB)


}
