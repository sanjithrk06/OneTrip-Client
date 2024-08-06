import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const param = useParams();

  return (
    <div>ProfilePage {param.profileId}</div>
  )
}

export default ProfilePage