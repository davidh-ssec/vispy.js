// Require paths.
require.config({
    paths: {
        // "jquery": "lib/jquery-ui/external/jquery/jquery",
        // "jquery": "lib/jquery.min",
        // "jqueryui": "lib/jquery-ui/jquery-ui.min",
        // "jquery-mousewheel": "lib/jquery.mousewheel.min",
        "screenfull": "lib/screenfull.min",
    }
});

function VispyCanvas($el) {
    this.$el = $el;
}

// Vispy library entry point.
define(["events", "gloo", "util", "data"], 
    function(events, gloo) {
        var vispy = function() {
            // Constructor of the Vispy library.
            this.events = events;
            this.gloo = gloo;
        };

        vispy.prototype.init = function(canvas_id) {
            var canvas_el;
            if (typeof canvas_id === 'string') {
                canvas_el = $(canvas_id);
            }
            else {
                canvas_el = canvas_id;
            }
            // Initialize the canvas.
            var canvas = new VispyCanvas(canvas_el);

            // Initialize events.
            this.events.init(canvas);

            // Initialize WebGL.
            this.gloo.init(canvas);

            return canvas;
        };
        return new vispy();
});
