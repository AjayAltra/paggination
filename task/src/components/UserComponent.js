import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageCount, setUsers } from '../redux/actions/userActions';

const UserComponent = () => {
    const { currentPage, pageCount, size, users } = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch(`http://localhost:3002/users?page=${currentPage}&size=${size}`);
            const data = await res.json();
            dispatch(setPageCount(Math.ceil(data.total / size)));
            dispatch(setUsers(data.data));
        }
        getPosts();
    }, [currentPage]);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.created_date}</td>
                            <td><Link to={`/user/${user._id}`} >View</Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
}

export default UserComponent;