import { CarProps, filterProps } from "@/types";

export const fetchCars = async (filters: filterProps) => {

    const {manufacturer, model, year, fuel, limit} = filters

    const headers = {
        'X-RapidAPI-Key': 'ec99ac77fbmshdcf1f8baf67cdc3p1ad13djsn62891c0e196b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`;

    const response = await fetch(url, {headers: headers})
    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50
    const mileageFactor = 0.1
    const ageFactor = 0.05

    const milageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    const rentalRatePerDay = basePricePerDay + milageRate + ageRate

    return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {

    const url = new URL("https://cdn.imagin.studio/getimage")

    const {make, model, year} = car

    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(" ")[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('year', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
}