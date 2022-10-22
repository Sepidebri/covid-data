// import
import {renderSearchedCountries} from "./app.js"
// ------
export const contentSearchbox = document.querySelector(".content-searchbox")
const allCase = document.querySelector("main .content-fist-page span");
export const getApi = () => {
    try {
        axios
        .get('https://covid-api.mmediagroup.fr/v1/cases')
        .then(res => {
            const AllData = res.data;
            countingCases(AllData.Global.All.confirmed,8000,allCase);
            contentSearchbox.addEventListener('input',()=>{renderSearchedCountries(AllData)})
        })
    } catch (e) {
        console.log(e);
    }
}
const countingCases = (confirmed, delay, element) =>{
    let diffrence = confirmed - delay;
    const intDiff = setInterval(()=>{
        if (diffrence >= confirmed) clearInterval(intDiff)
        diffrence +=200;
        element.innerHTML = numeral(diffrence).format("0,0");
    },50);
}
