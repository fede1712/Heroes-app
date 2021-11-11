import { heroes } from '../../data/heroes'

export const getHeroesById = (id) => {

    return heroes.find(elm => elm.id === id)
}
