$(document).ready(function () {
    let UIsecondsBetweenWelds = $('#secondsBetweenWelds');
    let UIsecondsPerMile = $('#seconds_per_mile');
    let UIminutesPerMile = $('#minutes_per_mile');
    let UImilesPerHour = $('#miles_per_hour');
    let UImilesToNextSite = $('#milesToNextSite');
    let UIminutes_to_next_site = $('#minutes_to_next_site');
    let UImilesOfRun = $('#milesOfRun');
    let UIetaHours = $('#eta_hours');
    let UIlaunchTime = $('#launch_time');
    let UIarrivalTime = $('#arrival_time');
    let UIsubmitBtn = $();
    let UIdataCalculation = $();
    let quote = 'We are not the highest version of ourselves which we can imagine. We are the lowest version of ourselves which we can accept.';
    let errors = $('.helper-text');


    $('button').click(function (e) {
        e.preventDefault();
        validateForm();
        calculateSecondsPerMile();
        calculateMilesPerHour();
        calculateMinutesPerMile();
        calculateMinutesToNextSite();
        calculateETAHRS();
        calculateArrivalTime();
    });

    function checkVal() {
        if (UIsecondsBetweenWelds.val() === "" && UImilesToNextSite.val() === "" && UImilesOfRun.val() === "" && UIlaunchTime.val() === "") {
            console.log('Please Enter a number...');
        } else {
            return true;
        }
    }

    function checkIfNum() {
        if (isNaN(UIsecondsBetweenWelds.val()) && isNaN(UImilesToNextSite.val()) && isNaN(UImilesOfRun.val()) && isNaN(UIlaunchTime.val())) {
            console.log('Must enter a number...');
        } else {
            return true;
        }

    }

    function validateForm() {
        if (checkVal() && checkIfNum()) {
            errors.remove();
            $('.data-output').show();
            $('button').prop("disabled", true);
        } else {
            errors.text('Enter numbers');
        }
    }

    const lengthOfPipe = 40;
    const mile = 5280;
    let secPerMile;
    let minPerMile;
    let milesPerHour;
    let minToNextSite;
    let calcTime;
    let eta_hours;

    function calculateSecondsPerMile() {
        secPerMile = UIsecondsBetweenWelds.val() / lengthOfPipe * mile;
        UIsecondsPerMile.val(secPerMile.toFixed(0) + ' Seconds Per Mile');
        console.log(secPerMile.toFixed(0));
    }

    function calculateMilesPerHour() {
        // 60 / secPerMile * 60
        milesPerHour = 60 / secPerMile * 60;
        UImilesPerHour.val(milesPerHour.toFixed(1) + ' Miles Per Hour');
        console.log(milesPerHour.toFixed(1));
    }


    function calculateMinutesPerMile() {
        // 60 / MPH
        minPerMile = 60 / milesPerHour;
        UIminutesPerMile.val(Math.round(minPerMile) + ' Minutes Per Mile');
        console.log(minPerMile.toFixed(1));
    }

    function calculateMinutesToNextSite() {
        // milesToNextSite / MPH * 60
        minToNextSite = UImilesToNextSite.val() / milesPerHour * 60;
        UIminutes_to_next_site.val(minToNextSite.toFixed(1) + ' Minutes To Next Site');
        console.log(minToNextSite);
    }

    function calculateArrivalTime() {
        calcTime = parseFloat(UIlaunchTime.val()) + parseFloat(UIetaHours.val());
        UIarrivalTime.val(calcTime + ' Arrival Time');
        console.log(calcTime);
    }

    function calculateETAHRS() {
        eta_hours = UImilesOfRun.val() / milesPerHour;
        UIetaHours.val(eta_hours.toFixed(2) + ' ETA(HOURS)');
    }


});