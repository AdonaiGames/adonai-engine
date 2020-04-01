﻿import { assign } from '../utilities/objects';
import { addListener, preventDefault } from '../application/browser';
import { publish } from '../application/events';

export const mouseOptions = {
};

export const configureMouse = (options) => {
    assign(mouseOptions, options);

    addListener('mousedown', mouseDown);
    addListener('mousemove', mouseMove);
    addListener('mouseup', mouseUp);
    addListener('mousewheel', mouseWheel);
    addListener('contextmenu', contextMenu);
};

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

const contextMenu = (event) => preventDefault(event);