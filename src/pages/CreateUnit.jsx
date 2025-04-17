import React from "react";
import { useState } from "react";
import { supabase } from "../client";

const CreateUnit = () => {

    const [unit, setUnit] = useState({ name: "", race: "", color: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUnit((prevUnit) => {
            return {
                ...prevUnit,
                [name]: value
            }
        })
    }

    const createUnit = async (e) => {
        e.preventDefault();

        await supabase
            .from('Units')
            .insert({ name: unit.name, race: unit.race, color: unit.color })
            .select();

        window.location = "/"; // Redirect to the home page after creating the unit
    }

    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} />

                <label>Race</label>
                <input type="text" id="race" name="race" onChange={handleChange} />

                <label>Color</label>
                <input type="text" id="color" name="color" onChange={handleChange} />

                <input type="submit" value="Create Unit" onClick={createUnit} />
            </form>
        </div>
    )

}



export default CreateUnit;