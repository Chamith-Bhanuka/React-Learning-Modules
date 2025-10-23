function openFile(callback) {
    setTimeout(()=>{
        console.log("File opened...!");
        callback();
    }, 3000);
}

function addSomething() {
    console.log("Something added to the file...!")
}

function removeSomething() {
    console.log("Something remove from the file...!");
}

openFile(addSomething);
// openFile(removeSomething);

setTimeout(doSomething, 3000);

function doSomething() {
    console.log("Do something after 3 seconds...!");
}