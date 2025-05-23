import React, { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";


const EditUnit = () => {

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUnit((prevUnit) => {
            return {
                ...prevUnit,
                [name]: value
            }
        })
    }

    const updateUnit = async (e) => {
        e.preventDefault();

        await supabase
            .from('Units')
            .update({ name: unit.name, race: unit.race, color: unit.color })
            .eq('id', id);

        alert("Unit Updated!");
    }

    const deleteUnit = async (e) => {
        e.preventDefault();

        await supabase
        .from('Units')
        .delete()
        .eq('id', id);

        alert("Unit Deleted!");

        window.location = "/gallery";
    }

  return (
    <div>
        <h2>Update your Unit</h2>
        <p>Name: {unit.name}</p>
        <p>Race: {unit.race}</p>
        <p>Color: {unit.color}</p>
        {/* Add form or functionality to edit a unit here */}
        <form>
                <label>Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} />

                <label>Race</label>
                <select id="race" name="race" onChange={handleChange}>
                    <option value="">Select a race</option>
                    <option value="Hunter">Hunter</option>
                    <option value="Magic Beast">Magic Beast</option>
                    <option value="Shadow">Shadow</option>
                    <option value="Monarch">Monarch</option>
                    <option value="Ruler">Ruler</option>
                    <option value="Demon">Demon</option>
                    <option value="Itarim">Itarim</option>
                    <option value="Apostle">Apostle</option>
                </select>

                <label>Color</label>
                <input type="radio" id="Red" name="color" value="Red" onChange={handleChange} />
                <label htmlFor="Red">Red</label>
                <input type="radio" id="Blue" name="color" value="Blue" onChange={handleChange} />
                <label htmlFor="Blue">Blue</label>
                <input type="radio" id="Green" name="color" value="Green" onChange={handleChange} />
                <label htmlFor="Green">Green</label>
                <input type="radio" id="Yellow" name="color" value="Yellow" onChange={handleChange} />
                <label htmlFor="Yellow">Yellow</label>
                <input type="radio" id="Black" name="color" value="Black" onChange={handleChange} />
                <label htmlFor="Black">Black</label>
                <input type="radio" id="White" name="color" value="White" onChange={handleChange} />
                <label htmlFor="White">White</label>


                <input type="submit" value="Update Unit" onClick={updateUnit} />
                <button onClick={deleteUnit}>Delete Unit</button>
            </form>
    </div>
  )
}

export default EditUnit;