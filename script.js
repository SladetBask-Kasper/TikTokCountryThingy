const flags = ['🇮🇸', '🇳🇴', '🇸🇪', '🇫🇮', '🇩🇰', '🇩🇪', '🇬🇧', '🇮🇪', '🇺🇸', '🇫🇷', '🇧🇪', '🇧🇾', '🇵🇱', '🇪🇪', '🇱🇹',
 '🇱🇻', '🇳🇱', '🇧🇪', '🇪🇸', '🇵🇹', '🇮🇹', '🇨🇭', '🇦🇹', '🇨🇿', '🇭🇺', '🇷🇴', '🇺🇦', '🇭🇷', '🇷🇸', '🇲🇪',
 '🇲🇰', '🇧🇬', '🇬🇷', '🇷🇺', '🇬🇪', '🇦🇲', '🇨🇾', '🇱🇧', '🇸🇾', '🇯🇴', '🇮🇱', '🇵🇸', '🇮🇶', '🇸🇦', '🇴🇲',
 '🇾🇪', '🇪🇬', '🇲🇦', '🇮🇷', '🇵🇰', '🇮🇳', '🇳🇵', '🇧🇹', '🇹🇭', '🇲🇳', '🇱🇦', '🇰🇭', '🇻🇳', '🇵🇭', '🇨🇳',
 '🇰🇵', '🇯🇵', '🇪🇹', '🇪🇷', '🇨🇦', '🇧🇷', '🇻🇪', '🇲🇽', '🇨🇺', '🇳🇬', '🇰🇪', '🇦🇺', '🇳🇿', '🇯🇲'];
 function rand(max) {
    return Math.floor(Math.random() * max);
 }
 function isTaken(flag) {
    return document.getElementById("Categories").innerHTML.includes(flag)
 }
 function getFlag() {
    var flag = '';
    while (isTaken(flag)) {
        flag = flags[rand(flags.length)]
    }
    document.getElementById("ShowFlag").innerHTML = "<emo>" + flag + "</emo>";
 }
document.addEventListener('DOMContentLoaded', function() {
    getFlag();
});

// Defaults
const D_WH = '<a class="OptUsable" href="javascript:clickWeather()">Weather:</a>';
const D_FD = '<a class="OptUsable" href="javascript:clickFood()">Food:</a>';
const D_PE = '<a class="OptUsable" href="javascript:clickPeople()">People:</a>';
const D_SA = '<a class="OptUsable" href="javascript:clickSafety()">Safety:</a>';
const D_GOV = '<a class="OptUsable" href="javascript:clickGovernment()">Government:</a>'
const D_MIL = '<a class="OptUsable" href="javascript:clickMilitary()">Military:</a>';
const D_BE = '<a class="OptUsable" href="javascript:clickBeauty()">Natural Beauty:</a>';
const D_ECO = '<a class="OptUsable" href="javascript:clickEconomy()">Economy:</a>';
const D_HIS = '<a class="OptUsable" href="javascript:clickHistory()">History:</a>';
const D_CUL = '<a class="OptUsable" href="javascript:clickCulture()">Culture:</a>';

function clickWeather() {
    if (document.getElementById("wh").innerHTML == D_WH) {
        document.getElementById("wh").innerHTML = '<a class="OptUsed" href="javascript:clickWeather()">Weather: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickFood() {
    if (document.getElementById("fd").innerHTML == D_FD) {
        document.getElementById("fd").innerHTML = '<a class="OptUsed" href="javascript:clickFood()">Food: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickPeople() {
    if (document.getElementById("pe").innerHTML == D_PE) {
        document.getElementById("pe").innerHTML = '<a class="OptUsed" href="javascript:clickPeople()">People: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickSafety() {
    if (document.getElementById("sa").innerHTML == D_SA) {
        document.getElementById("sa").innerHTML = '<a class="OptUsed" href="javascript:clickSafety()">Safety: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickGovernment() {
    if (document.getElementById("gov").innerHTML == D_GOV) {
        document.getElementById("gov").innerHTML = '<a class="OptUsed" href="javascript:clickGovernment()">Government: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickMilitary() {
    if (document.getElementById("mil").innerHTML == D_MIL) {
        document.getElementById("mil").innerHTML = '<a class="OptUsed" href="javascript:clickMilitary()">Military: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickBeauty() {
    if (document.getElementById("be").innerHTML == D_BE) {
        document.getElementById("be").innerHTML = '<a class="OptUsed" href="javascript:clickBeauty()">Natural Beauty: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickEconomy() {
    if (document.getElementById("eco").innerHTML == D_ECO) {
        document.getElementById("eco").innerHTML = '<a class="OptUsed" href="javascript:clickEconomy()">Economy: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickHistory() {
    if (document.getElementById("his").innerHTML == D_HIS) {
        document.getElementById("his").innerHTML = '<a class="OptUsed" href="javascript:clickHistory()">History: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function clickCulture() {
    if (document.getElementById("cul").innerHTML == D_CUL) {
        document.getElementById("cul").innerHTML = '<a class="OptUsed" href="javascript:clickCulture()">Culture: ' + document.getElementById("ShowFlag").innerHTML + '</a>';
        getFlag();
    }
}
function reset() {
    document.getElementById("cul").innerHTML = D_CUL;
    document.getElementById("his").innerHTML = D_HIS;
    document.getElementById("eco").innerHTML = D_ECO;
    document.getElementById("be").innerHTML = D_BE;
    document.getElementById("mil").innerHTML = D_MIL;
    document.getElementById("gov").innerHTML = D_GOV;
    document.getElementById("sa").innerHTML = D_SA;
    document.getElementById("pe").innerHTML = D_PE;
    document.getElementById("fd").innerHTML = D_FD;
    document.getElementById("wh").innerHTML = D_WH;
}
