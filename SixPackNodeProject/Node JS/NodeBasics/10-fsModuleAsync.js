const { readFile, writeFile } = require("fs");

console.log("Starting to read and write");
readFile("./content/first.txt", "utf8", (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `Here is the result : ${first}, ${second}`,
            { flag: "a" },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Done with this task", result);
            }
        );
    });
});

console.log("Starting the next one");
