/**
 * Main window
 * GUI definition
 */

import { Colour, label, window } from "openrct2-flexui";

export const mainWindow = window({
    title: "Tiger Plugin Template",
    width: 200,
    height: 200,
    colours: [Colour["Grey"], Colour["Grey"]],
    content: [
        label({
            text: "Hello world!"
        }),
    ]
})