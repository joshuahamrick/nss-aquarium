import { getFish } from "../data.mjs"
const fishData = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishData) {
        if (fish.fishLength % 3 === 0) {
        holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    let soldiers = []
    // 5, 10, 15, 20, 25, etc... fish
    for (const fish of fishData) {
        if(fish.fishLength % 5 === 0) {
            soldiers.push(fish)
        }
        
    }
    return soldiers
}

export const nonHolyFish = () => {
    let regularFish = []
    for (const fish of fishData) {
      if (fish.fishLength % 3 !== 0 && fish.fishLength % 5 !== 0) {
        regularFish.push(fish)
      }
    }
    // Any fish not a multiple of 3 or 5
    return regularFish
}
