function initMap() {
  var uluru = {lat: 43.026212, lng: 44.665644};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Владикавказ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Владикавказ</b>, Владикавка́з — город на юге России, в центральной части Северного Кавказа,'+ 
      'столица Республики Северная Осетия — Алания. Крупный промышленный, научный, культурный и образовательный центр.'+ 
      'В 1924—1934 гг. столица Ингушской автономной области.</b></p>' +
      
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}