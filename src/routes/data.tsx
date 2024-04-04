import people from "@/service/people"

type Props = {
    results: {
        name: string
        birth_year: string
        eye_color: string
        gender: string
        hair_color: string
        height: string
        mass: string
        skin_color: string
        homeworld: string
        films: string
        species: string
        starships: string
        vehicles: string
        url: string
        created: string
        edited: string
    }
}

export const fetchData = async (): Promise<Props> => {
    const response = await people.listAllCharacter()
    return response
}

export const fetchCaracter = async (id : string) => {
    const response = await people.listCharacter(id)
    return response
}