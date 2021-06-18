import '@testing-library/jest-dom/extend-expect'
// /src/setupTests.js
import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');