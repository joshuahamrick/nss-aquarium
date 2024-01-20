//import { getFish } from './scripts/data.mjs'
import { mostHolyFish, soldierFish, nonHolyFish } from './multiplesOfThree.mjs'
import { FishList } from './FishList.mjs'
import { displayTips } from '../tips/listMartinsTips.mjs'
const parentHTMLElement = document.querySelector(".martinsFishContainer")
const tipsElement = document.querySelector("#tips")
parentHTMLElement.innerHTML = FishList()
tipsElement.innerHTML = displayTips()
// parentHTMLElement.classList.add('container')



/*const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
*/