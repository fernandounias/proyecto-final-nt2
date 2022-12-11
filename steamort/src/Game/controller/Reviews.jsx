import React from 'react'

const reviews = () => {
  return (
    <>
    <div className='reviewList'>
        <div className='review-box'>
            <div className="rating"></div>
            <div className="userInfo">
                <img src="user.avatar.url" alt="user.name" className="avatar" />
            </div>
        </div>
    </div>
    </>
  )
}

export default reviews