import { IWeatherExtractor } from "./IWeatherExtractor"

/**
 * Classe que realiza a extração dos dados da API OpenWeather
 */
export class OpenWeatherExtractor implements IWeatherExtractor {
    private appId: string
    private baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

    constructor(appId: string) {
        this.appId = appId
    }

    /**
     * Obtém dados climáticos para as coordenadas fornecidas
     *
     * OBS: As coordenadas padrão se referem a cidade de Araras-SP
     */
    getWeatherData(lat: string = '-22.360537', lon: string = '-47.379837'): any {
        const endpoint = `${this.baseUrl}units=metric&lat=${lat}&lon=${lon}&appid=${this.appId}`

        var data = {};

        (async () => {
            const res = await fetch(endpoint)

            if (res.ok) {
                data = await res.json()
            }
        })()

        return data
    }
}

