
                        // The following example creates complex markers to indicate beaches near
                        // Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
                        // to the base of the flagpole.

                        function initMap() {
                            var map = new google.maps.Map(document.getElementById('map'), {
                                zoom: 11,
                                center: {
                                    lat: 4.6291542,
                                    lng: -74.1360877
                                }
                            });

                            setMarkers(map);
                        }
                        /*
                          soacha 4.582545, -74.215112
                            regional centro 4.605348, -74.069820
 
                            zona franca 4.671039, -74.165540
                            chapinero 4.651327, -74.064008*/
                        // Data for the markers consisting of a name, a LatLng and a zIndex for the
                        // order in which these markers should display on top of each other.
                        var beaches = [
                            ['Regional Soacha', 4.582545, -74.215112, 4],
                            ['Regional Centro', 4.605348, -74.069820, 5],
                       
                            ['Regional Chapinero', 4.651327, -74.064008, 2],

                        ];

                        function setMarkers(map) {
                            // Adds markers to the map.

                            // Marker sizes are expressed as a Size of X,Y where the origin of the image
                            // (0,0) is located in the top left of the image.

                            // Origins, anchor positions and coordinates of the marker increase in the X
                            // direction to the right and in the Y direction down.

                            // Shapes define the clickable region of the icon. The type defines an HTML
                            // <area> element 'poly' which traces out a polygon as a series of X,Y points.
                            // The final coordinate closes the poly by connecting to the first coordinate.
                            
                            for (var i = 0; i < beaches.length; i++) {
                                var beach = beaches[i];
                                var marker = new google.maps.Marker({
                                    position: {
                                        lat: beach[1],
                                        lng: beach[2],
                                    
                                    },
                                    icon: 'images/logo/map.png',
                                    map: map,

                                   
                                });
                            }
                        }

          
                    //Load the API from the specified URL
    //* The async attribute allows the browser to render the page while the API loads
   // * The key parameter will contain your own API key (which is not needed for this tutorial)
   // * The callback parameter executes the initMap() function
   /*

   function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: -25.363882, lng: 131.044922 }
    });

    var bounds = {
      north: -25.363882,
      south: -31.203405,
      east: 131.044922,
      west: 125.244141
    };

    // Display the area between the location southWest and northEast.
    map.fitBounds(bounds);

    // Add 5 markers to map at random locations.
    // For each of these markers, give them a title with their index, and when
    // they are clicked they should open an infowindow with text from a secret
    // message.
    var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
    var lngSpan = bounds.east - bounds.west;
    var latSpan = bounds.north - bounds.south;
    for (var i = 0; i < secretMessages.length; ++i) {
      var marker = new google.maps.Marker({
        position: {
          lat: bounds.south + latSpan * Math.random(),
          lng: bounds.west + lngSpan * Math.random()
        },
        map: map
      });
      attachSecretMessage(marker, secretMessages[i]);
    }
  }

  // Attaches an info window to a marker with the provided message. When the
  // marker is clicked, the info window will open with the secret message.
  function attachSecretMessage(marker, secretMessage) {
    var infowindow = new google.maps.InfoWindow({
      content: secretMessage
    });

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);
    });
  }*/