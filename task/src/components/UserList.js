import React, { useEffect } from 'react';
import UserComponent from './UserComponent';
import PaginationComponent from './PaginationComponent';


const UserList = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-12">
                    <UserComponent />
                </div>
                <div className='col-12'>
                    <PaginationComponent />
                </div>
            </div>
        </div>
    );
}

export default UserList;