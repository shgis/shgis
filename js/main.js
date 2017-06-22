var map;
var Singapore = {lat: 1.355, lng: 103.811};

var gsheet_key_chtemple_current ="1AX53v8gG-UaI-YjfoQISIFWzey7Fw8p0gWXH3C2P3v4";


function initMap() {
    map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 12,
        center: Singapore,
        mapTypeId: 'terrain'
    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');

    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    document.getElementsByTagName('head')[0].appendChild(script);
  
    
    cm_getJSON();
  
  
}
// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var marker = new google.maps.Marker({position: latLng, map: map});
    }
}


function cm_getJSON(type) {
    switch (type) {
        case 'none':
            alert("Theres is no data. Please check!");
            return;
        case 'religious':
            param_ssKey=param_ssKey_religious;
            callback="callback=cem_getReligiousJSON";
            break;
        default:
            
            console.log("cm_getJSON default");
            
            
            //cm_map.clearOverlays();
            /*
             var param_ssKey="";
             var indexes = new Array();
             indexes = type.split("-");
             */
            //cm_map.clearOverlays;
            
            
            
            /*


            for (var i=0;i<cm_Religious.length;i++) {
                if (cm_classIDReligious[i]==type) {
                    param_Image = cm_cionsReligious[i];
                    param_ssKey = cm_ssKeyReligious[i];
                    var ssKey = cm_ssKeyReligious[i];
                    callback = 'callback=cm_loadMapJSON';

                    switch(indexes.length) {
                        case 1:
                            indexString="<h1><a href='\index.htm'>HOME</a> > <a onclick='statusFind=0' href=javascript:cm_getJSON('" + indexes[0] + "')>" + cm_Religious[i] + "</a>";
                            break;
                        case 2:
                            var index=indexes[0]+"-"+indexes[1];
                            for(var j=0;j<cm_Religious.length;j++){
                                if(cm_classIDReligious[j]==indexes[0]){
                                    if(ssKey=="subdivision"){
                                        indexString="<h1><a href='\index.htm'>HOME</a> > <a>" + cm_Religious[j] + "</a> > <a>" + cm_Religious[i] + "</a>";
                                    } else {
                                        indexString="<h1><a href='\index.htm'>HOME</a> > <a>" + cm_Religious[j] + "</a> > <a  onclick='statusFind=0' href=javascript:cm_getJSON('"+index+"')>" + cm_Religious[i] + "</a>";
                                    }
                                }
                            }
                            break;
                        case 3:
                            var index=indexes[0]+"-"+indexes[1];
                            for(var j=0;j<cm_Religious.length;j++){
                                if(cm_classIDReligious[j]==indexes[0]) var z=j;
                                if(cm_classIDReligious[j]==index){
                                    indexString="<h1><a href='\index.htm'>HOME</a> > <a>" + cm_Religious[z] + "</a> > <a>" + cm_Religious[j] + "</a> > <a onclick='statusFind=0' href=javascript:cm_getJSON('" + type + "')>" + cm_Religious[i] + "</a>"
                                }
                            };
                            break;
                    } //end switch
                } //end if
            } //end for
            
            */

            break;
        
            

    }//end switch

    //if(statusFind==2){callback="callback=cm_getAllJSON";}

    // Retrieve the JSON feed.
    var script = document.createElement('script');
    script.setAttribute('src', 'http://spreadsheets.google.com/feeds/list'
        + '/' + param_ssKey + '/' + param_wsId + '/public/values' +
        '?alt=json-in-script&' + callback );
    script.setAttribute('id', 'jsonScript');
    script.setAttribute('type', 'text/javascript');

    document.documentElement.firstChild.appendChild(script);

}//end function

