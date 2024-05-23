export interface WeatherData {
    name: string;
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
        feels_like: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: { icon: string; description: string }[];
}

export interface ForecastListData {
    main: {
        temp: number;
    };
    weather: { icon: string; description: string }[];
    dt_txt: string;
}

export interface ForecastData {
    list: ForecastListData[]; // ForecastData contiene un array 'list' de ForecastListData
}