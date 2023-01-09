export declare type EWindow = Electron.CrossProcessExports.BrowserWindow;
export declare type WindowID = string;
export declare type ABSPath = string;
export declare type WindowMap = Map<WindowID,EWindow>
export declare type WindowDict = Record<WindowID,EWindow>
export declare type PathDict = Record<WindowID, ABSPath>;