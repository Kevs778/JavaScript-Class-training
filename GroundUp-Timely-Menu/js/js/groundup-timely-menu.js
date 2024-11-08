// alert("Hello from JS");
let dateTime = new Date();
console.log('datat type of dateTime', typeof(dateTime))
let hour = dateTime.getHours() //get the current hour 0-23
//set the meal based on current hour
//hour = 17
let meal = ""
if(hour<11) {
meal = "Breakfast";
}
else if(hour < 15) {
    meal = "Lunch";
}
else {//hour is 16+
    meal = "dinner";
}
//make the tag as a concatenated string
// 'a href=" Breakfast.html">Breakfast</a>
let mealLink = '<a class="button" href="' + meal + '.html">' + meal + '</a>';
console.log(mealLink);
//output the meal link to the current menu div
let currentMenuDiv = document.getElementById('current-menu');
currentMenuDiv.innerHTML = mealLink


//function runs in dark mode checkbox is checked or unchecked
//get checkbox
let ckbox = document.querySelector('input')
//instruct the checkbox to call function whenever check box is checked or unchecked
ckbox.addEventListener('change', toggleDarkMode)
function toggleDarkMode() {
    //log whether or not checkbox is checked
    console.log(this.checked);//true or false
    // if check box is checked, use dark mode
    // else checkbox is unchecked, so switch to light mode
    if(this.checked) {
        document.body.style.backgroundColor = "";
        document.body.style.color = "#ffc793";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#3d1c07";
    }

}

//get the h3 in the hero it is for displaying the timely greeting
let heroh3 = document.querySelector('div h3');
heroh3.innerHTML = "";
let timeNow = dateTime.toLocaleTimeString('en-US');

if(hour < 12) {
    timelyGreeting = "Good Morning" 
} else if(hour <17) {
    timelyGreeting = "Good Afternoon!" 
}else if(hour <17) {
    timelyGreeting = "Good Evening!";
}
timelyGreeting += "<br>Time is now:" + timeNow;
heroh3.innerHTML = timelyGreeting;

//  make an array of the 25 food quotes copied from the internet:
let foodQuotes = [
"One cannot think well, love well, sleep well, if one has not dined well - Virginia Woolf",
"Let food be thy medicine and mdicine be thy food. - Hippocrates",
"People who love to eat are always the best people. - Julia Child",
"The only way to get rid of a temptation is to yield to it. - Oscar Wilde",
"Food is our common ground, a universal experience. - James Beard",
"Life is uncertain. Eat dessert first. - Ernestine Ulmer",
"All you need is love. But a little chocolate now and then doesn't hurt. - Charles M. Schulz",
"Tell me what you eat, and I will tell you what you are. - Jean Anthelme Brillat-Savarin",
"A party without cake is just a meeting. - Julia Child",
]

//log the 9th quote
console.log(foodQuotes[1]);
//log a random quote:
let r = Math.floor(Math.random() * foodQuotes.length);
console.log(r); 
console.log(foodQuotes[r]); //random quote
// output the random quote
let quoteH4 = document.querySelector('div h4');
quoteH4.textContent = foodQuotes[r];












