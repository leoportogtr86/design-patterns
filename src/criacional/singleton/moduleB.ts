import {MyDatabaseClassic} from './db/MyDatabaseClassic'
import './moduleA'

const myDb = MyDatabaseClassic.getInstance()



myDb.add({name: "Lea", age: 34})
myDb.add({name: "Jo", age: 48})
myDb.add({name: "Mau Araújo", age: 40})
myDb.add({name: "Le Lopes", age: 38})
myDb.add({name: "Poly", age: 41})

console.log(myDb.show())

