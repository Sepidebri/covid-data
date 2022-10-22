import {getApi, contentSearchbox} from "./api.js";
// variables
// event
document.addEventListener('DOMContentLoaded',getApi);
// func
export const renderSearchedCountries = () => {
    const value = contentSearchbox.value;
    if (value.length < 1) return;
     
}
