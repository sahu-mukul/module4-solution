(function(window) {
    var Speaker = new Object();
    var speakWord = "Good Bye";
    Speaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.Speaker = Speaker;
})(window);
