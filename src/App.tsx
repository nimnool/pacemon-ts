import React from 'react';
import Product from "./components/Product";
import {useProducts} from "./hooks/products";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import PostList from "./components/PostList";

function App() {
    const {products, loading, error, post} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {post.map((post, index) => <PostList post={post} number={index + 1} key={index}/>)}
            {loading && <Loading/>}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => <Product product={product} key={product.id}/>)}
        </div>
    )

}

export default App;
