const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}


const splitStringByChar = (str, character) => {
    let strToSplit = str.concat(character)
    let strings = []
    let lastIndex = 0

    for(let i=0; i<strToSplit.length; i++) {
        if (strToSplit[i] === character) {
            strings.push(strToSplit.slice(lastIndex, i))
            lastIndex = i + 1
        }
    }

    return strings
}


export default {
    escapeRegex,
    splitStringByChar
}