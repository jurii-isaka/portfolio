//ページの読み込みが完了したらアニメーションを非表示
// $(window).on('load',function(){
//  $('.loader-wrap').fadeOut();
//  $('#container').fadeIn();
// });

//ページの読み込みが完了して、3秒後にアニメーションを非表示にする
setTimeout(() =>{
    $('.img-wrap').fadeOut();
    $('#top_container').fadeIn();
    $('header').fadeIn();
    $('top_footer').fadeIn();

},1800);