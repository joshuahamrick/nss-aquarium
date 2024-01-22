
import { FishList } from './fish/FishList.mjs'
import { displayTips } from './tips/listMartinsTips.mjs'
import { locationsIntroString } from './locations/locations.mjs' 
const parentHTMLElement = document.querySelector(".martinsFishContainer")
const tipsElement = document.querySelector("#tips")
const locationsElement = document.querySelector("#locations")
parentHTMLElement.innerHTML = FishList()
tipsElement.innerHTML = displayTips()
locationsElement.innerHTML = locationsIntroString()


