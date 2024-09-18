
import React from 'react'
class UserDetail extends React.Component{

    render() {
        return(

            <table id="table" class="table-responsive"> 
                <thead>
                    <tr>
                        <th>Company ID </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User ID</th>
                        <th>Greeting</th>
                        <th>Screen Name</th>
                        <th>Email Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="table-body">

                </tbody>
            </table>
        )
    }
}

export default UserDetail;