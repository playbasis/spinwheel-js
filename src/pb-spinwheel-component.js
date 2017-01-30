// Test component only, when you clone basepolymerit repository, you are free to use this code as
// a starting point of develop your own component. But you're free to remove it.
//

'use strict';

// selected playbasis.js for testing purpose
let Playbasis = require('playbasis.js');

class PbSpinwheel {

  beforeRegister() {
    // Takes camelcase class name "PbSpinwheel" -> "stock-ticker".
    let is = this.constructor.name.replace(/\W+/g, '-')
        .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

    this.is = is;
    this.properties = {
        onSuccessEvent: {
          type: String,
          value: null
        },
        onErrorEvent: {
          type: String,
          value: null
        }
    };

    // hide private member variables inside here
    // actually can do it as well inside this.properties with readOnly set to true
    this.ready = function() {
      this._degree = 1800;

      // pre-defined odd number with special inclusive on 0 at first element
      // used in spin wheel algorithm
      // support rendering spin wheel from 6-8 sections
      this._kOdds = [0, 1, 3, 5, 7, 9, 11, 13, 15];   
      this._rewards = [];
      this._gotRewardItem = null;   // reward that will be got from executing rule
      this._targetSelectionIndex;   // section index that spin wheel will be spinning, corresponding to gotRewardItem from executing rule
      this._isStopSpinArrow = false;
      this._spinButtonDisabled = true;    // expose disability of button to outside

      this._kTargetAction = "click";
      this._kTargetTag = "spin-wheel";

      this._kParamName = "url";
      this._kCustomParamUrl_values = ["spin-wheel1", "spin-wheel2", "spin-wheel3"];
      this._innerWheelHtmlElement;
    }
  }

  spinButtonDisabled() {
    return this._spinButtonDisabled;
  }

  buildAndAuthPlaybasis() {
    Playbasis.builder
     .setApiKey("2043203153")
     .setApiSecret("144da4c8df85b94dcdf1f228ced27a32")
     .build();

    Playbasis.authApi.auth()
      .then((result) => {
        console.log(result);
      }, (e) => {
        console.log(e);
      });
  }
}

// Register the element using Polymer's constructor.
Polymer(PbSpinwheel);
