import {MyDatabaseClassic} from './db/MyDatabaseClassic'


const myDb = MyDatabaseClassic.getInstance()



myDb.add({name: "Leandro", age: 34})
myDb.add({name: "José", age: 48})
myDb.add({name: "Maura Araújo", age: 40})
myDb.add({name: "Lenny Lopes", age: 38})
myDb.add({name: "Paulo", age: 41})

console.log(myDb.show())

