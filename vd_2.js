ymaps.ready(init);function init(){var myMap=new ymaps.Map('map',{center:[55.653721,37.851303],zoom:13,controls:[]},{searchControlProvider:'yandex#search'});var placemark=new ymaps.Placemark(myMap.getCenter(),{balloonContentHeader:'<a href = "" target="_blank">Выставочный дом Opti<br/> в Москве</a><br>'+'<span class="description">Общая площадь: 127 м²</span>',balloonContentBody:'<img src="https://static.tildacdn.com/tild3264-6135-4734-b266-306539306234/d2.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Выставочный дом Opti 127 м² в Москве"> <br/> '+'<b><a href = "" target="_blank" style="font-size: 14px">➥ <u>Записаться на выезд</u></a></b>',balloonContentFooter:'',hintContent:'Opti 127 м²'},{iconLayout:'default#image',iconImageHref:'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',iconImageSize:[20,20],iconImageOffset:[0,0],hideIconOnBalloonOpen:!1,balloonCloseButton:!0,balloonOffset:[0,-0]});myMap.geoObjects.add(placemark);placemark.balloon.open()}
