import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

const ProfilesPage = () => {
    const profiles = [1, 2, 3, 4, 5];


  return (
    <>
        <div className=' flex flex-col gap-2'>
        {profiles.map((profile) => (
            <NavLink key={profile} to={`/profiles/${profile}`} 
                className={({isActive}) => {
                    return isActive ? 'text-blue-700' : ''
                }}
            >
                Profile {profile}
            </NavLink>
        ))}
        <Outlet />
        </div>
    </>
  )
}

export default ProfilesPage