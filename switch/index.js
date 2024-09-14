var num = 10;
switch (num) {
    case 15:
        console.log("Nurul");
        break;
    case 11:
        console.log("Hasan");
        break;
    case 10:
        console.log("Nabil");
        break;   
    default:
        console.log("I didn't understand");   
}

// Switch Case using for cgpa pattern

var cgpa = 3.5;
switch (true) {
    case cgpa >= 4.0:
        console.log("A+");
        break;
    case cgpa >= 3.7:
        console.log("A");
        break;
    case cgpa >= 3.3:
        console.log("A-");
        break;
    case cgpa >= 3.0:
        console.log("B+");
        break;
    case cgpa >= 2.7:
        console.log("B");
        break;
    case cgpa >= 2.3:
        console.log("B-");
        break;
    case cgpa >= 2.0:
        console.log("C+");
        break;
    case cgpa >= 1.7:
        console.log("C");
        break;
    case cgpa >= 1.3:
        console.log("C-");
        break;
        default:
            console.log("F");
}
