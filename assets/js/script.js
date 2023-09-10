//naming variables
var currentDayEl = $("#currentDay");
// these are arrays
var inputEls = $("input");
var iconEls = $(".saveBtn");

var today = moment();
var todayHour = moment().format("H");

// on page load, sets time blocks' background colors
inputEls.each(function(i , input){
  $(input).addClass(setBGColor($(input).attr("id")))

})

// makes all icons clickable 
iconEls.each(function(i, icon){
  $(icon).on("click", setStorage)
})

function setBGColor(id){
  if (id == todayHour) {
    return "present";
  } else if (id < todayHour) {
    return "past";
  } else {
    return "future";
  }
}

// sets up local storage
function setStorage(event){
  var input = event.currentTarget.previousElementSibling.firstElementChild.value; //get correct text 
  var id = event.currentTarget.previousElementSibling.firstElementChild.id; //gets the id of needed element
  localStorage.setItem(id + "-text", input);

}

// on refresh, get from local storage and show it on input field
function renderStorage(){
  var times = ["09", "10", "11", "12", "13" , "14", "15", "16", "17"];
  times.forEach(function(timeItems){
    var savedText = localStorage.getItem(timeItems + "-text");
    $("#"+timeItems).val(savedText);
  })

}

//Sets the date
currentDayEl.text(today.format("dddd, MMMM Do"));

renderStorage();