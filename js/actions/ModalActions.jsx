var ModalActions = {
    mouseDown() {
        AppDispatcher.dispatch({
            actionType: ModalConstants.MOUSE_DOWN
        });
    },

    mouseUp() {
        AppDispatcher.dispatch({
            actionType: ModalConstants.MOUSE_UP
        });
    },

    keyDown() {
        AppDispatcher.dispatch({
            actionType: ModalConstants.KEY_DOWN
        });
    },

    keyUp() {
        AppDispatcher.dispatch({
            actionType: ModalConstants.KEY_UP
        });
    },

    click() {
        AppDispatcher.dispatch({
            actionType: ModalConstants.CLICK
        });
    }
};

export default ModalActions;