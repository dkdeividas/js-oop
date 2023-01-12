class User {
    constructor(name, surname, cardnumber, adress, phone) {
        this.name = name;
        this.surname = surname;
        this.cardnumber = cardnumber;
        this.adress = adress;
        this.phone = phone;
        this.books = [];
    }

    getUserInfo() {
        console.log(`Skaitytojo asmenine informacija: ${this.name} , ${this.surname} , ${this.cardnumber} , ${this.adress} , ${this.phone}. 

        Paimtos knygos:`);

        for(let i = 0; i < this.books.length; i++ ){
            console.log(this.books[i]);
          }
    }

    paimtosKnygos(book) {
        this.books.push(book);
    }
}

const skaitytojas = new User("Deividas", "Kvederas", 66, "Kybartai", 86123456);
skaitytojas.paimtosKnygos("knyga1");
skaitytojas.paimtosKnygos("knyga2");
skaitytojas.paimtosKnygos("knyga3");
skaitytojas.getUserInfo();
const skaitytojas2 = new User("Jonas", "Jonaitis", 77, "Kaunas", 86654321);
skaitytojas2.paimtosKnygos("knyga4");
skaitytojas2.paimtosKnygos("knyga5");
skaitytojas2.paimtosKnygos("knyga6");
skaitytojas2.getUserInfo();





// paimtos_knygos(book) {
    //     let target = document.getElementById(this.name);
    //     let element = document.createElement("p");
    //     element.innerText = book;
    //     target.appendChild(element).className = "bordered listitem";
    //     this.books.push(book);
    // }
    // check() {
    //     console.log(this.name + "turi pasiemes sias knygas: ");
    //     for (let i = 0; i < this.books.length; i++) {
    //         console.log(this.books[i]);
    //     }
    // }