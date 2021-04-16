import React from 'react'
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
    render() {
        return (
            <div>

                {/* <div>
                 {profiles.map((profDetail, index) => {
                        return <div>
                            <strong>{profDetail.firstName}</strong>
                        </div>
                    })}
                </div> */}
                {profiles.map((profDetail, index) => {
                    return  <div className="box">

                <img src={profDetail.img} className="facebook-image" alt="profile picture" />
                <div className="user-data">
                    <span>
                    <strong>First Name:</strong> {profDetail.firstName}
                    </span>
                    <span>
                    <strong>Last Name:</strong> {profDetail.lastName}
                    </span>
                    <span>
                    <strong>Country:</strong> {profDetail.country}
                    </span>
                    <span>
                    <strong>Type:</strong> {profDetail.isStudent ? 'Student' : 'Teacher'}
                    </span>
                </div>

                            </div>
                }) }
            </div>
        )
    }
}

export default FaceBook