

// color code if past, present, future
// click on time block
// user can input event
// user can save event in local storage
// on refresh, event entered persists

// current day - id: currentDay, class: lead

// timeblock - class: container

function dayPlanner() {
    $(document).ready(function() {
        let dateFormat = moment().format('LLLL');
        let businessHours = [
            {
                id: 'eight',
                time: '8:00 AM'
            },
            {
                id: 'nine',
                time: '9:00 AM'
            },
            {
                id: 'ten',
                time: '10:00 AM'
            },
            {
                id: 'eleven',
                time: '11:00 AM'
            },
            {
                id: 'twelve',
                time: '12:00 PM'
            },
            {
                id: 'one',
                time: '1:00 PM'
            },
            {
                id: 'two',
                time: '2:00 PM'
            },
            {
                id: 'three',
                time: '3:00 PM'
            },
            {
                id: 'four',
                time: '4:00 PM'
            },
            {
                id: 'five',
                time: '5:00 PM'
            }
        ]

        
    
        // display current day at top of the calendar
        function showCurrentDay() {
            let currentDay = $('#currentDay').text(dateFormat);
            return currentDay;
        }
        
        showCurrentDay(); 

        // create timeblocks for standard business hours
        function timeBlock(){
            $.each(businessHours, function(i, val){
                var timeRow = $('<div>');
                    timeRow.addClass('row');

                var timeCol = $('<textarea>');
                    timeCol.addClass('hour');
                    timeCol.text(businessHours[i].time);

                var inputEvent = $('<input>')
                    inputEvent.attr('id', businessHours[i].id); 
                    inputEvent.addClass('time-block');
                    inputEvent.attr('placeholder', 'Enter event details');

                var saveBtn = $('<button>')
                    saveBtn.attr('id', businessHours[i].id);
                    saveBtn.addClass('btn btn-primary saveBtn');
                    saveBtn.text('Save');

                console.log(businessHours[i].time, businessHours[i].id);

                $(timeRow).append(timeCol).append(inputEvent).append(saveBtn);

                $('.container').append(timeRow);
            });
        }

        timeBlock(); 

    });

}

dayPlanner(); 