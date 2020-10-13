// on refresh, event entered persists
// current day - id: currentDay, class: lead
// timeblock - class: container

function dayPlanner() {
    $(document).ready(function() {
        let m = moment();
        let dateFormat = m.format('dddd MMM Do');
        let currentTime = m.format('h:mma');
        let businessHours = [
            {
                id: '8',
                time: '8:00 AM'
            },
            {
                id: '9',
                time: '9:00 AM'
            },
            {
                id: '10',
                time: '10:00 AM'
            },
            {
                id: '11',
                time: '11:00 AM'
            },
            {
                id: '12',
                time: '12:00 PM'
            },
            {
                id: '13',
                time: '1:00 PM'
            },
            {
                id: '14',
                time: '2:00 PM'
            },
            {
                id: '15',
                time: '3:00 PM'
            },
            {
                id: '16',
                time: '4:00 PM'
            },
            {
                id: '17',
                time: '5:00 PM'
            }
        ]

        
    
        // display current day at top of the calendar
        function showCurrentDay() {
            $('#currentDay').html(`${dateFormat}`);
            $('#currentTime').html(`${currentTime}`);
        }
        
        showCurrentDay(); 

        // create timeblocks for standard business hours
        function timeBlock(){
            $.each(businessHours, function(i){
                var timeRow = $('<div>');
                    timeRow.attr('id', businessHours[i].id);
                    timeRow.addClass('row time-block');

                var timeCol = $('<div>');
                    timeCol.addClass('col-1 hour');
                    timeCol.text(businessHours[i].time);

                var inputEvent = $('<textarea>');
                    inputEvent.addClass('col-10 event');
                    inputEvent.attr('placeholder', 'Enter event details');

                var saveTxt = $('<i>');
                    saveTxt.addClass('far fa-save');

                var saveBtn = $('<button>');
                    saveBtn.addClass('col-1 saveBtn');
                    saveBtn.html('Save <i class="far fa-save"></i>');

                console.log(businessHours[i].time, businessHours[i].id);

                $(timeRow).append(timeCol).append(inputEvent).append(saveBtn);

                $('.container').append(timeRow);
            });
            
        }

        timeBlock(); 

        // color code if past, present, future
        function colorChange() {
            $('.time-block').each(function() {
                hour = m.hours();
                var thisHour = parseInt($(this).attr('id'));

                if(thisHour > hour) {
                    $(this).addClass('future');
                }
                else if(thisHour === hour) {
                    $(this).addClass('present');
                }
                else {
                    $(this).addClass('past'); 
                }
            });
            console.log(hour); 
        }

        colorChange(); 

        // user can input & save event in local storage
        $('.time-block').each(function() {
            var id = $(this).attr('id');
            var event = localStorage.getItem(id);

            if(event !== null) {
                $(this).children('.event').val(event)
            }
        });

        var saveBtn = $('.saveBtn');

        saveBtn.on('click', function() {
            var time = $(this).parent().attr('id');
            var event = $(this).siblings('.event').val();

            localStorage.setItem(time, event);
        })

    });

}

dayPlanner(); 