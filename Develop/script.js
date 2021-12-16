var today= moment();
var hour=today.format("H");
var container = $('.container');

$('#currentDay').text(today.format("dddd, MMMM Do"));
console.log(hour);

//localStorage.setItem('hour-8', /*"Hour 8 text value, need multi-line input capability"*/);

//for loop to loop through hours in work day
for(var i=8; i<=17; i++){
    var hourData;
        if(i<12){
            hourData = i + " AM";
        }
        else if(i==12){
            hourData = i + " PM";
        }
        else{
            var modTime = i-12;
            hourData = modTime + " PM";
        };

    var blockTense;
        if( i < hour){
            blockTense="past";
        } 
        else if(i == hour){
            blockTense="present";
        }
        else{
            blockTense="future";
        }
    var savedValueForHour = localStorage.getItem("hour-"+i);
    if(!savedValueForHour){
        savedValueForHour="";
    }
    var timeblockEl = `<div class="row time-block">
    <div class="col-md-1 hour">${hourData}</div>
    <textarea class="col-md-10 description ${blockTense}" id="hour-${i}">${savedValueForHour}</textarea>
    <button class="btn saveBtn col-md-1">save</button></div>`
    
    container.append(timeblockEl);
    

}; 

var newTask;

container.on("click", "button", function(event){
    var taskInput = $(this).siblings(".textarea").attr("id");
    console.log(taskInput);
    newTask = $(this).siblings(".textarea").val();
    localStorage.setItem(taskInput, newTask);
    console.log(newTask)
});
/*
    //save current hour to data attribute to be accessed from event listener
    //
    
   // var savedValueForHour = localStorage.getItem("hour-" + i);

// <textarea></> for text input*
$('.container').on('click','button',function(event)){
   $event.target.data()
});*/