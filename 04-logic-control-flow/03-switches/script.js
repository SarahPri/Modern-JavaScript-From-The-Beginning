const d = new Date(2024, 10, 10, 8, 0, 0);
const month = d.getMonth();

switch(month){
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    case 4:
        console.log('It is April');
        break;
    case 5:
        console.log('It is May');
        break;
    case 6:
        console.log('It is June');
        break;
    case 7:
        console.log('It is July');
        break;
    case 8:
        console.log('It is August');
        break;
    case 9:
        console.log('It is September');
        break;
    default:
        console.log('It is not a Month');
}