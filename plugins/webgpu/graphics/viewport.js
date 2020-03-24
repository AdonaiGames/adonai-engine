export const defaultViewportOptions = {
    x: 0,
    y: 0,
    width: null,
    height: null,
    minDepth: 0,
    maxDepth: 1
};

export const createViewport = (options) => ({ ...defaultViewportOptions, ...options });