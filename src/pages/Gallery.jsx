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
                .select()
                .order('created_at', { ascending: false }); // Sort by creation date, newest first

            setUnits(data);
        }
        fetchUnits();
    }, []);


    return (
        <div className="gallery">
            <h1>Your Units Gallery!</h1>
            {
                units && units.length > 0 ?
                    units.map((unit, index) =>
                        <div className="unit" key={index} id={unit.id}>
                            <Link to={`/view/${unit.id}`}>
                                <div className="viewUnit">
                                    <h2>{unit.name}</h2>
                                    <p><strong>Race: </strong>{unit.race}</p>
                                    <p><strong>Color: </strong>{unit.color}</p>
                                    <Link to={`/edit/${unit.id}`}><button>Edit Unit</button></Link>
                                </div>
                            </Link>
                        </div>
                    ) : <p>No units available</p>
            }
        </div>
    )

}

export default Gallery