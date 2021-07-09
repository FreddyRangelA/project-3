var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
// button.on("click", runEnter);
form.on("submit", runEnter);
var predictedResult = '';
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputstr = d3.select("#input").property("value");
}