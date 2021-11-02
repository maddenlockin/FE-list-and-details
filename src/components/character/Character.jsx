import React from "react";
import PropTypes from 'prop-types';

const Character = ({ id, name, image }) => (
    <>
        <img src={image} alt={name} />
        <figcaption>
            <h2>{name}</h2>
        </figcaption>
    </>
);

Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.isRequired,
};

export default Character;