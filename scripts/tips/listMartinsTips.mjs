import { getTips } from "../data.mjs";

const martinsTips = getTips()

export const displayTips = () => {
    let tipsHTMLString = "<ul class='tips-list'>"
    for (const tip of martinsTips) {
        tipsHTMLString += `<li class="tip">${tip.fishCareTips}</li>`
    }
    tipsHTMLString += "</ul>"
    return tipsHTMLString

}