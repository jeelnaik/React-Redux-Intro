var str = '?The ,quick?brown fox jumps over the lazy dog. It barked.';
var pun =[]
var index=[]
var arr=[]
var regex = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]";
for (var i = 0; i < str.length; i++) {
    if (regex.includes(str[i])) {
        pun.push(str[i])
        index.push(i)
    }
}

console.log(regex);
console.log(pun);
console.log(index);

let word="";
for (var i = 0; i < str.length; i++) {
    if (pun.indexOf(str[i]) !== -1) {
        if (str[i] === " ") {
            arr.push(word)
            word = ""
        }else{
            // arr.push(word)
            if (word !== "") {
                arr.push(word)
            }
            arr.push(str[i])
            console.log(typeof str[i]);
            word = ""
        }

    }else{
        word += str[i]
    }
}

// for (var i = 0; i < pun.length; i++) {
// //     if (pun[i] === " ") {
// //         arr.push("string")
// //     } else{
// //         arr.push(pun[i])
// //     }
// // }
console.log(arr);
