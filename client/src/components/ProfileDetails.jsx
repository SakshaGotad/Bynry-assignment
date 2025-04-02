// src/components/ProfileDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
    const { id } = useParams(); // ✅ Get profile ID from URL
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfileDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/get-profile/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProfile(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileDetails();
    }, [id]);

    if (loading) return <p>Loading profile details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="profile-details">
            <img src={profile.photo} alt={profile.name} className="profile-photo-large" />
            <h1>{profile.name}</h1>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Description:</strong> {profile.description}</p>
        </div>
    );
};

export default ProfileDetails;
