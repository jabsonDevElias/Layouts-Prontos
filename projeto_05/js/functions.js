$(function(){

  var currentValue = 0;
  var isDrag = false;
  var preco_maximo = 70000;
  var preco_atual = 0;

  $('.pointer-barra').mousedown(function(){
     
     isDrag = true;

  });

  $(document).mouseup(function(){

     isDrag = false;
  });

  $('.barra-preco').mousemove(function(e){

     if(isDrag){
      disabledTextSelection();
        var elBase = $(this);
        var mouseX = e.pageX - elBase.offset().left;
        console.log(mouseX);
        if(mouseX < 0)
          mouseX = 0;
        if(mouseX > elBase.width())
          mouseX = elBase.width();

        $('.pointer-barra').css('left',(mouseX-13)+'px');
        var percent = (mouseX / elBase.width()) * 100;
        $('.barra-preco-fill').css('width',percent+'%');

        preco_atual = (percent/100) * preco_maximo;
        preco_atual = formatarPreco(preco_atual);
        $('.preco_pesquisa').html('R$'+preco_atual);
     }

  });

  function disabledTextSelection(){
    $("body").css('-webkit-user-select','none');
    $("body").css('-moz-user-select','none');
    $("body").css('-ms-user-select','none');
    $("body").css('-o-user-select','none');
    $("body").css('user-select','none');
  }

  function enabledTextSelection(){
    $("body").css('-webkit-user-select','auto');
    $("body").css('-moz-user-select','auto');
    $("body").css('-ms-user-select','auto');
    $("body").css('-o-user-select','auto');
    $("body").css('user-select','auto');
  }

 function formatarPreco(preco_atual){

  preco_atual = preco_atual.toFixed(2);
  preco_arr = preco_atual.split('.');

  var novo_preco = formatarTotal(preco_arr);

  return novo_preco;

 }

 function formatarTotal(preco_arr){
  if(preco_arr[1] == '00'){
     return preco_arr[0]+','+preco_arr[1];
  }else if(preco_arr[1] < 10000){  
      return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1];
    }else{
      return preco_arr[0][0]+'.'+preco_arr[0][1].substr(2,preco_arr[0].length)+','+preco_arr[1];
    }
  }

  var imgShow = 3;
  var minIndex = imgShow - 1;

  var maxIndex = Math.ceil($('.mini-img-wraper').length/3);
  var curIndex = 0;

  initSlider();

  function initSlider(){

      var amt = $('.mini-img-wraper').length * 33.3; 
      var elScroll = $('.nav-galeria-wraper');
      var enSingle = $('.mini-img-wraper');

      elScroll.css('width',amt+'%');
      elSingle.css('width', 33.3 * (100/amt)+'%');

  }
 


});