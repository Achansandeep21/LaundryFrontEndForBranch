import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalbranchName = localStorage.getItem("BranchName")
    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Factory/FromFactory/Delivery/QrCode/${jVarLocalbranchName}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    return await response;
};

export { StartFunc };