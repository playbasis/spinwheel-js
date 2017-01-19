'use strict';

module.exports = function() {
    var PBSpinwheel = function() {
        var me = this;
        return me;
    };

    PBSpinwheel.globalText = "Test";
    PBSpinwheel.dynamicText;    // to be set via mockContext for testing purpose later

    return PBSpinwheel;
};
