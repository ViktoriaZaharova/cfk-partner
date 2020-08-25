$('.calculate-block .btn-danger').click(function (e) {
    e.preventDefault();

    $('.calculate-block').addClass('hidden');
});


//
$('.summ-range').slider({
    range: "min",
    min: 0,
    max: 20000000,
    value: 10000,
    slide: function (event, ui) {
        //Поле минимального значения
        $(".summ").val(ui.value);
    }
});
//Записываем значения ползунков в момент загрузки страницы
//То есть значения по умолчанию
$(".summ").val($(".summ-range").slider("value"));

$('.term-range').slider({
    range: "min",
    min: 21,
    max: 60,
    value: 21,
    slide: function (event, ui) {
        //Поле минимального значения
        $(".term").val(ui.value);
    }
});
//Записываем значения ползунков в момент загрузки страницы
//То есть значения по умолчанию
$(".term").val($(".term-range").slider("value"));

$('.btn-modal-quiz__close').click(function () {
   $('.popup-btn').fadeOut();
});

$('.btn-modal-quiz').magnificPopup({
    type: 'inline',
    midClick: true,

    callbacks: {
        open: function() {
            $('.quiz-slider').slick({
                slidesToShow: 1,
                fade: true,
                nextArrow: '<button type="button" class="slick-next btn-next"><span class="slick-next__text">Далее</span> <svg data-v-f63d6478="" fill="#fff" x="0px" y="0px" viewBox="0 0 31.49 31.49" xml:space="preserve" class=""><path data-v-f63d6478="" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path></svg></button>',
                prevArrow: '<button type="button" class="slick-prev btn-prev"><svg data-v-f63d6478="" fill="#4a505e" x="0px" y="0px" viewBox="0 0 31.49 31.49" xml:space="preserve" class="is-back"><path data-v-f63d6478="" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path></svg></button>',
                appendArrows: '.quiz-slider__nav',
                infinite: false,
            });
            function setProgress(index) {
                const calc = ((index) / ($slider.slick('getSlick').slideCount)) * 100;

                $progressBar
                    .css('width', calc + '%')
                    .attr('aria-valuenow', calc);

                $progressBarLabel.text(`${calc.toFixed()}%`);
            }

            const $slider = $('.quiz-slider');
            const $progressBar = $('.progress-bg');
            const $progressBarLabel = $('.percent-val');

            $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                setProgress(nextSlide);
            });


            setProgress(0);
        }
    }
});

$(".quiz-slider").on("afterChange", function (event) {
    if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
        $('.popup-quiz__modal-footer').hide();
    }
});




