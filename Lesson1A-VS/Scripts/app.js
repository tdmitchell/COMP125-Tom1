// IIFE - Immediatly Invoke Function Expression
// anonymous self executing function
(function () {

    function Start() {
        //local variable
        var title = document.title;


        console.log("App Started!");
        console.log("---------------");
        console.log("Title: " + title);

    }

    window.onload = Start;
})();