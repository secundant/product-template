import { createEvent, createStore, sample } from 'effector';
import { createBrowserHistory } from 'history';
import { router } from './router.ts';

export const appInitialized = createEvent();
export const $history = createStore(createBrowserHistory());

sample({
  clock: appInitialized,
  source: $history,
  target: router.setHistory,
});
