import { useParams } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../client';



const ViewUnit = () => {
    const { id } = useParams();
    const [unit, setUnit] = useState({ id: null, name: "", race: "", color: "" });

    useEffect(() => {
        const fetchUnit = async () => {
            const { data, error } = await supabase
                .from('Units')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Error fetching unit:", error);
            } else {
                setUnit(data);
            }
        };

        fetchUnit();
    }, [id]);

        // Function to get race-specific descriptions
        const getRaceDescription = (race) => {
            switch(race) {
                case "Hunter":
                    return "Hunters are humans with awakened abilities who fight against monsters and magical beasts.";
                case "Magic Beast":
                    return "Magical creatures that emerge from gates, possessing various powers based on their rank.";
                case "Shadow":
                    return "Extracted from the dead by the Shadow Monarch, these loyal servants retain their original abilities.";
                case "Monarch":
                    return "Supreme beings who command vast armies and possess immense power over specific domains.";
                case "Ruler":
                    return "Divine entities that oppose the Monarchs to maintain balance in the universe.";
                case "Demon":
                    return "Dark entities with malevolent powers, often found in high-rank dungeons.";
                case "Itarim":
                    return "Mysterious messengers that serve as intermediaries between different realms.";
                case "Apostle":
                    return "Servants of higher powers who carry out special missions with unique abilities.";
                default:
                    return "No specific information available for this race.";
            }
        };

    return (
        <div>
            <h1>View Unit</h1>
            <p>Unit ID: {id}</p>
            <p>Here you can view the details of the unit.</p>
            <p><strong>Name: </strong>{unit.name}</p>
            <p><strong>Race: </strong>{unit.race}</p>
            <p><strong>Color: </strong>{unit.color}</p>
            <br />
            <p>{getRaceDescription(unit.race)}</p>

        </div>
    );
}

export default ViewUnit;