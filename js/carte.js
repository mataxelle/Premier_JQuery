$(function() {

    var $message = $('.message_list');
    $message.hide();

    var $listButton = $('.message_section--btn');
    $listButton.on('click',function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.replaceWith($message.show());
    });

    
});