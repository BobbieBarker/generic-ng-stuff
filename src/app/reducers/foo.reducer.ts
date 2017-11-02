export interface Foo {
    bar: string;
}


export function foo(state: Foo = {bar: ''}, { type, payload }: { type: string, payload?: Foo }) {
    switch (type) {
        case 'DO_SOMETHING':
            return {bar: 'snazzy stuff'};
        default:
            return state;
    }
}

export function doSomething() {
    return {type: 'DO_SOMETHING'};
}
