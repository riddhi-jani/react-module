import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Add from "./Add"
import UserDetail from "./UserDetail";
import UserForm from "./UserForm";
import $ from "jquery";
export const properties = {
    queryTimeout: 500,
    authToken: Liferay.authToken,
    companyId: Liferay.ThemeDisplay.getCompanyId(),
    portalURL: Liferay.ThemeDisplay.getPortalURL(),
    userId:Liferay.ThemeDisplay.getUserId()
};

class App extends React.Component {

    options ={
        method: 'GET',
        headers: {
            'dataType':'json',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    }

    updateData = ()=> {

    }

    // fetch user
    componentDidMount(input, init) {

        fetch(`http://localhost:8080/api/jsonws/user/get-company-users/company-id/${properties.companyId}/start/-1/end/-1?p_auth=${properties.authToken}`,this.options)

            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dataFetched: true,
                        data: result
                    });
                    var object = JSON.stringify(result);

                    var parsedData = JSON.parse(object);
                    console.log(parsedData[1].firstName);

                    for ( var i=0;i<parsedData.length;i++){
                        this.Id = parsedData[i].userId

                        var e = $(
                            '<tr>' +
                            '<td class="cId" >'+parsedData[i].companyId+'</td>' +
                            '<td class="fname">'+parsedData[i].firstName+'</td>' +
                            '<td class="lname">'+parsedData[i].lastName+'</td>' +
                            '<td class="uId">'+parsedData[i].userId +'</td>' +
                            '<td class="greet">'+parsedData[i].greeting+'</td>' +
                            '<td class="sName">'+parsedData[i].screenName+'</td>' +
                            '<td class="email">'+parsedData[i].emailAddress+'</td>' +
                            '<td class="code" hidden="hidden">'+parsedData[i].externalReferenceCode+'</td>'+
                            '<td><button class="btn btn-primary update" type="button"  id="update'+i+'"  data='+this.Id+'>update</button>  <button class="btn btn-danger delete"  id="delete'+i+'" type="button" data='+this.Id+' >delete</button></td>'+

                            '</tr>');

                        console.log(parsedData);
                        $("#table-body").append(e)
                    }

                },
                (error) => {
                    this.setState({
                        error
                    });
                }

            )
    }

    render() {


        return (
            <div >
                <Add/>
                <UserDetail/>

               <UserForm/>
            </div>

        );
    }
}
export default App;