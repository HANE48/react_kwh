import React from 'react';
import { Link } from 'react-router-dom';

export default function UserList(props) {
    return (
        <div>
            {
                props.users.map((user) => (
                    <div class='card mb-2'>
                        <div class='card-body'>
                            <Link to={'/user/' + user.id}>{user.name}</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
