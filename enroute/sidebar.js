
$(document).ready(function () {

    let top_of_content = $('#projectbrief').offset().top;
    let top_of_research = $('#research').offset().top;
    let top_of_prototype = $('#prototype').offset().top;
    let top_of_animation = $('#animation').offset().top;
    topoflessons = document.getElementById('lessons').offsetTop;
    side = document.getElementsByClassName('sideitems');

    $(".sideitems").on("click", function (e) {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600);
    });

    function removeActive() {
        for (i = 0; i < 4; i++) {
            $(side[i]).removeClass('activesec');
        }
        $(side[0]).text('Overview');
        $(side[1]).text('Research & Ideation');
        $(side[2]).text('Sketch & Prototype');
        $(side[3]).text('Animation & Motion Design');
    }

    $(window).scroll(function () {
        let delayTime = 0;
        let top_of_window = $(window).scrollTop();
        let bottom_of_window = $(window).scrollTop() + $(window).height();

        $('.sideitems').each(function showSidebar() {
            if (bottom_of_window > top_of_content) {
                $(this).delay(delayTime).animate({ 'opacity': '1' }, 200);
                $(this).animate({ 'top': '0' }, 300, 'easeOutQuad');
                delayTime += 100;
            }
        });
        //console.log(top_of_content);
        //console.log(bottom_of_window);
        if (top_of_content < bottom_of_window && top_of_research + 300 > bottom_of_window) {
            //$('#side1').css({ 'color': '#777777', 'font-weight': '500' });
            $('.sideitems').show();
            removeActive();

            $('#side1').addClass('activesec')
            $('#side1').text('- Overview');
        }
        if (top_of_research + 300 < bottom_of_window && top_of_prototype + 300 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $('#side2').addClass('activesec')
            $('#side2').text('- Research & Ideation');
        }
        if (top_of_prototype + 300 < bottom_of_window && top_of_animation + 300 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $('#side3').addClass('activesec')
            $('#side3').text('- Sketch & Prototype');
        }
        if (top_of_animation + 300 < bottom_of_window && topoflessons + 200 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $('#side4').addClass('activesec')
            $('#side4').text('- Animation & Motion Design');
        }
        if (topoflessons + 200 < bottom_of_window) {
            removeActive();

            $('.sideitems').hide();
        }

    });

});