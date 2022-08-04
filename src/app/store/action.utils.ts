import { createAction, ActionCreator } from '@ngrx/store';
import { TypedAction, ActionCreatorProps, NotAllowedCheck } from '@ngrx/store/src/models';

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

const typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export function createAsyncAction<
  T extends object,
  P extends object,
  K extends object
>(
  name: string,
  payload: ActionCreatorProps<T> & NotAllowedCheck<T>,
  response: ActionCreatorProps<P> & NotAllowedCheck<P>,
  failure: ActionCreatorProps<K> & NotAllowedCheck<K>
): AsyncAction<T, P, K> {
  return {
    init: createAction(name, payload),
    success: createAction(`${name} Success`, response),
    failure: createAction(`${name} Failure`, failure)
  };
}

export interface AsyncAction<T extends object, P extends object, K extends object> {
  init: ActionCreator<string, (props: T & NotAllowedCheck<T>) => T & TypedAction<string>>;
  success: ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;
  failure: ActionCreator<string, (props: K & NotAllowedCheck<K>) => K & TypedAction<string>>;
}
