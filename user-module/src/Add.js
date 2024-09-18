
import React, {useState} from 'react';

//display form
import $ from "jquery";
import {properties} from "./App";

function showForm()
{
    document.getElementById('form').style.display = 'block';
}
//update user
$(document).on("click", ".update", (e)=>{

    let data = [];
    let target = e.srcElement || e.target;
    while (target && target.nodeName !== "TR") {
        target = target.parentNode;
    }
    if (target) {
        let cells = target.getElementsByTagName("td");
        for (let i = 0; i < cells.length-1; i++) {
            data.push(cells[i].innerHTML);
        }
    }
    console.log("code"+data)
    $('#fname').val(data[1])
    $('#lname').val(data[2])
    $('#screenName').val(data[5])
    $('#email').val(data[6])
    $('#code').val(data[7])

    $('#form').attr('data','update')

    showForm()

})

$(document).on("click", ".delete", function(){
    //do something
    var id = $(this).attr('data');
    console.log("delete " +id)
    fetch(`http://localhost:8080/api/jsonws/user/delete-user?p_auth=${properties.authToken}&userId=${id}`, {
        method: 'GET'
    }).then(function(response) {

        location.reload();
        alert("Successfully removed")
    }).catch(function(err) {

    });

});


class Add extends React.Component {

    render() {
        return(
            <button className="btn btn-primary" onClick={showForm}> Add User </button>
        )
    }
}

export default Add;