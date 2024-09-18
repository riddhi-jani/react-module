
import React from "react";
import {properties} from "./App";
import $ from "jquery";
class UserForm extends React.Component{

    submitForm() {

        var userId = properties.userId
        const code = $("#code").val();

        var formData = {
            externalReferenceCode:code,
            creatorUserId: userId,
            companyId: Liferay.ThemeDisplay.getCompanyId(),
            autoPassword: true,
            password1: '',
            password2: '',
            autoScreenName: false,
            screenName: $("#screenName").val(),
            emailAddress: $("#email").val(),
            locale: '',
            firstName: $("#fname").val(),
            middleName: '',
            lastName: $("#lname").val(),
            prefixId: 0,
            suffixId: 0,
            male: true,
            birthdayMonth: 1,
            birthdayDay: 1,
            birthdayYear: 2001,
            jobTitle: '',
            addresses: '',
            emailAddresses: '',
            phones: '',
            websites: '',
            sendEmail: false
        };

        $.ajax({
            type: "POST",
            url: `http://localhost:8080/api/jsonws/user/add-or-update-user?p_auth=${properties.authToken}`,
            data: formData,
            dataType: "json",
            encode: true,
        })
            .done(function (data) {

                location.reload();
                alert("successfull")

            })
            .fail(function (data) {

                console.log("error")
            });


    };
    render() {
        return(
            <form  name="form" id="form" data="add" onSubmit={this.submitForm}   >
                <div className="form-group">
                    <label htmlFor="screenName">Screen Name</label>
                    <input type="text" className="form-control" id="screenName" placeholder="Enter Screen name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                           placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="fname" aria-describedby="emailHelp"
                           placeholder="Enter first name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lname" aria-describedby="emailHelp"
                           placeholder="Enter last name" />
                    <input type="hidden" className="form-control" id="code" aria-describedby="emailHelp"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}


export default UserForm;