// IIFE - Immediatly Invoke Function Expression
// anonymous self executing function
(function () {

    function Start() {
        "use strict"

        //local variable
        let title = document.title;
       

        switch (title) {
            case "COMP125 - Home":
                let AboutButton = document.getElementById("AboutButton");
                AboutButton.addEventListener("click", function () {
                    console.log("Button was clicked");
                });
                break;
            case "COMP125 - About":
                break;
        }



        

        console.log("App Started!");
        console.log("---------------");
        console.log("Title: " + title);

    }

    window.onload = Start;
})();