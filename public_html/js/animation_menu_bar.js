// Animation upper menu and animation by scrolling
var lastId,
        topMenu = $("#main-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All elements of a list
        menuItems = topMenu.find("a"),
        // Anchors for menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

// Animations after clicking on the menu item
menuItems.click(function (e) {
    var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
});

// When you scroll
$(window).scroll(function () {
    // Download Items container
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Download id current position scroll
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Download the ID of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

});