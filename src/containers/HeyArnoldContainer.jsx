import React, {Component} from "react";
import CharacterList from "../components/character/CharacterList";
import { fetchCharacters } from "../services/HeyArnApi";

export default class HeyArnoldContainer extends Component {
    state = {
        loading: true,
        characters: []
    };
    
    async componentDidMount() {
        const characters = await fetchCharacters();
        this.setState({ characters, loading: false });
    }

    render() {
        const { loading, characters } = this.state;

        if(loading) {
            return (
                <h1>loading...</h1>
            );
        }
        return <CharacterList characters={characters} />;
    }
}