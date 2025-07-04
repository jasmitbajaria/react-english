import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // Now 'data' will be an object containing both 'userData' and 'followersList'
  const { userData, followersList } = useLoaderData();

  return (
    <div className="bg-gray-700 text-white text-3xl text-center py-5">
      {/* Display User Profile Picture and Follower Count */}
      {userData && ( // Ensure userData is available before trying to access its properties
        <>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s profile`}
            className="rounded-full mx-auto mb-4"
            width="150"
            height="150"
          />
          <p>GitHub Profile: {userData.login}</p>
          <p>Followers: {userData.followers}</p> {/* Total followers count */}
        </>
      )}

      {/* Display Followers List */}
      <h2 className="text-2xl mt-8 mb-4">Followers List:</h2>
      {followersList && followersList.length > 0 ? (
        <ul>
          {followersList.map((item) => {
            return (
              <li key={item.id} className="text-xl py-1">
                {item.login}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No followers found.</p>
      )}
    </div>
  );
}

export default Github;

// The loader function that fetches data before the component renders
export const gitHubInfoLoader = async () => {
  const username = "jasmitbajaria";

  try {
    // Fetch user profile data (for avatar_url and total followers count)
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    if (!userResponse.ok) {
      throw new Error(`Failed to fetch user data: ${userResponse.status}`);
    }
    const userData = await userResponse.json();

    // Fetch followers list
    const followersResponse = await fetch(
      `https://api.github.com/users/${username}/followers`
    );
    if (!followersResponse.ok) {
      throw new Error(
        `Failed to fetch followers list: ${followersResponse.status}`
      );
    }
    const followersList = await followersResponse.json();

    // Return an object containing both sets of data
    return { userData, followersList };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    // You might want to throw an error or return a specific error object
    // that your component can handle to display an error message.
    // For now, let's return empty data so the component doesn't crash.
    return { userData: null, followersList: [] };
  }
};
