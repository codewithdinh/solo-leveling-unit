import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const Gallery = () => {

    const [units, setUnits] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUnits = async () => {
            const { data } = await supabase
                .from('Units')
                .select();

            setUnits(data);
        }
        fetchUnits();
    }, []);


    return (
        <div className="gallery">
            {
                units && units.length > 0 ?
                    units.map((unit, index) =>
                        <div className="unit" key={index}>
                            <h2>{unit.name}</h2>
                            <p>Race: {unit.race}</p>
                            <p>Color: {unit.color}</p>
                            <Link to={`/edit/${unit.id}`}><button>Edit Unit</button></Link>

                        </div>
                    ) : <p>No units available</p>
            }
        </div>
    )

}

export default Gallery