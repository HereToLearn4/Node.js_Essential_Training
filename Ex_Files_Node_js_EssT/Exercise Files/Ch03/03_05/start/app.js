const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("cusotmEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "that's pretty cool", Jack);

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if(input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.emit();

        emitter.emit(
            "customEvent",
            data.toString().trim(),
            "terminal"
            );
    });
