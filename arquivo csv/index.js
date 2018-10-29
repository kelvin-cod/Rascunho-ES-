var fileStream = fs.createReadStream("csvdiscreta.csv"),
    parser = fastCsv();

fileStream
    .on("readable", function () {
        var data;
        while ((data = fileStream.read()) !== null) {
            parser.write(data);
        }
    })
    .on("end", function () {
        parser.end();
    });

parser
    .on("readable", function () {
        var data;
        while ((data = parser.read()) !== null) {
            console.log(data);
        }
    })
    .on("end", function () {
        console.log("done");
    });