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
      if (d === 0) {
        resolved=String("Neutral");
        //console.log("neutral");
        //console.log(`${d} is now neutral`);

      }
      else if (d===1){
        resolved=String("Positive");
        
      }else{
        resolved=String("Negative");
        
      }

      d3.select("#result").text(`the model predicts that your comment is: ${resolved} of Trump`);
      
      predictedResult = d;
  });
}

function correct() {
  var inputstr = d3.select("#comments").property("value");
  fetch(`/adddata/${inputstr}/${predictedResult}`).then(d => {
  console.log(d)
    if (d.ok) {alert("Thanks for your feedback")} 
    else {  alert("Oops!")}  
  });
  



  // d3.select("div.parent").html("");
  // d3.select("#wrongAnswer").html("");
  // d3.select("table").html("");
  //d3.event.preventDefault();
  //var ans=["negative", "positive"] 
  //outcome = ans.indexOf(predictedResult)
  //updateData(outcome)
}

function wrong() {
  //d3.event.preventDefault();
  //var ans=[ "positive","negative"] 
  //outcome = ans.indexOf(predictedResult)
  //updateData(outcome)
  
  d3.select("#wrongAnswer").html("");
  d3.select("table").html("");
  d3.select("#wrongAnswer").text('Please indicate the correct sentiment.')
  var sentimentSelection = ['Negative','Positive','Neutral'];
  var ul=d3.select('table').append('ul');

  ul.selectAll('li').data(sentimentSelection).enter().append('div').append('input').attr('radio').append('label');

}

function updateData(outcome) {

  var inputstr = d3.select("#input").property("value");

  d3.json(`/predict/${inputstr}`).then(d=>console.log(d));

}

d3.select('#yes').on("click",correct)
d3.select('#no').on("click",wrong)