/**
 * Created by Alexander on 24.01.16.
 */
/*http://webdesignerwall.com/tutorials/cross-browser-html5-placeholder-text/comment-page-2*/
<script>
$(document).ready(function(){

    if(!Modernizr.input.placeholder){

    $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
    }
}).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
    }
}).blur();
$('[placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
        }
})
});

}

</script>