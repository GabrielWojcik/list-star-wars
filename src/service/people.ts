import apiBase from "./api"

class starWarsList {

    constructor(){}

    public async listAllCharacter(): Promise<any> {
        try {
            const { data } = await apiBase.get(`/people`)
            return data
        } catch (err: any) {
            console.error('error in list all characters', err)
        }
    }

    public async listCharacter(id: string): Promise<any> {
        try {
            const { data } = await apiBase.get(`/people/${id}`)
            return data
        } catch (err: any) {
            console.error('error in list character', err)
        }
    }
    public async listCharacterPage(value: any): Promise<any> {
        try {
            const { data } = await apiBase.get(`/people/?page=${value}`)
            return data
        } catch (err: any) {
            console.error('error in list character for page')
        }
    }

}

const starWarsListInstance = new starWarsList();
export default starWarsListInstance;