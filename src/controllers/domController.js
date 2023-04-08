export const preventScroll = (e) => {

    e.target.blur()
}

export const retardante = async (timme) => {

    return new Promise((resolve, rejet) => {
        setTimeout(() => { console.log("redatado") }, timme)
    })

}