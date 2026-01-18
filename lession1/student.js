const getName = () => {
    return "Ariful  Islam";
}

const getAge = () => {
    return "25";
}

const cgpa = 3.92;

const name = "Ariful Islam";

// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cgpa;
// exports.name1 = name;
// name variable k name1 name a export kora hoise.

// ababe alada alada export nah kore , aksaty export kora jay . 
module.exports = {
    getName,
    getAge,
    result: cgpa,
    name1: name
}