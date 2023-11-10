export interface IWeather {
  weather: IWeatherDescription[];
  main: IWeatherMain;
  name: string;
}

interface IWeatherDescription {
  main: string;
  description: string;
}

interface IWeatherMain {
  temp: number;
  feels_like: number;
}
