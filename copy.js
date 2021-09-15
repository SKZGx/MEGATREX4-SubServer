jQuery(document).ready(function($){

    $('.text_copy_link').click(function() {
            var $text_copy = $(this);
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($text_copy.text()).select();
            document.execCommand("copy");
            $temp.remove();
            $('.copy_link_mess').fadeIn(100);
            setTimeout(function(){$('.copy_link_mess').fadeOut(100);},5000);
    });
    });