var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
// button.on("click", runEnter);
form.on("submit", runEnter);

var predictedResult = '';
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputstr = d3.select("#comments").property("value");
    d3.json(`/predict/${inputstr}`).then(d => {
      console.log(d);
      if (d.outcome == 0) {
        d==("Neutral");
        console.log("neutral");

      }
      else if (d==1){
        d=="Negative ";
        
      }else{
        d=="Positive";
        
      }

      d3.select("#result").text(`the model predicts that your comment is: ${d} of Trump`);
      console.log("cliecked")
      predictedResult = d;
  });
}

function correct() {
  d3.event.preventDefault();
  var ans=["negative", "positive"] 
  outcome = ans.indexOf(predictedResult)
  updateData(outcome)
}

function wrong() {
  d3.event.preventDefault();
  var ans=[ "positive","negative"] 
  outcome = ans.indexOf(predictedResult)
  updateData(outcome)
}

function updateData(outcome) {

  var inputstr = d3.select("#input").property("value");

  d3.json(`/predict/${inputstr}`).then(d=>console.log(d));

}

d3.select('#yes').on("click",correct)
d3.select('#no').on("click",wrong)