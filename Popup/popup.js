document.addEventListener('DOMContentLoaded', (event) => {
    startMonitoring.addEventListener('click', () => {
        if(!($('#refresh').val()<=60 && $('#refresh').val()>=5)){
            $("#refreshError").removeClass('d-none');
            return;
        }

        var date = new Date();
        var startTimeMillis = date.getTime();
        var startTime = moment(startTimeMillis,"x").format("DD-MM-YY HH:MM A");
        $('#monitorStartedText').text("Monitoring started at : "+startTime);
        $('#monitorStartedText').removeClass('d-none');
    });
});
