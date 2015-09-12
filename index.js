var bright = require('showbox-bright');
var path   = require('path');
var fs     = require('fs');

module.exports = function (talk) {
    return bright(talk).then(function (data) {
        var cssFile = path.join(__dirname, 'theme.css');
        return new Promise(function (resolve, reject) {
            fs.readFile(cssFile, function (err, css) {
                if ( err ) {
                    reject(err);
                } else {
                    data.css += css.toString();
                    resolve(data);
                }
            });
        });
    });
};
