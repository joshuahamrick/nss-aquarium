// Import the function that returns a copy of the fish array
import { getFish } from "../data.mjs"
import { mostHolyFish, soldierFish, nonHolyFish } from './multiplesOfThree.mjs'
const mostHolyFishies = mostHolyFish()
const soldierFishies = soldierFish()
const nonFish = nonHolyFish()
export const FishList = () => {
    // Invoke the function that you imported from the database module
    //const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of mostHolyFishies) {
        //<div><img  class="fish__image image--card" src="${fish.image}" /></div>
        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.fishLength}</div>
            <div class="fish__location">${fish.locationHarvested}</div>
            <div class="fish__diet">${fish.fishDiet}</div>
        </section>
`
    }

    for (const fish of soldierFishies) {
        //<div><img  class="fish__image image--card" src="${fish.image}" /></div>
        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.fishLength}</div>
            <div class="fish__location">${fish.locationHarvested}</div>
            <div class="fish__diet">${fish.fishDiet}</div>
        </section>
`
    }

    for (const fish of nonFish) {
        //<div><img  class="fish__image image--card" src="${fish.image}" /></div>
        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.fishLength}</div>
            <div class="fish__location">${fish.locationHarvested}</div>
            <div class="fish__diet">${fish.fishDiet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}