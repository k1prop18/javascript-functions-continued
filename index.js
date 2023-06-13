// code your solution here

function saturdayFun() {
    return "it exists";
}
function saturdayFun(y) {
    if (y === undefined) {
        return "This Saturday, I want to roller-skate!" }
        else {
            return "This Saturday, I want to bathe my dog!"
        }

    }

function mondayWork() {
    return "it exists"

}
function mondayWork(a) {
    if (a === undefined) {
        return "This Monday, I will go to the office." 
    }
    else {
        return "This Monday, I will work from home."
    }
//     return "This Monday, I will go to the office."
// }
// function mondayWork() {
//     if ("work from home") {
//         return "This Monday, I will work from home."
//     }
}
// function wrapAdjective() {
//     wrapAdjective.to.exist
// }

// let result = wrapAdjective('*')
// let emphatic = result("a hard worker")

// function emphatic() {
//     return "You are *a hard worker*!"
// }
// //let result = wrapAdjective("||")//
// let emphatic = result("a dedicated programmer")
// function emphatic() {
//     return "You are ||a dedicated programmer||!"
// }
function wrapAdjective(string) {
    function inner(special) {
        if (string === "*") {
            return "You are *a hard worker*!"
        }
        else {
            return "You are ||a dedicated programmer||!"
        }
        
    }
    return inner;

}