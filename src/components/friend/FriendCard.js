import { useLocation, useNavigate } from 'react-router-dom'
import UserCard from '../common/UserCard'
import axios from '../../config/axios'

function FriendCard({ friend, fetchData }) {
  const { profilePic, firstName, lastName, id } = friend
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClickAddFriend = async () => {
    try {
      await axios.post('/friends', { requestToId: id })
      await fetchData()
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickDeleteFriend = async () => {
    //   try {
    //     await axios.delete('/friends/' + id);
    //     await fetchData();
    //   } catch (err) {
    //     console.log(err);
    //   }
  }

  const handleClickAcceptFriend = async () => {
    try {
      await axios.patch('/friends/' + id)
      await fetchData()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
      <div className='card h-100 shadow rounded-lg'>
        <UserCard src={profilePic} />
        <div className='card-body'>
          <h6
            className='card-title hover-underline'
            role='button'
            onClick={() => navigate('/profile/' + id)}
          >
            {firstName} {lastName}
          </h6>
          {pathname === '/friend/request' && (
            <div className='d-grid gap-2'>
              <button
                className='btn btn-primary text-3.5'
                onClick={handleClickAcceptFriend}
              >
                Confirm
              </button>
              <button className='btn btn-gray-200 text-3.5'>Delete</button>
            </div>
          )}
          {pathname === '/friend/suggestion' && (
            <div className='d-grid gap-2'>
              <button
                className='btn btn-primary text-3.5'
                onClick={handleClickAddFriend}
              >
                Add Friend
              </button>
            </div>
          )}
          {pathname === '/friend' && (
            <div className='d-grid gap-2'>
              <button className='btn btn-gray-200 text-3.5'>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FriendCard
