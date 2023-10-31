import React from 'react';
import Product from "./components/Product";
import {useProducts} from "./hooks/products";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import PokemonList from "./components/PokemonList";

function App() {
    const {products, loading, error, posts} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {posts.map((pokemon, index) => (
                <PokemonList post={pokemon} key={index} number={index + 1} />
            ))}
            {loading && <Loading/>}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => <Product product={product} key={product.id}/>)}
        </div>
    )

}

export default App;
