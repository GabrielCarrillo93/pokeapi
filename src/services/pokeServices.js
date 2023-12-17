const POKE_URL = 'https://pokeapi.co/api/v2'

export const pokeServices = {
    getAllPokemon: async() => {
        const resp = await fetch(`${POKE_URL}/pokemon`)
        const data = await resp.json()
        const lista = [];data.results.forEach((poke, i) => {
            lista[i] = poke.name
        });
        let todaLaData = []
        lista.forEach(async (poke, i) => {
            const resp = await fetch(`${POKE_URL}/pokemon/${poke}`)
            const data = await resp.json()
            todaLaData[i] = data
        })
        return todaLaData
        
    }
}
