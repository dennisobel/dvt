const proxy = "http://localhost:8080/"
const baseUrl = "https://api.deezer.com"

export const search = async (query) => {
    console.log('querty:',query)
    const res = await fetch(`${proxy}/${baseUrl}/search?q=${query}`, {
        method: 'GET',
        mode: 'no-cors'
    })

    const data = await res.json()
    return data
}