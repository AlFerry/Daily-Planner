
var today= moment();
var hour=today.format("H");
var container = $('.container');

$('#currentDay').text(today.format("dddd, MMMM Do"));
console.log(hour);


//for loop to loop through hours in work day (8am to 5pm in military time) to create timeblocks
for(var i=8; i<=17; i++){
    //Format hour displayed to be in standard time
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
    
    //Format color of timeblock to indicate if the hour is in the past, present, or future.
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

    //Populate textareas that have tasks saved to them.
    var savedTask = localStorage.getItem("hour-"+i);
    if(!savedTask){
        savedTask="";
    }
    //Use template literal to define timeblocks to be added to html page.
    var timeblockEl = `<div class="row time-block">
    <div class="col-md-1 hour">${hourData}</div>
    <textarea class="col-md-10 description ${blockTense}" id="hour-${i}">${savedTask}</textarea>
    <button class="btn saveBtn col-md-1">save</button></div>`
    
    container.append(timeblockEl);
    

}; 

//Save new tasks entered to planner to local storage when save button is clicked.
var newTask;

container.on("click", "button", function(e){
    var taskInput = this.parentElement.children[1].getAttribute("id");
    newTask = this.parentElement.children[1].value;
    localStorage.setItem(taskInput, newTask);
});
