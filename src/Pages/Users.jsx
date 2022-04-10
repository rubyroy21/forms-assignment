import React from 'react';

export const Users = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:8080/users`)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err))
    }, [])

    return (
        <table style = {{border: "1px solid tomato"}}>
            <thead>
                <tr>
                    <th style={{ border : "1px solid tomato"}}>Name</th>
                    <th style={{ border : "1px solid tomato"}}>Age</th>
                    <th style={{ border : "1px solid tomato"}}>Date of Birth</th>
                    <th style={{ border : "1px solid tomato"}}>State of Residence</th>
                    <th style={{ border : "1px solid tomato"}}>Address</th>
                    <th style={{ border : "1px solid tomato"}}>Pincode</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return <tr>
                        <td style={{ border : "1px solid tomato"}}>{user.name}</td>
                        <td style={{ border : "1px solid tomato"}}>{user.age}</td>
                        <td style={{ border : "1px solid tomato"}}>{user.dateOfBirth}</td>
                        <td style={{ border : "1px solid tomato"}}>{user.stateOfResidence}</td>
                        <td style={{ border : "1px solid tomato"}}>{user.address}</td>
                        <td style={{ border : "1px solid tomato"}}>{user.pincode}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}