// from data.js
var tableData = data;

// View table 
console.log(tableData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
      });
 });

var button = d3.select("filter-btn")
button.on("click", function() {
    tbody.html("");

    var inputElement = d3.select("datetime");
    var inputValue = inputElement.property("value")
    console.log(inputValue);

    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filterData);
});
