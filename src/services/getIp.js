export const getIp = async () => {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = response.json()
    return data;
}