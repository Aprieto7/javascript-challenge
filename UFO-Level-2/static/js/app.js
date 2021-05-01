// from data.js
var tableData = data;

// View table 
console.log(tableData);

var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
 });

var button = d3.select("#filter-btn")
button.on("click", () => {
    d3.event.preventDefault()
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value")
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    var filterData = tableData;
    if (inputValue){
        filterData = filterData.filter(row => row.datetime === inputValue);
    }
    if (inputCity){
        filterData = filterData.filter(row => row.city === inputCity);
    }
    if (inputState) {
        filterData = filterData.filter(row => row.state === inputState);
    }
    if (inputCountry){
        filterData = filterData.filter(row => row.country === inputCountry);
    }
    if (inputShape) {
        filterData = filterData.filter(row => row.shape === inputShape);
    }
    console.log(filterData);

    filterData.forEach(function(selection){
        console.log(selection)
        var row = tbody.append("tr");
        Object.entries(selection).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
