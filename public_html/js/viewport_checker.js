$('.section-title').addClass('hide').each(function () {
    $('.section-title').viewportChecker({
        classToAdd: 'animated zoomIn', // Class to add to the elements when they are visible,
        classToRemove: 'hide', // Remove mixin hide which is read at the beginning of
        offset: 200 // delay
    });
});
$('*[data-animate]').addClass('hide').each(function () {
    $(this).viewportChecker({
        classToAdd: 'show animated ' + $(this).data('animate'), //mixin show + name class animate
        classToRemove: 'hide',
        offset: 200 
    })
});
