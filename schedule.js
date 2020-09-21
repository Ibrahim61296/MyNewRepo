function Table() {
    var propertyWidth = 600;
    var propertyHeight  = 500;
    var winLeft = ((screen.width - propertyWidth) / 2);
    var winTop = ((screen.height - propertyHeight) / 2);
    var winOptions = "width=600,height=500";
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    var openWin = window.open("././schedule.html", "CtrlWindow", winOptions);

 }


