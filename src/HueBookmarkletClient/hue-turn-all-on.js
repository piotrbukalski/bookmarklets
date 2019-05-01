//@ts-check

import { hueput } from './hue-common'

function main() {
    hueput('groups/0/action', {
        on: true
    });
}

export { main };