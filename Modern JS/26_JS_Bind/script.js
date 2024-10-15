// JavaScript Bind method
// Practice On Bus Company
const greenLine = {
  bus: "Green Line",
  bCode: "GL",
  ticket: [],
  book(seatNumber, name) {
    console.log(
      `${name} booked a seat on ${this.bus} ticket ${this.bCode}-${seatNumber}`
    );
    this.ticket.push({ ticketInfo: `${this.bCode}-${seatNumber}, name` });
  },
};
greenLine.book("C1", "Naimul Hasan Nabil");
greenLine.book("C2", "Nurul Huda");
console.log(greenLine);

// Add New Bus Company
const shohag = {
  bus: "Shohag",
  bCode: "SH",
  ticket: [],
};

// When you don't need any details data in object then you use call method
const book = greenLine.book;
book.call(shohag, "A1", "Mahmudul Haque Emon");
book.call(shohag, "A2", "Zahin Afser");
// book("A1", "Mahmudul Haque Emon");
console.log(shohag);

// Add New Bus
const hanif = {
  bus: "Hanif",
  bCode: "HN",
  ticket: [],
};
book.call(hanif, "B2", "Mursalin Parbez");

// Apply Method
// when you see array data you use apply method
const ticketDate = ["B2", "Mursalin Parbez"];
book.apply(greenLine, ticketDate);

//Bind Method
// If you take any method but you will work it later than you use bind method
// const ticketSH = book.bind(shohag);
// ticketSH("E1", "Emon");

// Predefine
const ticketSH = book.bind(shohag, 'E1');
ticketSH("Emon");
ticketSH('Nurul');
ticketSH('Zahin');
ticketSH('Jubayer');
ticketSH('Junayed');

const person = {
    firstName : 'Naimul Hasan',
    lastName : 'Nabil',
    display : function () {
       return this.firstName + ' ' + this.lastName;
    }
}

const display = person.display();
console.log(display);