// JavaScript Call and Apply Method

const greenLine = {
  bus: "Green Line",
  bCode: "GL",
  ticket: [],
  book(seatNumber, name) {
    console.log(
      `${name} booked a seat on ${this.bus} ticket ${this.bCode}-${seatNumber}`
    );
    this.ticket.push({ticketInfo : `${this.bCode}-${seatNumber}, name`})
  },
};
greenLine.book('C1', 'Naimul Hasan Nabil');
greenLine.book('C2', 'Nurul Huda');
console.log(greenLine);