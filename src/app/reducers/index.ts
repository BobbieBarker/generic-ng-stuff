import { ActionReducerMap } from '@ngrx/store';

export * from './foo.reducer';

import { foo, Foo } from './foo.reducer';

export interface AppState {
    foo: Foo;
}

export const reducerStack: ActionReducerMap<AppState> = {
    foo
};
