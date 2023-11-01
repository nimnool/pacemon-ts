import {useEffect, useState} from "react";
import {IProducts, IPost} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProducts[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [post, setPosts] = useState<IPost[]>([])

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products')
            setProducts(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    async function getPokemonPosts() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IPost[]>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
            setPosts(response.data);
            console.log(response.data)
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts()
        getPokemonPosts()
    }, [])

    return { products, loading, error, post }
}
