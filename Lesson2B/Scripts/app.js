// IIFE - Immediatly Invoke Function Expression
// anonymous self executing function
(function () {
    "use strict"

    //About Button Click Event Handler
    function AboutButtonClick() {
        console.log("Button was clicked!");
    }

    function AboutButtonOver(event) {
        //event.currentTarget.style.visibility = "hidden";
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(e) {
        e.currentTarget.style.opacity = 1;

    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";        /*CHANGE THE TEXT OF AN HTML ELEMENT*/


        //About Button Event Listeners
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function ReturnPI() {
        return Math.PI;
    }

    function AboutContent() {
        let MyNumber = ReturnPI();
        console.log("PI = " + MyNumber);

        ////CHANGE A CONTENT OF A PARAGRAPH - 1ST OPTION
        //let paragraph = document.getElementById("paragraph1");
        //paragraph1.innerText = "1st option to change the paragraph!"

        //CHANGE A CONTENT OF A PARAGRAPH - 2nd OPTION
        let paragraph = document.getElementById("paragraph1");
        let newParagraph = "2nd option to change the paragraph!"
        paragraph1.textContent = newParagraph        /*CHANGE THE TEXT OF AN HTML ELEMENT*/
        
    }


    function Start() {
        //local variable
        let title = document.title;

        console.log("App Started!");
        console.log("---------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":                
                HomeContent();
                break;
            case "COMP125 - About":
                AboutContent();
                break;
        }
    }

    //Add the Event Listener for Loading the page - BEST WAY
    window.addEventListener("load", Start);
})();