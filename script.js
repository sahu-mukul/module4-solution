

(function() {
    var names = ["Yam", "Joke", "Jan", "Jason", "Pam", "Franky", "Lana", "Pase", "Laura", "Jike"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            Speaker.speak(names[i]);
        } else {
            Speaker.speak(names[i]);
        }
    }
})();
