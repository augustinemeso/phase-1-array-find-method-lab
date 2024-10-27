// code your solution here
function superbowlWin(record) {
    // Use find() to search for a win ("W") in the record
    const winRecord = record.find(game => game.result === "W");
    
    // If a win is found, return the year, otherwise return undefined
    return winRecord ? winRecord.year : undefined;
}

// Example record data
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "2012", result: "W" },
    // Additional records can be added here
];

// Test the function
console.log(superbowlWin(record)); // Output: "2015"
