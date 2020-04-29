﻿export const initializeMouse = (engine) => {
    const mouseDown = (event) => {
        // TODO: Use pointer lock API.
        //let canvas = event.target;
        //let center = canvas.center;
        //let bounds = canvas.getBoundingClientRect();
        //let x = (event.clientX - bounds.left - center.x) / center.x;
        //let y = (center.y - (event.clientY - bounds.top)) / center.y;
    };

    const mouseMove = (event) => {
    };

    const mouseUp = (event) => {
    };

    const mouseWheel = (event) => {
    };

    const contextMenu = (event) => event.preventDefault();

    const events = engine.events;
    events.set('mousedown', mouseDown);
    events.set('mousemove', mouseMove);
    events.set('mouseup', mouseUp);
    events.set('mousewheel', mouseWheel);
    events.set('contextmenu', contextMenu);
};