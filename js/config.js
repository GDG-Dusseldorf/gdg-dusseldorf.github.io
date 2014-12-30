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
            subtitle: 'The DevFest 2014 took place on October 26th in Düsseldorf. Thank you all for attending and making it a great success!',
            button: {
                text: 'Find out more',
                url: 'http://www.gdg-dus.de/DevFest2014/'
            }
        }
    };
});
