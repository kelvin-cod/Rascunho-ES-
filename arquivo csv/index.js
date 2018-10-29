var csv = require("fast-csv");

csv
    .fromPath("csvdiscreta.csv")
    .on("data", function (data) {
        console.log(data);
    })
    .on("end", function () {
        console.log("done");
    });

var origin = "casa";