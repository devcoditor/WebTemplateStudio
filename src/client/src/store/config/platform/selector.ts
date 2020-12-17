import { createSelector } from "reselect";
import { AppState } from "../../combineReducers";

const getConfigSelector = (state: AppState) => state.config;

const getPlatformSelector = createSelector(getConfigSelector, (config) => config.platform);

export { getPlatformSelector };
