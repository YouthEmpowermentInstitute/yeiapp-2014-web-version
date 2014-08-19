$(document).bind("mobileinit", function () {
      $.mobile.defaultPageTransition = 'slide';
});

//take iOS7 transparent menubar into account
if (parseFloat(window.device.version) === 7.0) {
    $('[data-role="header"]').addClass("ios7");
    $('.ui-btn-left').addClass("ios7-header-button");
}