import * as $ from 'jquery';

window.jQuery = window.$ = $

$(function () {
    $('[data-toggle="popover"]').popover()
})
