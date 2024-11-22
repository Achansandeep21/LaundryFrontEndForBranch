import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onPostBody: function () {
            StartFuncOnLoadSuccess();
            jFdate();
            $("#TableFooterItemNameId").focus();
        },
        onClickRow: StartFuncOnClickRowFunc
    });
};

const jFdate = () => {
  
    var today = new Date(); 
    var dd = String(today.getDate()).padStart(2, '0'); 
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear(); 
    today = yyyy + '-' + mm + '-' + dd; 
    document.getElementById("TableFooterdateInputId").setAttribute("min", today); 
    document.getElementById("TableFooterdateInputId").value = today; 
};

export { StartFunc };
