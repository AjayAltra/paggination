import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedUser, removeSelectedUser, changeUserEmail } from '../redux/actions/userActions';

const UserDetails = () => {
    const user = useSelector((state) => state.user);
    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId && userId !== "") fetchData();
        return () => {
            dispatch(removeSelectedUser());
        }
    }, [userId]);

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3002/users/${userId}`);
        const data = await res.json();
        dispatch(selectedUser(data));
    }

    const saveData = async () => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        };
        const res = await fetch(`http://localhost:3002/users/${userId}`, requestOptions);
        const data = await res.json();
        if (data.acknowledged === true) {
            alert("Data changed");
        } else {
            alert("Error");
        }
    }

    return (
        <div className="my-container">
            <div className="card shadow p-3 mb-5 bg-body rounded" >
                <div className='card-body'>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label className="col-form-label">Name</label>
                        </div>
                        <div className="col-9">
                            <input type="text" readOnly className="form-control" value={user.name} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col-3">
                            <label className="col-form-label">Email</label>
                        </div>
                        <div className="col-9">
                            <input type="email" className="form-control" value={user.email} onChange={e => dispatch(changeUserEmail(e.target.value))} />
                        </div>
                    </div>
                    <div className='row mb-3 justify-content-end'>
                        <div className="col-6 ">
                            <Link to="/" className='btn btn-primary w-50'>Close</Link>
                            <button type="button" onClick={() => saveData()} className='btn btn-success w-50'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserDetails;