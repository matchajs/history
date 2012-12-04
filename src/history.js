/**
 * History Models
 *
 * Thanks:
 *  - https://github.com/balupton/history.js
 *
 * @author kidney<kidneyleung@gmail.com>
 *
 */
define(function(require, exports, module) {
// Helpers
var IS_SUPPORT =

    module.exports = {
        back: function() {

        },

        /**
         * Send the browser history back or forward index times
         * @param {int} index
         * @param {int} queue
         */
        go: function(index, queue) {
            // Prepare
            var self = this,
                i;

            // Handle
            if (index > 0) {
                // Forward
                for (i=1; i<=index; ++i) {
                    self.forward(queue);
                }
            } else if (index < 0) {
                // Backward
                for (i=-1; i>=index; --i) {
                    self.back(queue);
                }
            } else {
                throw new Error('History.go: History.go requires a positive or negative integer passed.');
            }

            // Chain
            return self;
        },
        pushState: function() {

        },
        replaceState: function() {

        },

        debug: function() {

        }
    };
});