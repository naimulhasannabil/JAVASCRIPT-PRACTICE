// JavaScript Call and Apply Method

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
const ticketDate = ["B2", "Mursalin Parbez"];
book.apply(greenLine, ticketDate);