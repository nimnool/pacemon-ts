import React from 'react';
import { IList } from "../models";

interface Posts {
    post: IList;
    number: number;
}

const PokemonList = ({ post, number }: Posts) => {
    return (
        <div>
            <p>{post.results[number - 1].name}</p>
            <a href={post.results[number - 1].url}>{post.results[number - 1].url}</a>
        </div>
    );
};

export default PokemonList;
