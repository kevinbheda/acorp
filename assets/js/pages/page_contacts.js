var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 18.657739, 
				lng: 72.8714278, 
				zoom: 16
			  });
			  
			  var marker = map.addMarker({
				lat: 18.657743 , 
				lng: 72.872012, 
	            title: 'alibag ONE'
		       });
			});
        },

  //       //Panorama Map
  //       initPanorama: function () {
		//     var panorama;
		//     $(document).ready(function(){
		//       panorama = GMaps.createPanorama({
		//         el: '#panorama',
		//         lat : 18.6570867,
		//         lng : 72.8712317
		//       });
		//     });
		// }        

    };
}();