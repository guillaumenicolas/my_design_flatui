(function () {
    "use strict";

    var dataArray = [
    { title: "Blank page", text: "A blank page" },
    { title: "Example 1", text: "A simple example to get you started" },
    { title: "Example 2", text: "A more in depth example" }
    ];

    var dataList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: dataList
        };
    WinJS.Namespace.define("DataExample", publicMembers);



})();
