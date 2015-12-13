var clock;

$(document).ready(function() {

    // Flipclock Countdown
	var clock;

	clock = $('.your-clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        // callbacks: {
        // 	stop: function() {
        // 		$('.message').html('The clock has stopped!')
        // 	}
        // }
    });
		    
    clock.setTime(4392309);
    clock.setCountdown(true);
    clock.start();

    // Hide & Show CBU Info
    $('.datos').hide();
    $( "#quiero-ayudar" ).click(function() {
        $(this).prev('.datos').fadeIn(1000);
        $(this).addClass('pressed');
        $(this).text('Muchas gracias!').append('<i class="fa fa-thumbs-o-up"></i>');
        return false;
    });

    // Magnific Popup
    $('.galeria-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled:true
        },
        // other options
    });

    $('.flip-clock-divider.days .flip-clock-label').text('Dias');
    $('.flip-clock-divider.hours .flip-clock-label').text('Horas');
    $('.flip-clock-divider.minutes .flip-clock-label').text('Minutos');
    $('.flip-clock-divider.seconds .flip-clock-label').text('Segundos');

});