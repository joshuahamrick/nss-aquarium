const database = {
    martinsFish: [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/1200px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",
      id: 1,  
      species: "Salmon",
      name: "Sammy",
      fishLength: 30,
      locationHarvested: "Pacific Ocean",
      fishDiet: "Plankton",
    },
    {
      id: 2,
      species: "Trout",
      name: "Timothy",
      fishLength: 15,
      locationHarvested: "Mountain Stream",
      fishDiet: "Insects",
    },
    {
      id: 3,
      species: "Bass",
      name: "Benny",
      fishLength: 22,
      locationHarvested: "Lake Michigan",
      fishDiet: "Small Fish",
    },
    {
      id: 4,
      species: "Angelfish",
      name: "Angie",
      fishLength: 8,
      locationHarvested: "Coral Reef",
      fishDiet: "Algae",
    },
    {
      id: 5,  
      species: "Guppy",
      name: "Gus",
      fishLength: 2,
      locationHarvested: "Aquarium",
      fishDiet: "Fish Flakes",
    },
    {
      id: 6,
      species: "Swordfish",
      name: "Sandy",
      fishLength: 40,
      locationHarvested: "Atlantic Ocean",
      fishDiet: "Squid",
    },
    {
      id: 7,    
      species: "Snapper",
      name: "Snappy",
      fishLength: 18,
      locationHarvested: "Caribbean Sea",
      fishDiet: "Crustaceans",
    },
    {
      id: 8,
      species: "Flounder",
      name: "Flo",
      fishLength: 12,
      locationHarvested: "Gulf of Mexico",
      fishDiet: "Small Fish",
    },
    {
      id: 9,
      species: "Perch",
      name: "Percy",
      fishLength: 10,
      locationHarvested: "Freshwater Lake",
      fishDiet: "Insects",
    },
    {
        id: 10,
        species: "Rainbow Trout",
        name: "Riley",
        fishLength: 18,
        locationHarvested: "Mountain Lake",
        fishDiet: "Insects",
      },
      {
        id: 11,
        species: "Mackerel",
        name: "Mia",
        fishLength: 25,
        locationHarvested: "North Atlantic",
        fishDiet: "Small Fish",
      },
      {
        id: 12,
        species: "Carp",
        name: "Carter",
        fishLength: 20,
        locationHarvested: "River",
        fishDiet: "Plant Matter",
      },
      {
        id: 13,
        species: "Blue Tang",
        name: "Bella",
        fishLength: 12,
        locationHarvested: "Coral Reef",
        fishDiet: "Algae",
      },
      {
        id: 14,
        species: "Clownfish",
        name: "Charlie",
        fishLength: 5,
        locationHarvested: "Anemone",
        fishDiet: "Plankton",
      },
      {
        id: 15,
        species: "Marlin",
        name: "Milo",
        fishLength: 50,
        locationHarvested: "Open Ocean",
        fishDiet: "Squid",
      },
      {
        id: 16,
        species: "Red Snapper",
        name: "Ruby",
        fishLength: 20,
        locationHarvested: "Caribbean Sea",
        fishDiet: "Crustaceans",
      },
      {
        id: 17,
        species: "Flounder",
        name: "Fiona",
        fishLength: 15,
        locationHarvested: "Gulf of Mexico",
        fishDiet: "Small Fish",
      },
      {
        id: 18,
        species: "Perch",
        name: "Penny",
        fishLength: 8,
        locationHarvested: "Freshwater Pond",
        fishDiet: "Insects",
      },
      {
        id: 19,
        species: "Tuna",
        name: "Tommy",
        fishLength: 35,
        locationHarvested: "Atlantic Ocean",
        fishDiet: "Sardines",
      },
      {
        id: 20,
        species: "Halibut",
        name: "Holly",
        fishLength: 28,
        locationHarvested: "Bering Sea",
        fishDiet: "Crustaceans",
      },
      {
        id: 21,
        species: "Yellowtail",
        name: "Yara",
        fishLength: 25,
        locationHarvested: "Southern California",
        fishDiet: "Small Fish",
      },
      {
        id: 22,
        species: "Piranha",
        name: "Pablo",
        fishLength: 12,
        locationHarvested: "Amazon River",
        fishDiet: "Flesh of Other Fish",
      },
      {
        id: 23,
        species: "Catfish",
        name: "Cleo",
        fishLength: 15,
        locationHarvested: "Mississippi River",
        fishDiet: "Worms",
      },
      {
        id: 24,
        species: "Mahi-Mahi",
        name: "Mia",
        fishLength: 30,
        locationHarvested: "Pacific Ocean",
        fishDiet: "Small Fish",
      },
      {
        id: 25,
        species: "Striped Bass",
        name: "Stella",
        fishLength: 22,
        locationHarvested: "Chesapeake Bay",
        fishDiet: "Crabs",
      },
      {
        id: 26,
        species: "Cod",
        name: "Cody",
        fishLength: 18,
        locationHarvested: "North Atlantic",
        fishDiet: "Shrimp",
      },
      {
        id: 27,
        species: "Bluegill",
        name: "Billy",
        fishLength: 8,
        locationHarvested: "Freshwater Pond",
        fishDiet: "Insects",
      },
      {
        id: 28,
        species: "Rainbowfish",
        name: "Rosa",
        fishLength: 6,
        locationHarvested: "Australian Rivers",
        fishDiet: "Aquatic Insects",
      }
  ],
 martinsTips: [
    { id: 1, fishCareTips: "Keep the water temperature stable." },
    { id: 2, fishCareTips: "Feed the fish regularly." },
    { id: 3, fishCareTips: "Clean the aquarium at least once a week." },
    { id: 4, fishCareTips: "Provide proper filtration for the tank." },
    { id: 5, fishCareTips: "Monitor fish behavior for signs of illness." }
    ],
    martinsLocations: [
      {
        "id": 1,
        "fish_species": "Rainbow Trout",
        "location": "Mountain Stream"
      },
      {
        "id": 2,
        "fish_species": "Bass",
        "location": "Freshwater Lake"
      },
      {
        "id": 3,
        "fish_species": "Salmon",
        "location": "Ocean"
      },
      {
        "id": 4,
        "fish_species": "Catfish",
        "location": "River"
      },
      {
        "id": 5,
        "fish_species": "Yellow Perch",
        "location": "Pond"
      },
      {
        "id": 6,
        "fish_species": "Walleye",
        "location": "Deep Lake"
      },
      {
        "id": 7,
        "fish_species": "Bluegill",
        "location": "Shallow Creek"
      },
      {
        "id": 8,
        "fish_species": "Trout",
        "location": "Highland Lake"
      }
    ]
    
};




export const getFish = () => {
    return database.martinsFish.map(fish => ({...fish}))
}

export const getTips = () => {
  return database.martinsTips.map(tip => ({...tip}))
}

export const getLocations = () => {
  return database.martinsLocations.map(location => ({...location}))
}