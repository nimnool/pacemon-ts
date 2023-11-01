export interface IProducts {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export interface IPost {
    number: number
    name: string
    url: string
}
