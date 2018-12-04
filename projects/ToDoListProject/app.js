function sayHiLater(){
    var greeting = "Hi...";
    
    setTimeout(function(){  // example of a callback function
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// CALLBACK FUNCTION:
    // A function you give to another function, 
    //to be run when the other function is finished.
    // So the function yo call(i.e. invoke), 'calls back'
    // by calling the function you gave it when it finishes.

    function tellMeWhenDone(callback){
        var a = 1000; // some work
        var b = 2000; // some work

        callback(); //the 'callback' it runs the funtion I give it!

    }

    tellMeWhenDone(function(){
        console.log("I'm done...");
    });
    tellMeWhenDone(function(){
        console.log("All done...");
    });