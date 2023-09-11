import React from 'react';
import { artimages } from '../images/images';
import '../App.css';
export const SketchesPage = () => {
    return (
        <div className="productimage">
            <div className="image-container">
                {artimages
                    .filter((x: any) => x.category === 'pencilsketch')
                    .map((p) => (
                        <div className="image" key={p.key}>
                            <img src={p.ImageURL} alt={p.Name} />
                            <div className="description">
                                <div>Name: {p.Name}</div>
                                <p>Description: {p.Description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

