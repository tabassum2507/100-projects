$(document).ready(function() {
    var gsearch = function() {
        var url = "https://www.google.com/search?q=" + document.getElementById('search').value;
        window.open(url, 'google');

    };
    var glucky = function() {
        var url = "https://www.google.com/search?q=" + document.getElementById('search').value + '&btnI';
    };
    $(".button1").click(gsearch);
    $(".button2").click(glucky);

    $("#search").keypress(function(e) {
        if (e.which == 13) {
            gsearch();
        }
    });
});