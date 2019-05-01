//@ts-check

import { hueput } from './hue-common'

function main() {
    hueput('config', {
        linkbutton: true
    });
};

export {main};