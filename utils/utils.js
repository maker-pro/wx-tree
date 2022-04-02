function objectToString(obj, splitChar) {
    let arr = []
    for(let index in obj) {
        arr.push(obj[index].name)
    }
    return arr.join(splitChar)
}

function objToArray(casts) {
    let castsArray = []
    for(let index in casts) {
        var cast = {
            image: casts[index].avatars ? casts[index].avatars.large : "",
            name: casts[index].name
        }
        castsArray.push(cast)
    }
    return castsArray
}

export {
    objectToString,
    objToArray
}