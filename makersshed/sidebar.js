$(document).ready(function () {
    top_content = $('#projectbrief').offset().top;
    sections = document.getElementsByClassName('subtitles');
    top1 = sections[0].offsetTop;
    top2 = sections[1].offsetTop;
    top3 = sections[2].offsetTop;
    top4 = sections[3].offsetTop;
    top5 = sections[4].offsetTop;
    tops = [top_content, top1, top2, top3, top4, top5];
    topoflessons = document.getElementById('lessons').offsetTop;
    side = document.getElementsByClassName('sideitems');
    //console.log(tops);

    $(".sideitems").on("click", function (e) {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600);
    });

    function removeActive() {
        for (i = 0; i < 6; i++) {
            $(side[i]).removeClass('activesec');
        }
        $(side[0]).text('Overview');
        $(side[1]).text('Problem Statement');
        $(side[2]).text('Research');
        $(side[3]).text('Ideation');
        $(side[4]).text('Prototyping');
        $(side[5]).text('Branding');
    }
    $(window).scroll(function () {
        let delayTime = 0;
        let top_of_window = $(window).scrollTop();
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        $('.sideitems').each(function showSidebar() {
            if (bottom_of_window > top_content) {
                $(this).delay(delayTime).animate({ 'opacity': '1' }, 200);
                $(this).animate({ 'top': '0' }, 300, 'easeOutQuad');
                delayTime += 100;
            }

        });
        if (tops[0] < bottom_of_window && tops[1] + 300 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $(side[0]).addClass('activesec');
            $(side[0]).text('- Overview');
        }
        if (tops[1] + 300 < bottom_of_window && tops[2] + 300 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $(side[1]).addClass('activesec');
            $(side[1]).text('- Problem Statement');
        }
        if (tops[2] + 300 < bottom_of_window && tops[3] + 300 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $(side[2]).addClass('activesec');
            $(side[2]).text('- Research');
        }
        if (tops[3] + 300 < bottom_of_window && tops[4] + 300 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $(side[3]).addClass('activesec');
            $(side[3]).text('- Ideation');
        }
        if (tops[4] + 300 < bottom_of_window && tops[5] + 300 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $(side[4]).addClass('activesec');
            $(side[4]).text('- Prototyping');
        }
        if (tops[5] + 300 < bottom_of_window && topoflessons + 200 > bottom_of_window) {
            $('.sideitems').show();
            removeActive();

            $(side[5]).addClass('activesec');
            $(side[5]).text('- Branding');
        }
        if (topoflessons + 200 < bottom_of_window) {
            removeActive();

            $('.sideitems').hide();
        }
    });

});