import * as React from "react";
import { IVSCodeObject } from "./types/vscode";
import mockVsCodeApi from "./mockData/mockVsCodeApi";
import { ENVIRONMENT, PLATFORM } from "./utils/constants/constants";

interface IAppContext {
  vscode: IVSCodeObject;
}

//TODO: THIS COULD BE IMPROVED FOR DEV
//TODO: Add something on the mocked to choose between platform
//TODO: USE LAUNCH COMMAND HERE. When you choose that from Command Palette:
//TODO: Web Template Studio: Create Web App
//TODO: Web Template Studio: Create React Native App
const devPlatform = PLATFORM.REACTNATIVE;
export const platform = process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT ? devPlatform : PLATFORM.REACTNATIVE;

export const AppContext = React.createContext<IAppContext>({ vscode: mockVsCodeApi(platform) as IVSCodeObject });
