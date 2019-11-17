$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $(".card").hover(
        function () {
            $(this).addClass('shadow-lg');
            $(this).addClass('move-up');
        }, function () {
            $(this).removeClass('move-up');
            $(this).removeClass('shadow-lg');
        }
    );

    // document ready  
});