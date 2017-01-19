/**
 * @namespace PBSpinwheel
 */

var PBSpinwheel = require('./core/core.js')();

require('./core/core.util.js')(PBSpinwheel);

module.exports = PBSpinwheel;
// if it's in browser environment
var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
if (isBrowser()) {
    window.PBSpinwheel = PBSpinwheel;
}
