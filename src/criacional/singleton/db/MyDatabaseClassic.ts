import { User } from "../interfaces/User"

export class MyDatabaseClassic {


    private static instance: MyDatabaseClassic | null = null
    private users: User[] = []

    private constructor (){


    }

    static getInstance(): MyDatabaseClassic{

        if (MyDatabaseClassic.instance === null){

            MyDatabaseClassic.instance = new MyDatabaseClassic()


        }

        return MyDatabaseClassic.instance
    }


    add(user: User): void{

        this.users.push(user)

    }

    remove(index: number): void{

        this.users.splice(index, 1)

    }

    show(): void{

        this.users.forEach((e)=>{

            console.log(e)
        })

    }
}


// const db1 = MyDatabaseClassic.getInstance()
// const db2 = MyDatabaseClassic.getInstance()


// console.log(db1 === db2)





