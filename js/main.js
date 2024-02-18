// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////                     JAVASCRIPT VANILLA + ES6                          /////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
// otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
// empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
// parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
// devolverme solo el 5.

// let list = [3, 1, 6, 7, 5, 1, 4, 6, 8, 4]
// let listFinal = []

// const ejercicio = (array, cantidad) => {
//     cantidad !== undefined
//         ? array = list.slice(cantidad*-1)
//         : array = list.slice(-1)
//     console.log(array)
// }

// ejercicio(listFinal,3)


// 2. Escribe una función que, dado un array de números, devuelva una string con todos
// esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2,
// 3, 4, 6, 7, 8], me devolvería “0 2 3 4-6 7 8”

// let list = [3, 1, 6, 7, 5, 1, 4, 6, 8, 4]
// let word = ""

// const ejercicio = (array) => {
//     array.forEach((item, index) => {
//         item % 2 === 0 && list[index + 1] % 2 === 0
//             // ? (newList.push(item + "-"))
//             // : (newList.push(item))
//             ? word += item + "-"
//             : word += item + " "
//     });
//     return word
// }

// console.log(ejercicio(list))




// 3. Dado un array con elementos repetidos, determina qué elemento es el más frecuente
// y cuántas veces se ha repetido

// let list = [4, 1, 4, 6, 4, 6]
// let list3 = [45, -1, 4, 6, 4, 6,45,1,6,3,1,3,45,2,45,1,2,45,45,45,45]

// const ejercicio = (array) => {
//     let list2 = array
//     let flag1 = 0
//     let flag2 = 0
//     let repeated = ""
//     for (let i = 0; i < array.length; i++) {
//         array.forEach(element => {
//             element === list2[i]
//                 ? flag1++
//                 : null
//         })
//         flag1 <= flag2
//             ? null
//             : (flag2 = flag1, repeated=list2[i].toString())
//         flag1 = 0
//     }
//     console.log(`${repeated} se repite ${flag2} veces`)
// }
// ejercicio(list3)


// 4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y
// todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería
// “hOLA”)


// let word = "Hola, Que Tal Va TOdo?"

// const ejercicio = () => {
//     wordL = Array.from(word)
//     for (let i = 0; i < wordL.length; i++) {
//         wordL[i] === wordL[i].toUpperCase()
//             ? wordL.splice(i,1,wordL[i].toLowerCase())
//             : wordL.splice(i,1,wordL[i].toUpperCase())
//     }
//     wordFinal = wordL.join("")
//     console.log(wordFinal)
// }


// ejercicio()


// 5. Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4,
// 28, 14], [3, 10, 26, 7]] saque por consola cada uno de sus arrays interiores separados por
// indicadores con el número de fila, es decir:
// Fila 1
// 1
// 2
// 1
// 24
// Fila 2
// 8
// ...

// let list = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

// const ejercicio = (array) => { 
//     array.forEach((element,index) => {
//         console.log(`fila ${index+1}`)
//         for (let i = 0; i < array.length; i++) {
//             console.log(i)
//         }
//     });
// }

// ejercicio(list)


// 6. Escribe una función que devuelva los años bisiestos en cierto rango de años.

// let yearF = 1993
// let yearE = 2008

// const ejercicio = () => {
//     times = 0
//     while (yearF % 4 !== 0) {
//         yearF++
//         times++
//     }
//     yearB = (yearE - yearF) / 4
//     return `hay ${yearB} años bisiestos entre ${yearF-times} y ${yearE}, ${yearB+1} si contamos al ${yearE}`
// }

// console.log(ejercicio())


// 7. Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del
// array

// let list = [8, 11, 9, 4]

// const ejercicio = (array, element) => {
//     for (let i = 0; i < array.length; i++) {
//         array[i] === element
//             ? array.splice(i,1)
//             : null
//     }
//     return array
// }

// console.log(ejercicio(list,11))



// 8. Crea una función que, dados dos arrays, devuelva un único array con ambos arrays
// concatenados pero que elimine los elementos repetidos de los mismos.

// let list1 = [8, 11, 9, 4, 9, 5]
// let list2 = [5, 35, 9, 64, 12]
// let list3 = []

// const ejercicio = () => {
//     list3 = list3.concat(list1, list2)
//     let quant = 0
//     let quant2 = 0
//     let repeated = []
//     for (let i = 0; i < list3.length; i++) {
//         list3.forEach(element => {
//             element === list3[i]
//                 ? (quant++, quant > 1 && !repeated.includes(element)
//                     ? repeated.push(element)
//                     : null)
//                 : null
//         });
//         quant >= quant2
//             ? quant2 = quant
//             : null
//         quant = 0

//     }
//     console.log(list3.join(" "))
//     list3.forEach((element, index) => {
//         element === repeated[0] || element === repeated[1]
//             ? list3.splice(index, 1, " ")
//             : null
//     });
//     return list3.join(" ")
// }

// console.log(ejercicio())

// 9. Crea una función que determine si un array contiene cierto elemento, pasando ambos
// como argumentos a la misma

// let list2 = [5, 35, 9, 64, 12]

// const ejercicio = (array, isIncluded) => {
//     return array.includes(isIncluded)
//         ? `El array contiene el elemento ${isIncluded}`
//         : `El array no contiene el elemento ${isIncluded}`
// }

// console.log(ejercicio(list2, 644))



// 10. Escribe una función que rellene un array con un determinado número de elementos y
// pasa ambas cosas por parámetro. Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]

// const ejercicio = (tamaño, contenido) => {
//     list = new Array(tamaño)
//     for (let i = 0; i < list.length; i++) {
//         list.splice(i,1,contenido)
//     }
//     return list
// }


// console.log(ejercicio(7, 5))

// 11. Escribe una función para intercambiar las posiciones de dos elementos en un array.

// let list1 = [5, 35, 9, 64, 12]
// let list2 = [65, 5, 99, 6, 62]

// const ejercicio = (array1, array2, pos1, pos2) => {
//     // console.log(array1)
//     // console.log(array2)
//     let temp
//     pos1 <= array1.length && pos2 <= array2.length
//         ? (temp = array1[pos1],
//             array1.splice(pos1, 1, array2[pos2]),
//             (array2.splice(pos2, 1, temp)))
//         : null
//     console.log(array1)
//     console.log(array2)
// }

// ejercicio(list1, list2, 2, 4)


// 12. Escribe una función que genere un array de números y pásale por parámetro el número inicial
// y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo
// deseado.


// const ejercicio = (start, long) => {
//     let num = Math.floor(Math.random() * 10)
//     list = [start]
//     for (let i = 0; i < long; i++) {
//         list.push(list[i]+1)
//     }
//     return list
// }

// console.log(ejercicio(4,3))




// 13. Escribe una función que, al pasarle un array como argumento, determine qué elementos de
// ese array son números y devuelva la suma de los mismos.


// let list1 = [`25`, "ey", true, 6, 62]


// const ejercicio = (array) => {
//     let add = 0
//     let numbersIn = []
//     let numbersPos = []
//     array.forEach((element, index) => {
//         // Number.isNaN(element)
//         typeof (element) === "number"
//             ? (add += element, numbersPos.push(index), numbersIn.push(element))
//             : null
//     });
//     return `En el array list1 puedes encontrar ${numbersIn.length} números, en los índices ${numbersPos.join(" y ")}, siendo esos números el ${numbersIn.join(" y el ")} respectivamente`
// }
// console.log(ejercicio(list1))



// 14. Escribe una función que determine la palabra más larga de una string

// let list1 = [`hola`, "cuales", 'amarillo', 'suburbios', 'quisiera ser tan alta']


// const ejercicio = (array) => {
//     let tempL
//     let longerW
//     let tempN1 = 0
//     let tempN2 = 0
//     array.forEach(element => {
//         tempL = Array.from(element)
//         tempN1 = tempL.length
//         tempN1 > tempN2
//             ? (tempN2 = tempN1, longerW = element)
//             : null
//         tempN1 = 0
//         tempL = []
//     });
//     return `La palabra más larga de este array es ${longerW}, con una longitud de ${tempN2} letras`
// }
// console.log(ejercicio(list1))




// 15. Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el
// resultado



// let color = 'amarillo'

// const ejercicio = (word) => {
//     let vocal = []
//     let posV = []
//     let res = []
//     tempL = Array.from(word.toLowerCase())
//     tempL.forEach((element, index) => {
//         switch (true) {
//             case element === "a":
//             case element === "e":
//             case element === "i":
//             case element === "o":
//             case element === "u":
//                 vocal.push(element)
//                 posV.push(index)
//                 break;

//             default:
//                 break;
//         }
//     });
//     for (let i = 0; i < vocal.length; i++) {
//         res.push(vocal[i], " con el índice => ")
//         res.push(posV[i],", ")
//     }
//     res = res.join("")
//     return `En la palabra ${word} hay ${vocal.length} vocales, y son ${res}`
// }

// console.log(ejercicio(color))




// 16. Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad
// de caracteres que quieres que tenga la contraseña.

// const ejercicio = (a) => {
//     let passWord = []
//     for (let i = 0; i < a; i++) {
//         aleat = Math.floor(Math.random() * 10)
//         passWord.push(aleat.toString())
//     }
//     return `La contraseña generada es ${passWord.join("-")}`
// }

// console.log(ejercicio(5))


// 17. Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola
// cada segundo y minuto entre ambas.

// let time = [12, 58, 0]
// let [hours, minutes, seconds] = time

// const ejercicio = () => {
//     while ((hours !== 0) || (minutes !== 0) || (seconds !== 0)) {
//         seconds != 59
//             ? (seconds++)
//             : (seconds = 0, minutes != 59)
//                 ? (minutes++)
//                 : (minutes = 0, hours != 23
//                     ? hours++
//                     : hours = 0)
//         time = [hours,minutes,seconds]
//         console.log(time.join(":"))
//     }
// }

// ejercicio()


// 18. Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como
// parámetro el objeto y la propiedad en cuestión)

// let person = {
//     nombre: "jesus",
//     edad: 31,
//     pelo: "corto",
//     ojos: 2,
// }

// const ejercicio = (object, property1, property2) => {
//     entries = Object.entries(object)
//     for (const [key, value] of entries) {
//         key === property1
//             ? console.log(`si está la key ${property1}`)
//             : console.log(`no está la key ${property1}`)
//         value === property2
//             ? console.log(`si está el value ${property2}`)
//             : console.log(`no está el value ${property2}`)
//     }
// }

// ejercicio(person, "nombre","corto")


// 19. Escribe una función que sume todos sus argumentos, independientemente de cuántos sean

// const ejercicio = (...numbers) => {
//     let res = 0
//     for (const number of numbers) {
//         res += number        
//     }
//     return res
// }


// console.log(ejercicio(2,3,5))



// 20. Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar
// cualquier cantidad de notas como parámetro

// const ejercicio = (...grades) => {
//     let totalG = 0
//     let numberG = 0
//     for (const grade of grades) {
//         totalG += grade
//         numberG++
//     }
//     media = totalG / numberG
//     return media >= 5
//         ? `La nota media del alumno es de ${media.toFixed(2)}, por lo que está aprobado`
//         : `La nota media del alumno es de ${media.toFixed(2)}, por lo que está suspendido`
// }

// console.log(ejercicio(2, 4, 6, 7, 5, 5, 5, 5))




// 21. Escribe una función que reciba un array de números como argumento y saque la diferencia
// entre el número más alto y el más bajo del mismo. Utiliza el operador ...



// const ejercicio = (...numbers) => {
//     let list = Array.from(numbers)
//     compMax = 0
//     compMin = list[0]
//     list.forEach(element => {
//         element > compMax
//             ? compMax = element
//             : null
//         element < compMin
//             ? compMin = element
//             : null
//     });
//     dif = compMax - compMin
//     return `El número máximo es ${compMax}, el mínimo es ${compMin} y la diferencia entre ellos es de ${dif}`
// }

// console.log(ejercicio(9, 4, 6, 7, 5, 7, 13, 6))




// 22. Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos
// tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección
// y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo
// en que cada objeto contiene toda la información de cada persona.


// let person = [
//     person1 = {
//         name: "xuso",
//         surname: "Martinez"
//     },
//     person2 = {
//         name: "manuel",
//         surname: "Lopera"
//     },
//     person3 = {
//         name: "Daniel",
//         surname: "Robles"
//     }
// ]

// let personInfo = [
//     personInfo1 = {
//         age: 13,
//         addres: "fakeStreet"
//     },
//     personInfo2 = {
//         age: 36,
//         addres: "SesameSt"
//     },
//     personInfo3 = {
//         age: 31,
//         addres: "Landlandia"
//     }
// ]

// const ejercicio = (object1, object2) => {
//     let personTemp = []
//     for (let i = 0; i < object1.length; i++) {
//         personTemp[i] = { ...object1[i], ...object2[i] }
//     }
//     console.log(personTemp)
// }


// ejercicio(person, personInfo)



// 23. Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
// objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
// menos la edad. Hazlo utilizando el operador ...

// let person = [
//     person1 = {
//         name: "xuso",
//         surname: "Martinez"
//     },
//     person2 = {
//         name: "manuel",
//         surname: "Lopera"
//     },
//     person3 = {
//         name: "Daniel",
//         surname: "Robles"
//     }
// ]

// let personInfo = [
//     personInfo1 = {
//         age: 13,
//         addres: "fakeStreet"
//     },
//     personInfo2 = {
//         age: 36,
//         addres: "SesameSt"
//     },
//     personInfo3 = {
//         age: 31,
//         addres: "Landlandia"
//     }
// ]

// const ejercicio = (object1, object2) => {
//     let personTemp = []
//     let personTemp2 = []
//     for (let i = 0; i < object1.length; i++) {
//         personTemp[i] = { ...object1[i], ...object2[i] }
//     }
//     for (const element of personTemp) {
//         let {age,...notAge} = element
//         console.log(notAge)
//     }

// }


// ejercicio(person, personInfo)



// 24. Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la
// primera letra de cada uno sea mayúscula y el resto minúsculas

// let names = ["mara", "pAblo", "juan", "MARCOS"]

// const ejercicio = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         wordSep = Array.from(array[i])
//         for (let i = 0; i < wordSep.length; i++) {
//             wordSep[i] = wordSep[i].toLowerCase()
//             wordSep[0] = wordSep[0].toUpperCase()
//         }
//         array.splice(i,1,wordSep.join(""))
//     }
//     console.log(array)
// }

// ejercicio(names)


// 25. Crea un array con únicamente los nombres de los siguientes objetos
// let personas = [
// { nombre: "Mara", edad: 30 },
// { nombre: "Pablo", edad: 35 },
// { nombre: "Juan", edad: 26 },
// { nombre: "Marta", edad: 56 },
// { nombre: "Rodrigo", edad: 31 },
// ];
// Además, saca un array únicamente con los nombres de los mayores de 30

// let personas = [
//     { nombre: "Mara", edad: 30 },
//     { nombre: "Pablo", edad: 35 },
//     { nombre: "Juan", edad: 26 },
//     { nombre: "Marta", edad: 56 },
//     { nombre: "Rodrigo", edad: 31 },
// ];

// const ejercicio = (array) => {
//     nameList = []
//     array.forEach(element => {
//         element.edad > 30
//             ? (Object.entries(element),
//                 wordSpl = Object.entries(element).splice(0, 1),
//                 nameList.push(Object.fromEntries(wordSpl)))
//             : null
//     });
//     console.log(nameList)
// }

// ejercicio(personas)


// 26. Dado un array de números, crea una función que sume solo los pares

// let nums = [9, 4, 6, 7, 5, 7, 13, 6]

// const ejercicio = (array) => {
//     suma = 0
//     array.forEach(element => {
//         element % 2 === 0
//             ? suma += element
//             : null
//     });
//     return suma
// }
// const ejercicio = (...nums) => {
//     numsL = [...nums]
//     suma = 0
//     numsL.forEach(element => {
//         element % 2 === 0
//             ? suma += element
//             : null
//     });
//     return suma
// }

// console.log(ejercicio(nums))



// 27. Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string

const ejercicio = (name) => {
    nameSpl = Array.from(name)
    inicials = nameSpl[0] + "."
    nameSpl.forEach((element, index) => {
        nameSpl[index - 1] === " "
            ? inicials += element + ". "
            : null
    });
    inicials = inicials.toUpperCase()
    console.log(inicials)
}

ejercicio("manuel lopera")


// 28. Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9
// let estudiantes = [
// { nombre: 'Mara', notas: [10, 7, 8, 8, 9] },
// { nombre: 'David', notas: [6, 2, 5, 10, 7] },
// { nombre: 'Marcos', notas: [3, 5, 2, 8, 5] },
// { nombre: 'Pablo', notas: [10, 10, 9, 8, 9] },
// ];