$('.btn').click(function() {
    $('.box').fadeToggle();
})

$('.box').after('<p class="text_box">Этот пример сделан на jQuery</p>')

$('.btn').empty()
$('.btn').prepend("Сделай клик")
