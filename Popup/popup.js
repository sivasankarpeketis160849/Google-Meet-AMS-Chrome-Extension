document.addEventListener('DOMContentLoaded', (event) => {
    
    // if user clicked on "Start Monitoring"
    startMonitoring.addEventListener('click', () => {

        if(!($("#refreshError").hasClass('d-none'))){
            $("#refreshError").addClass('d-none');
        }
        if(!($("#monitoringSuccess").hasClass('d-none'))){
            $("#monitoringSuccess").addClass('d-none');
            
        }

        if(!($('#refresh').val()<=60 && $('#refresh').val()>=5)){
            $("#refreshError").removeClass('d-none');
            return;
        }

        $('#monitoringSuccess').removeClass('d-none');
        var date = new Date();
        var startTimeMillis = date.getTime();
        var startTime = moment(startTimeMillis,"x").format("DD-MM-YY HH:MM A");
        $('#monitorStartedText').text("Monitoring started at : "+startTime);
        $('#monitorStartedText').removeClass('d-none');
    });
});
