
// Name: Koushik Rama
// G#: G01508456

function validateZip(zip) {

    document.getElementById("city").innerHTML = "";
    document.getElementById("state").innerHTML = "";
    var params = [{param: "zip", value: zip}];
    callwebService("zipcodes.json", params, showCityState);
}

function callwebService(method, params, callback) {
    var asyncRequest = new XMLHttpRequest();
    var requestUrl = method;
    asyncRequest.onreadystatechange = function() {
    callback(asyncRequest);
    };
    asyncRequest.open("GET", requestUrl, true);
    asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8");
    asyncRequest.send();
}

function showCityState(asyncRequest) {
    if (asyncRequest.readyState === 4) {
    if (asyncRequest.status === 200) {
        var obj = JSON.parse(asyncRequest.responseText);
        var data = obj.zipcodes; // <-- updated!

        var zipVal = document.getElementById("zip").value.trim();
        var found = false;
        for (var i = 0; i < data.length; i++) {
        if (String(data[i].zip).trim() === zipVal) {
            document.getElementById("city").textContent = data[i].city;
            document.getElementById("state").textContent = data[i].state;
            document.getElementById("validateZip").textContent = "";
            found = true;
            break;
        }
        }
        if (!found) {
        document.getElementById("validateZip").textContent = "an invalid zip";
        document.getElementById("city").textContent = "";
        document.getElementById("state").textContent = "";
        }
    } else {
        document.getElementById("validateZip").textContent = "Zip validation service not available";
        document.getElementById("city").textContent = "";
        document.getElementById("state").textContent = "";
    }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("city").addEventListener("click", () => {
    document.getElementById("zip").focus();
    });
    document.getElementById("state").addEventListener("click", () => {
    document.getElementById("zip").focus();
    });
});