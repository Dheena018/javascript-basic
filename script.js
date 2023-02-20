let country="Australia";
console.log(country);

const continent="America";
console.log(continent);

let population='2000';
console.log(population);

let language ="Hindi"


console.log(6 > 5);
let firstname = "Mass";
let lastname = 'Dheena';

const username = firstname + ' '+lastname;

console.log(username);

const myname = 'dheena';

console.log(myname);


console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
 
// const description1=
// country + ' is in ' + continent + ' and its ' + population + ' mmillion people speak' + language;


// console.log(description1);




const marksMass= 95;
const marksHeight=1.88;

const johnsMass=85;
const johnsHeight=1.76;

const BMIMarks=marksMass + marksHeight **2;
const BMIjohns=johnsMass + (johnsHeight * johnsHeight);
const markHigherBMI= BMIMarks > BMIjohns;

console.log(markHigherBMI);

const descriptionOne=`${country} is in ${continent} and its ${population} million people speak ${language}`;

console.log(descriptionOne);

if(population < 33){
    console.log(`${country} population is abobe average`);
}else{
    console.log(`${country} population is ${33-population} million below average`);
}

if(markHigherBMI){
    console.log("Mark's BMI is higher than John's!");
}else{
    console.log("John's BMI is higher than Mark's!")
}


const averageOfDolphins = (96 + 98 + 108) / 3;
const averageOfKoalas = (88 +91 + 110) / 3;
console.log(averageOfDolphins , averageOfKoalas);

if(averageOfDolphins > averageOfKoalas){
    console.log('Dolphins win the trophy');
}else if(averageOfDolphins > averageOfKoalas){
    console.log("Koalas win the trophy");
}else{
    console.log("Match Draw");
}


const averageOfDolphin = (97 + 112 + 101) / 3;
const averageOfKoala = ( 109 + 95 + 123) / 3 ;
console.log(averageOfDolphin , averageOfKoala);

if(averageOfDolphin > averageOfKoala){
    console.log("Dolphin win the trophy");
}else if(averageOfDolphin > averageOfKoala){
    console.log("koalo win the trophy");
}else{
    console.log("Match Draw");
}


const averageOfDolphinss = (97 + 112 + 101) / 3;
const averageOfKoalass = ( 109 + 95 + 123) / 3 ;
console.log(averageOfDolphinss , averageOfKoalass);

if(averageOfDolphinss > averageOfKoalass && averageOfDolphinss >=100){
    console.log("Dolphinss win the trophy");
}else if(averageOfDolphinss > averageOfKoalass && averageOfDolphinss >=100){
    console.log("koaloss win the trophy");
}else{
    console.log("Match Draw");
}


switch (language)
{
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
    break;
    case 'Spanish':
        console.log('2nd place in the number of native speakers');
        break;
        case 'English':
            console.log('3rd place');
            break;
            case 'Hindi':
                console.log('Number 4');
                break;
                case 'Arabic':
                    console.log('5th most spoken language');
                    break;
                    default:
                        console.log('Great language too :D');
                    
}
