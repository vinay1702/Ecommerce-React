import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
export const redirect = (url) => history.push(url);
