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

        alert("Unit Created!");
        // window.location = "/"; 
    }

    return (
        <div>
            <h1>Create a New Unit</h1>
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


                <input type="submit" value="Create Unit" onClick={createUnit} />
            </form>
        </div>
    )

}



export default CreateUnit;