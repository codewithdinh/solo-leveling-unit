import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const Gallery = () => {
    const [units, setUnits] = useState([]);
    const [stats, setStats] = useState({ races: {}, colors: {} });

    useEffect(() => {
        const fetchUnits = async () => {
            const { data } = await supabase
                .from('Units')
                .select()
                .order('created_at', { ascending: false }); // Sort by creation date, newest first

            setUnits(data || []);
            
            // Calculate statistics
            if (data && data.length > 0) {
                calculateStats(data);
            }
        }
        fetchUnits();
    }, []);
    
    // Calculate statistics for races and colors
    const calculateStats = (data) => {
        const totalUnits = data.length;
        const races = {};
        const colors = {};
        
        // Count occurrences of each race and color
        data.forEach(unit => {
            // Race statistics
            if (!races[unit.race]) {
                races[unit.race] = 0;
            }
            races[unit.race]++;
            
            // Color statistics
            if (!colors[unit.color]) {
                colors[unit.color] = 0;
            }
            colors[unit.color]++;
        });
        
        // Calculate percentages
        Object.keys(races).forEach(race => {
            races[race] = {
                count: races[race],
                percentage: ((races[race] / totalUnits) * 100).toFixed(1)
            };
        });
        
        Object.keys(colors).forEach(color => {
            colors[color] = {
                count: colors[color],
                percentage: ((colors[color] / totalUnits) * 100).toFixed(1)
            };
        });
        
        setStats({ races, colors });
    };

    return (
        <div className="gallery">
            <h1>Your Units Gallery!</h1>
            
            {/* Statistics Section */}
            <div className="statistics-section">
                <h2>Unit Statistics</h2>
                <div className="stat-container">
                    <div className="race-stats">
                        <h3>Race Distribution</h3>
                        {Object.keys(stats.races).length > 0 ? (
                            <ul>
                                {Object.keys(stats.races).map(race => (
                                    <li key={race}>
                                        {race}: {stats.races[race].count} units ({stats.races[race].percentage}%)
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No race statistics available</p>
                        )}
                    </div>
                    
                    <div className="color-stats">
                        <h3>Color Distribution</h3>
                        {Object.keys(stats.colors).length > 0 ? (
                            <ul>
                                {Object.keys(stats.colors).map(color => (
                                    <li key={color}>
                                        {color}: {stats.colors[color].count} units ({stats.colors[color].percentage}%)
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No color statistics available</p>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Units List */}
            {units && units.length > 0 ? (
                <div className="units-grid">
                    {units.map((unit, index) => (
                        <div className={`unit ${unit.race}`} key={index} id={unit.id}>
                            <Link to={`/view/${unit.id}`}>
                                <div className="viewUnit">
                                    <h2>{unit.name}</h2>
                                    <p><strong>Race: </strong>{unit.race}</p>
                                    <p><strong>Color: </strong>{unit.color}</p>
                                    <Link to={`/edit/${unit.id}`}><button>Edit Unit</button></Link>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No units available</p>
            )}
        </div>
    );
};

export default Gallery;