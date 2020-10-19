// var currentDay = $("#currentDay");
updateTime();

setInterval(updateTime,1000);

function updateTime(){
    $("#currentDay").html(moment().format("dddd, MMMM Do") + "<br><br>" + moment().format("LTS"));
}


// function setTime(){

//     currentDay.text(currentDate);
//     currentDay.append("<br>");
//     currentDay.text(currentTime);
//     currentDay
    
//     currentDay.text()

// }

// var currentDateTime = moment();
var currentTime = moment();
var startTime = 9;
var endTime = 18;

// var setTime = moment().hour(9).minute(0);

// console.log(setTime.format("HH:mm"));


// var randomTime = moment();
// randomTime = randomTime.format("HH:mm");

// currentDay.text(currentDateTime.format("[Today is ] dddd, MMMM Do <br><br> LTS"));



// var test = moment("2010-10-20").isSame("2009-12-31");
// console.log(test);
// var test2 = moment("2010-10-20").isSame("2010-10-20");
// console.log(test2);

// var hello = moment(currentDateTime.format("YYYY-MM-DD HH:mm")).isSame("21","hour");

// console.log(currentDateTime.format("LT"));

// var hello2 = $("<p>");
// hello2.attr("id","hour-"+9);
// $(".container").append(hello2);
// $("#hour-9").append("shit");



// console.log(hello2);

// var hello3 = $("#hour-10");
// $("#hour-10").append("fuck");
// console.log(hello3);
// console.log(currentDateTime.format("YYYY-MM-DD HH:mm"));

for(var i=startTime; i<endTime; i++) {
    //creating div row
    var divRow = $("<div>");
    divRow.addClass("row time-block");
    divRow.attr("id","hour-"+i);

    // creating div cloumn
    var divCol = $("<div>");
    var setTime = moment().hour(i).minute(0);
    divCol.addClass("col-md-1 hour");
    divCol.append(setTime.format("LT"));
    
    // creating text area
    var textArea = $("<textarea>");
    textArea.addClass("col-md-10 description");
    // textArea.attr("id","hour-"+i);
    textArea.attr("data-time-text", "hour-"+i);

    // creating button
    var btn = $("<button>");
    btn.addClass("btn saveBtn col-md-1");
    btn.attr("data-time-btn","hour-"+i);

    // creating save icon
    var icon = $("<i>");
    icon.addClass("fas fa-save");

    // appending everything together
    divRow.append(divCol);
    divRow.append(textArea);
    btn.append(icon);
    divRow.append(btn);

    // appending the row to the container, displays what was created above
    $(".container").append(divRow);

    // checks to see what blocks are past present or future
    if(parseInt(setTime.format("H")) < parseInt(currentTime.format("H"))) {
        divRow.addClass("past");
    }
    else if(parseInt(setTime.format("H")) == parseInt(currentTime.format("H"))) {
        divRow.addClass("present");
    }
    else {
        divRow.addClass("future");
    }

    // console.log(setTime.format("H"));
    // console.log(currentTime.format("H"));
    // console.log(parseInt(setTime.format("H")) > parseInt(currentTime.format("H")));
    // console.log(typeof(currentTime))
    // console.log(typeof(setTime.format("HH")))
    // console.log(moment(currentTime).isSame(setTime.format("HH:mm"),"hour"));
}

$(".btn").on("click", function(){
    var textArea = $(this).parent().find("textarea");
    var key = textArea.attr("data-time-text");
    var value = textArea.val();
    localStorage.setItem(key, value);

    console.log(value);
    // var clickedBtnId = $(this).attr("data-time-btn");
    // // var textAreaId = $()
    // console.log(clickedBtnId);
    // getValue(clickedBtnId)

    // for(i=startTime; i < endTime; i++){
    // }


    // alert(clickedBtn);
    // var shit = $("textarea");
    // console.log(shit);

    // console.log($(".description #hour-13"));

    // var keyNote = $(this).attr("data-time-btn");
    // var note = $(".description").attr("data-time-text");
    // localStorage.setItem(keyNote, note);
})
var allDivs = $(".time-block");
for(var i = 0; i < allDivs.length; i++){
    var id = allDivs[i].id;
    var savedValue = localStorage.getItem(id);
    var textArea = allDivs[i].querySelector("textarea");
    textArea.innerHTML = savedValue;
    console.log(textArea);
    // allDivs[i].find("textarea").text(savedValue);
}


// function getValue(textAreaId){
//     var selector = "textarea[data-time-text = " + textAreaId + "]";
//     var selectedTextArea = $(selector);
//     var textAreaValue = selectedTextArea.val();
//     console.log(textAreaValue);
//     localStorage.setItem(textAreaId, textAreaValue);
//     // console.log($("textarea[data-time-text = " + textAreaId + "]"));
//     // console.log($("#" + textAreaId).val());
// }