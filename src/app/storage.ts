// Custom redux-persist storage engine.
//
// We avoid importing "redux-persist/lib/storage" directly because Vite 8's
// Rolldown-based bundler doesn't unwrap its CommonJS default export
// correctly, which results in `storage.getItem is not a function`.
// This tiny wrapper implements the same interface directly against
// window.localStorage and sidesteps the interop issue entirely.
const storage = {
  getItem(key: string) {
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem(key: string, value: string) {
    return Promise.resolve(window.localStorage.setItem(key, value));
  },
  removeItem(key: string) {
    return Promise.resolve(window.localStorage.removeItem(key));
  },
};

export default storage;
