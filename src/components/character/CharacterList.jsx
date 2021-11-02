import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
    <ul aria-label="hey arnold characters">
        {characters.map((character) => (
            <li key={character.id}>
                <Character name={character.name} image={character.image} />
            </li>
        ))}
    </ul>
};

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.isRequired,
        }).isRequired
    ),
};
export default CharacterList;