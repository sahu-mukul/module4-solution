(function(window) {
    var Speaker = new Object();
    var speakWord = "Hello";
    Speaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.Speaker = Speaker;
})(window);
