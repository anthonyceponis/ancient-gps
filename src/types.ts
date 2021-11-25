import { IAppStore } from "./components/app/types";
import { INavStore } from "./components/navbar/types";

export interface IStore {
  App: IAppStore;
  Navbar: INavStore;
}
