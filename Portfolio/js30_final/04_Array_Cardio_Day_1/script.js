
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
  //end of day notes: monday(21st)
    //inventors by years lived -button still visible, no displaydiv
    //inventors add up years -button still visible, no displaydiv
    //inventors by birthdate, oldest to youngest -button still visible, displaydiv visible sed no data
    //inventors born in 1500s -button still visible, displaydiv visible sed no data






// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const paris = [
    'Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'Wall of Philip II Augustus', 
    'Wall of Charles V', 'Thiers wall', 'City gates of Paris', 'Haussmann\'s renovation of Paris', 'Boulevards of the Marshals', 
    'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', 'Boulevard de l\'Amiral-Bruix', 'Boulevard Mortier', 
    'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 
    'Boulevard du Crime', 'Boulevard du Général-d\'Armée-Jean-Simon', 'Boulevard Haussmann', 'Boulevard de l\'Hôpital', 'Boulevard des Italiens', 
    'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart', 
    'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain', 
    'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone]'
]; //src: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//end data
  
//eventlisteners for buttons et call appropriate function
let btnEars = document.getElementsByClassName("button");
for(let i = 0; i < btnEars.length; i++) {
    btnEars[i].addEventListener("click", () => {
        console.log(btnEars[i]);
        let divType = "";
        let btnType = "";
        let earsClass = btnEars[i].className;
        console.log(earsClass);
        switch(earsClass) {
            case "button filter":
                btnType = "btnFilter";
                divType = document.getElementById("fillFilter");
                display(divType, btnType, subType=0);
                break;
            case "button map":
                btnType = "btnMap";
                divType = document.getElementById("fillMap");
                display(divType, btnType, subType=0);
                break;
            case "button sort0":
                btnType = "btnSort";
                divType = document.getElementById("fillSort");
                display(divType, btnType, subType="sortOne");
                break;
            case "button reduce0":
                btnType = "btnReduce";
                divType = document.getElementById("fillReduce");
                display(divType, btnType, subType="reduceOne");
                break;
            case "button sort1":
                btnType = "btnLifeTime";
                divType = document.getElementById("fillLifeTime");
                display(divType, btnType, subType="sortTwo");
                break;
            case "button sort2":
                btnType = "btnAlphaSort";
                divType = document.getElementById("fillAlphaSort");
                display(divType, btnType, subType="sortThree"); 
                break;
            case "button reduce1":
                btnType = "btnSum";
                divType = document.getElementById("fillSum");
                display(divType, btnType, subType="reduceTwo");
                break;
            case "button paris":
                btnType = "btnParis";
                divType = document.getElementById("fillParis");
                display(divType, btnType, subType=0);
                break;
            default: 
                btnType = "btnError";
                divType = document.getElementById("errorDiv");
                display(divType, btnType, subType=0);
            break; 
        }
    });} 
//end btn listeners

//general functions
function visible(targetBtn, divType) {
    console.log("bubble" + divType);
    for(let i = 0; i < btnEars.length; i++) {
        let tmp = btnEars[i].id;
        let divTmp = divType.id;
        if(tmp === targetBtn) {
            if(btnEars[i].style.display === "hidden") {
                btnEars[i].style.display = "block";
            }
            else {
                btnEars[i].style.display = "hidden";
            }
            if(divType.style.display === "hidden") {
            divType.style.display = "block";
            } else {
            divType.style.display = "hidden";
            }
        }
    }
}
function resetOmnes() {
    //TODO function to reset all divs to empty and hide, also buttons to visible
    //traverse all buttons and set to visible
    //traverse all divs and set to hidden and innerHTML = ""
}
function error() {
    return "There appears to have been an error. Please try again.";
}
function display(divType, btnType, subType) {
    let resultArray = [];
    console.log("bobble" + divType);
    visible(btnType, divType);
    switch(btnType) {
        case "btnFilter":
            resultArray = filter();
            break;
        case "btnMap":
            resultArray = map();
            break;
        case "btnSort":
            resultArray = sort(subType);
            break;
        case "btnReduce":
            resultArray = reduce(subType);
            break;
        case "btnLifeTime":
            resultArray = sort(subType);
            break;
        case "btnAlphaSort":
            resultArray = sort(subType);
            break;
        case "btnSum":
            resultArray = reduce(subType);
            console.log(resultArray);
            console.log(reduce(subType));
            break;
        case "btnParis":
            resultArray = parisBlvd();
            break;
        default:
            break;
    }
    for(let i = 0; i < resultArray.length; i++) {
        divType.innerHTML += resultArray[i];
    }
}
//end general functions
function filter() {
    let filterArray = []; //********
    for (let i = 0; i < inventors.length; i++) {
        console.log(inventors[i].year);
        if (inventors[i].year >= 1500 && inventors[i].year <= 1599) {
            filterArray.push(inventors[i]);
            console.log(inventors[i]);
        }
    }
    console.log(filterArray);
    return filterArray;
}
//array functions
function map() {
    let mapArray =  inventors.map(x => {return ("Name: " + x.first + " " + x.last) + " Birth: " + x.year + " Death: " + x.passed + "</br>";});
        //this might not be right, make sure to check me
    return mapArray;
}//this one works

function sort(sortType) {
    let sortArray = [];
    if (sortType === "sortOne") {//********
    //sort inventors by birthdate, oldest to youngest
        return inventors.sort((a, b) => b.year - a.year);
    }
    else if(sortType === "sortTwo") {//********
    //sort inventors by years lived
        return inventors.sort((a, b) => (a.year - a.passed) - (b.year - b.passed));      
    }
    else {
        //sortThree
            //sort people by last name
        return people.sort();
    } //this one works

//TODO sort function to return array sorting inventors by birthdate, oldest to youngest
}   
function reduce(reduceType) { //all works
    function add(accumulator, a) {
        return accumulator + a.passed - a.year;
    }
    let reduceSum = [];
    let carSum = 0;
    let bikeSum = 0;
    let vanSum = 0;
    let walkSum = 0;
    let truckSum = 0;

    if(reduceType === "reduceOne") {
         reduceSum = inventors.reduce(add, 0);  
    } //********
    else {
        for(let i = 0; i < data.length; i++) {
            console.log(data[i]);
            switch(data[i]) {
                case "car":
                    console.log(carSum);
                    carSum++;
                    break;
                case "bike":
                    bikeSum++;
                    break;
                case "van":
                    vanSum++;
                    break;
                case "walk": 
                    walkSum++;
                    break;
                case "truck":
                    truckSum++;
                    break;
                default: 
                    break;
            }
        }
        reduceSum.push("car: " + carSum);
        reduceSum.push(" bike: " + bikeSum);
        reduceSum.push(" van: " + vanSum);
        reduceSum.push(" truck: " + truckSum);
        reduceSum.push(" walk: " + walkSum);
    }//this one works
    return reduceSum;
}   
    //sum of inventors' years of life
    //count of data identical elements
//TODO function to return inventors' years of lif
function parisBlvd() {
//TODO function to return array of Paris in Paris containing 'de'
    let parisArray = [];
    for (let i = 0; i < paris.length; i++) {
        if (paris[i].includes("de", 0)) {
            parisArray.push(paris[i]);
        }
    }
    return parisArray;
}//this one works
//end array functions

//instructions
// 1. Array.prototype.filter() Filter the list of inventors for those who were born in the 1500's
// 2. Array.prototype.map() Give us an array of the inventors first and last names
// 3. Array.prototype.sort() Sort the inventors by birthdate, oldest to youngest
// 4. Array.prototype.reduce() How many years did all the inventors live all together?
// 5. Sort the inventors by years lived
// 6. create a list of Paris in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Paris_in_Paris  
// 7. sort Exercise Sort the people alphabetically by last name 
//8. Reduce Exercise Sum up the instances of each of these