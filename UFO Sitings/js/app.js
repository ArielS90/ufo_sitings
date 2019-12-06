// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get references for the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// Add an event listener to the search button, call handle searchbutton click when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// add an event listener to the reset button, called handleResetButtonClick when clicked
$resetBtn.addEventListener("click", handleResetButtonClick);

// Create a copy of the data
var tabledata = data;

// build table without filtered data
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
        // get current address object and fields
        var address = tableData[i];
        console.log(address)
        var fields = Object.keys(address);
        // Create new row in tbody, set index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            // for each field in address object, creat new cell and set inner text to be current value in the address field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        }
    }
}

// build search table for filtered data
function handleSearchButtonClick() {
    var filterDate = $dateInput.value;

    // filter on date
    if (filterDate != "") {
        tabledata = data.filter(function (address) {
            var addressDate = address.datetime;
            return addressDate === filterDate;
        });
    }
    else { tableData };

    renderTable();
}
// clear all fields
function handleResetButtonClick(){
    renderTable();
}

// Render the table for the first time when the page loads
renderTable();