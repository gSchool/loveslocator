const fs = require('fs');
global.requirejs = function(scripts, func) {
    const args = scripts.map((script) => {
        if(script.indexOf('text!') == 0) {
            return fs.readFileSync('public/' + script.substring(5), 'utf8');
        } else {
            return require('../../public/' + script);
        }
    })
    func(...args);
}