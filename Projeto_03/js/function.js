window.onload = function(){
	var map;

	function initialize(){
       var mapProp = {
       	 center: new google.maps.LatLng(-27.648598, -48.577423),
       	 scrollWheel:false,
       	 zoom:12,
       	 MapTypeId:google.maps.MapTypeId.ROADMAP
       }

       map = new google.maps.Map(document.getElementById('mapa'),mapProp);
	}
    
    function addMarker(lat, long, icon, content){
    	var latLng = {'lat':lat, 'lng':long};

    	var marker = new google.maps.Marker({
    		position: latLng,
    		map:map,
    		icon:icon
    	});

    	var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
    	});

    	infoWindow.open(map, marker);
    }

	var conteudo = '<p style="color: black; font-size: 13px;"></p>';
	addMarker(-27.616637, -48.5923228,'', conteudo);
    

    setTimeout(function(){
       	map.panTo({'lat': -23.550520, 'lng': -46.633309});
       	map.setZoom();
    }, 4000);
}