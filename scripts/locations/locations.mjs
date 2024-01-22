import { getLocations } from "../data.mjs";
const locations = getLocations() 

export const locationsIntroString = () => {
    let locationsHTMLString = ""
    for (const location of locations) {
        locationsHTMLString += '<div class="locationCard">'
        locationsHTMLString += `<h2>${location.fish_species}</h2>`
        locationsHTMLString += `<p class="location">${location.location}</p>`
        locationsHTMLString += '</div>'
    }
    return locationsHTMLString
}