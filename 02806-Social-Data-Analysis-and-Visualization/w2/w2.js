var body = d3.select("body");
var p = body.append("p");
var p1 = body.select("p1");
p.text("Stuff")

function loadCsvDemo(){
  d3.csv("food.csv",function(fooddata){
    // calling data to external function
    //logToConsole(fooddata)
    // change p text defined up top

    //p.text(fooddata)

    // console super printing
    console.log(d3.selectAll("p"))

    // print each line
    body.selectAll("p")
      .data(fooddata)
      .enter()
      .append("p")
      .text(function(d){return d;})
  });

  function logToConsole(data){
    console.log(data);
  }
}
//loadCsvDemo()

function demoPrintArray(){
  var dataset = [1,2,3,4,6,7]
  var prefix = "next element: "

  function colorPicker(d){
    if (d%2==0){
      return "red";
    } else {
      return "black"
    }
  }

  p1.data(dataset)
    .enter()
    .append("p")
    .text(function(d){return prefix + d;})
    .style("color",function(d){return colorPicker(d)});
  p.text("red is even, black is odd")
}
//demoPrintArray()
