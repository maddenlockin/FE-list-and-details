import { debug } from "webpack";

export const fetchCharacters = async () => {
    const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters/');
    const obj = await res.json();
    console.log('testing...');
    obj.map((character) => {
        console.log('testing 2... ', character._id);
        debugger;
    })
    // return obj.map((character) => ({
    //     id: character._id,
    //     name: character.name,
    //     image: character.image
    // }));
};

