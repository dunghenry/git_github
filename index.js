class Person{
    //! static properties
    static address = "Ninh Binh";
    //! private fields
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    //! private methods
    #getName(){
        return this.#name;
    }

    //public methods
    getName(){
        return this.#name;
    }
    info(){
        return {
            name: this.#name,
            age: this.#age
        };
    }

    //! static methods
    static hello(){
        return "Hello everyone!";
    }
}
const person = new Person("TranDung", 22);
console.log(person.getName());
console.log(person.info());

//! static properties and static methods
console.log(Person.address) // Ninh Binh
console.log(Person.hello()) // Hello everyone!