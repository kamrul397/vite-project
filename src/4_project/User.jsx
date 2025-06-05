import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState([])
  const [error, setError] = useState(false)

  const loadUser = () => {
    setLoading(true)
  }

  useEffect(() => {
    if (loading) {
      const fetchdata = async () => {
        try {
          const res = await axios.get('https://api.github.com/users')
          const data = res.data.map((ele) => ({
            id: ele.id,
            name: ele.login,
            image: ele.avatar_url,
            email: ele.html_url
          }))
          setUserData(data)
        } catch (err) {
          setError(true)
        }
      }
      fetchdata()
    }
  }, [loading])

  if (error) {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
        <div className='display-1 text-danger'>Error</div>
        <p className='text-secondary'>Something went wrong while fetching data.</p>
      </div>
    )
  }

  return (
    <div className={`d-flex flex-column align-items-center justify-content-center ${loading ? 'h-100' : 'vh-100'}`}>
      <div className='display-1'>User Name</div>
      {loading ? (
        <div className='d-flex flex-column align-items-center justify-content-center text-secondary gap-2'>
          {userData.map((user) => (
            <div key={user.id} className='card d-flex flex-row align-items-center justify-content-between gap-2 p-3 mt-4 w-100'>
              <img src={user.image} alt={user.name} style={{ width: '50px', height: '50px' }} />
              <div className='d-flex flex-column align-items-start justify-content-center'>
                <div className='text-primary'>{user.name}</div>
                <p className='text-secondary'>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='d-flex flex-column align-items-center justify-content-center text-secondary gap-2'>
          <button className='btn btn-primary' onClick={loadUser}>
            Load user
          </button>
        </div>
      )}
    </div>
  )
}

export default User