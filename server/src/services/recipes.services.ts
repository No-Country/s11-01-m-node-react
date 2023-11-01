import axios from 'axios'

export const randomRecipeByDiet = async (diet: string, key: string) => {
        try {
            const URI = `${process.env.RANDOM_BYDIET}?apiKey=${key}&number=5&tags=${diet}`
            const { data } = await axios.get(URI)
            return data
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                return { error: 'API Key limit reached' }
            }
            return { error: 'Internal Server Error' }
        }
}
