import {useEffect, useState} from "react";
import {IList, IProducts} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProducts[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState<IList>({ results: [] });

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
            const response = await axios.get<IList>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
            setPosts(response.data);
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

    return { products, loading, error, posts: posts.results }
}
