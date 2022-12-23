const fs = require("fs");

if(fs.existsSync("Your-Files-Here")) {
    console.log("already there!")
} else {
    fs.mkdir("Your-Files-Here", function(err) {
        if(err) {
            console.log(`ERROR: ${err}`);
        } else {
            console.log("directory created");
        }
    });
}

