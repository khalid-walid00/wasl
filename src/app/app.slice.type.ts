import { User } from "~/types";

export interface ConfigState {
    loading: boolean;
    showModel: boolean;
    appLoading: boolean;
    showSideBar: boolean;
    user: User;
  }