
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profilelist.css";

const ProfilesList = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/get-all-profiles");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProfiles(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfiles();
    }, []);

    if (loading) return <p>Loading profiles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="profile-list">
            {profiles.length > 0 ? (
                profiles.map((profile) => (
                    <div
                        className="profile-card"
                        key={profile._id}
                        onClick={() => navigate(`/profile/${profile._id}`)} 
                    >
                        <img src={profile.photo} alt={profile.name} className="profile-photo" />
                        <h2>{profile.name}</h2>
                        {/* <p><strong>Location:</strong> {profile.location}</p> */}
                        <p className="view-more">Click to view details →</p> 
                    </div>
                ))
            ) : (
                <p>No profiles found.</p>
            )}
        </div>
    );
};

export default ProfilesList;
