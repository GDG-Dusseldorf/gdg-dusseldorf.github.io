boomerang.factory('Config', function () {
    return {
        //modify these
        'name'          : 'GDG Düsseldorf',
        'id'            : '107373371386267684213',
        'google_api'    : 'AIzaSyBQ3n5zeiEV7aWIurOcPCyFoYJpPErtx9Y',
        'pwa_id'        : '5915725140705884785', //picasa web album id, must belong to google+ id above
        'domain'        : 'http://www.gdg-dus.de',
        'cover' : {
            title: 'DevFest 2014',
            subtitle: 'The DevFest 2014 is taking place on October 23rd in Düsseldorf!',
            button: {
                text: 'Find out more',
                url: 'http://gdg-dusseldorf.github.io/DevFest2014/'
            }
        }
    };
});