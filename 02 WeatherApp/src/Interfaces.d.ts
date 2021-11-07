// Types and Interfaces

type ProcessEnv = string | any;

type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
type RootState = ReturnType<typeof store.getState>;

interface Action {
  type: string;
  payload?: boolean | labels | data;
}
