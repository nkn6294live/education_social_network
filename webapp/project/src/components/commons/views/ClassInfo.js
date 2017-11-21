import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ClassInfo = ({classDetail}) => {
    const {id, className, fullName, profilePictureUrl} = classDetail

    return(
        <div>
            <Link to={`/classes/${id}`} className="black-none-under">
                <span className="class-full-name">{fullName}</span>
            </Link>
        </div>
    )
}

export default ClassInfo