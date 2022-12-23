const fs = require("fs");

let md = `
    this is a new file
    ==================
    
    ES6 Template Strings are cool. They honor whitespace. 
    
    * Template Strings
    * Node file system
    * Readline CLIs
    
    
    `;

    fs.write("javascript.md", md.trim(), function(err) 
    if(err) {
        throw err;
    }
    fs.appendFileSync("javascript.md", "\n\n### Node.js Everyone"
    );
        console.log("Markdown Created");
    });