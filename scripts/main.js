headerImg.css('opacity', '1');

setTimeout(() => {
    headerImg.css('margin', '0');
}, 100);
setTimeout(() => {
    for (let i = 0; i < headerTitle.length; i++) {
        (function (i) {
            setTimeout(function () {
                $(headerTitle[i]).css({ 'opacity': '1' });
            }, 200 * i);
        })(i);
    };
}, 500)

setTimeout(() => {
    headerDesc.css({ 'margin-bottom': '54px', 'opacity': '1' })
}, 800)

setTimeout(() => {
    headerBtn.css({ 'margin-bottom': '0', 'opacity': '1' })
}, 1200)

$('.header-btn').click(function () {
    modalCont.css('display', 'flex');
    setTimeout(() => {
        modalCont.css('opacity', '1');
        modalContent.css('opacity', '1');
        $('body').css('overflow', 'hidden');
        modalImg.css('left', '30%');
    }, 100)
    setTimeout(() => {
        modalImg.css('animation', 'none');
        setTimeout(() => {
            modalImg.css('transform', 'scale(0)');
            modalCont.css('opacity', '0');
            headerCont.css('opacity', '0');
            nav.css('opacity', '0');
            boobaCont.css('display', 'flex');
            setTimeout(() => {
                modalCont.css('display', 'none');
                headerCont.css('display', 'none');
                nav.css('display', 'none');
                boobaCont.css('opacity', '1');
            },700)
        }, 500);
    }, 6000)
})

boobaBtn.click(function() {
    final.css('display', 'flex');
    setTimeout(() => {
        final.css('opacity', '1');
        setTimeout(() => {
            boobaCont.css('display', 'none')
        }, 1010);
    }, 50);
})