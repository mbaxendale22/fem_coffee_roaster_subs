export type OptionItem = {
    id: number
    title: string
    description: string
    optionCategory: string
    sectionHeading: string
}

export const modeData = [
    {
        id: 1,
        title: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers',
        optionCategory: 'mode',
        sectionHeading: 'How do you drink your coffee?',
    },
    {
        id: 2,
        title: 'Filter',
        description:
            'For pour over or drip methods like Aeropress, Chemex, and V60',
        optionCategory: 'mode',
        sectionHeading: 'How do you drink your coffee?',
    },
    {
        id: 3,
        title: 'Espresso',
        description:
            'Dense and finely ground beans for an intense, flavorful experience',
        optionCategory: 'mode',
        sectionHeading: 'How do you drink your coffee?',
    },
]
export const typeData = [
    {
        id: 4,
        title: 'Single Origin',
        description:
            'Distinct, high quality coffee from a specific family-owned farm',
        optionCategory: 'type',
        sectionHeading: 'What type of coffee?',
    },
    {
        id: 5,
        title: 'Decaf',
        description:
            'Just like regular coffee, except the caffeine has been removed',
        optionCategory: 'type',
        sectionHeading: 'What type of coffee?',
    },
    {
        id: 6,
        title: 'Blended',
        description:
            'Combination of two or three dark roasted beans of organic coffees',
        optionCategory: 'type',
        sectionHeading: 'What type of coffee?',
    },
]
export const quantityData = [
    {
        id: 7,
        title: '250',
        description:
            'Perfect for the solo drinker. Yields about 12 delicious cups.',
        optionCategory: 'quantity',
        sectionHeading: 'How much would you like?',
    },
    {
        id: 8,
        title: '500',
        description:
            'Perfect option for a couple. Yields about 40 delectable cups.',
        optionCategory: 'quantity',
        sectionHeading: 'How much would you like?',
    },
    {
        id: 9,
        title: '1000',
        description:
            'Perfect for offices and events. Yields about 90 delightful cups.',
        optionCategory: 'quantity',
        sectionHeading: 'How much would you like?',
    },
]
export const grindData = [
    {
        id: 10,
        title: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience',
        optionCategory: 'grind',
        sectionHeading: 'Want us to grind them?',
    },
    {
        id: 11,
        title: 'Filtered',
        description:
            'For drip or pour-over coffee methods such as V60 or Aeropress',
        optionCategory: 'grind',
        sectionHeading: 'Want us to grind them?',
    },
    {
        id: 12,
        title: 'Cafetiére',
        description:
            'Course ground beans specially suited for french press coffee',
        optionCategory: 'grind',
        sectionHeading: 'Want us to grind them?',
    },
]

export const optionsData = [
    modeData,
    typeData,
    quantityData,
    grindData,
    // frequencyData,
]
