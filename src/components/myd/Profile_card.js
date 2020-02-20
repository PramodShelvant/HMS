import React from 'react'

export default function Profile_card() {
    return (
        <>
          <div class="card shadow">
        <img src="../assests/bg.jpg" class="card-img-top" />
        <div class="card-body">
        <h5 class="card-title">Mr.Patient</h5>
        <hr/>
        <h5 class="card-title">Blood Group</h5>
            <div class="card-text">A+</div>
        <hr/>
        <h5 class="card-title">Contact Number</h5>
          <div class="card-text">0987654321</div>
          <hr/>
          <h5 class="card-title">Age</h5>
            <div class="card-text">39</div>
            <hr/>
             <h5 class="card-title">Address</h5>
             <div class="card-text">Banglore</div>
          </div>
        </div>   
        </>
    )
}
