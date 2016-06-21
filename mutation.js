/**
 * Attach mutation event handler.
 * @param {EventTarget} target
 * @param {function} handler
 */
function mutation(target, handler) {
    target.addEventListener("mutation", function(evt) {
        handler.call(this, this, evt.mutations);
    });
}

module.exports = mutation;

