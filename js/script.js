var pathname = window.location.pathname;

if(pathname.indexOf("index") > -1){
    var next = "customer.html";
    var previous = "team.html";
}
else if(pathname.indexOf("customer") > -1){
    var next = "mission.html";
    var previous = "index.html";
}
else if(pathname.indexOf("mission") > -1){
    var next = "app.html";
    var previous = "customer.html";
}
else if(pathname.indexOf("app") > -1){
    var next = "team.html";
    var previous = "mission.html";
}
else if(pathname.indexOf("team") > -1){
    var next = "index.html";
    var previous = "app.html";
}



$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        window.location.href = previous;    
        break;

        case 38: // up
        break;

        case 39: // right
        window.location.href = next;  
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});