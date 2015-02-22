/**
 * Setting up Boomerang
 */
boomerang.factory('Config', function () {
    "use strict";
    return {
        //modify these
        'name'          : 'GDG Düsseldorf',
        'id'            : '107373371386267684213',
        'google_api'    : 'AIzaSyBQ3n5zeiEV7aWIurOcPCyFoYJpPErtx9Y',
        'pwa_id'        : '5915725140705884785', //picasa web album id, must belong to google+ id above
        'domain'        : 'http://www.gdg-dus.de',
        'cover' : {
            title: 'DevFest 2014',
            subtitle: 'The DevFest 2014 is taking place on October 26th in Düsseldorf!',
            button: {
                text: 'Find out more',
                url: 'http://www.gdg-dus.de/DevFest2014/'
            }
        }
    };
});