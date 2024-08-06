'use client'
import React from 'react'
import ".././globals.css";

export default function address() {
    return (
        <div className='border-bottom'>
            <h3 className='fw-500 text-center py-2'>Add Shiping Address</h3>

            <div className='add-shiping'>
                <form className='algin-center'>
                    <div className='my-5'>
                        <label>
                            <span>Name</span></label>
                        <input className='ms-3' type="text" id="firstname" value="John" />
                        <label className='ms-3'>
                            <span>Last Name</span></label>
                        <input className='ms-3' type="text" id="lastname" value="lute" />
                    </div>

                    <div className='my-5 d-flex shiping-address'>
                        <label>
                            <span>Address</span></label>
                        <textarea className='ms-3'></textarea>

                    </div>

                    <div className='my-5 shiping-dis'>
                        <label>
                            <span>Country</span></label>
                        <select className='ms-3'>
                            <option>--Country--</option>
                            <option>India</option>
                            <option>Pakisthan</option>
                            <option>Shri Lanka</option>
                            <option>China</option>
                        </select>

                        <label className='ms-3'>
                            <span>state</span></label>
                        <select className='ms-3'>
                            <option>--Country--</option>
                            <option>India</option>
                            <option>Pakisthan</option>
                            <option>Shri Lanka</option>
                            <option>China</option>
                        </select>

                        <label className='ms-3'>
                            <span>City</span></label>
                        <select className='ms-3'>
                            <option>--City--</option>
                            <option>Jaipur</option>
                            <option>Jodhpur</option>
                            <option>Bikaner</option>
                            <option>Barmer</option>
                        </select>
                    </div>

                    <div className='my-5'>
                        <label>
                            <span>Zip/Pincode</span></label>
                        <input className='ms-3' type="text" />
                       
                    </div>

                    <div className='my-5'>
                        <button className='btn btn-primary button-add'>Add Shiping</button>
                       
                    </div>


                </form>
            </div>
        </div>
    )
}
