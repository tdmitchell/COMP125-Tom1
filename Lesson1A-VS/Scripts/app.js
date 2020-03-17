// IIFE - Immediatly Invoke Function Expression
(function () {
    function Start() {
        console.log("App Started!");
        console.info("---------------");
        console.warn("This is an error!");

    }

    window.onload = Start;
})();