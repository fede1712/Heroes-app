import { heroes } from '../../data/heroes'

export const filteredResults = (name) => {
    return heroes.filter(elm => elm.superhero.toLowerCase().trim().includes(name.toLowerCase().trim()))
}
