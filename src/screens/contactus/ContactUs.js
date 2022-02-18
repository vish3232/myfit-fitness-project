/** @jsxImportSource @emotion/react */

import React from 'react'
import {contact_us_main_container} from './ContactUscss.js'
import contactus from '../../assets/contactus.png'
import { Button,Icon } from 'semantic-ui-react'
const ContactUs=()=>{
    return(
        <div css={contact_us_main_container} >
            <div id="contact-us-container" >
                <div id="contact-us-form" >
                    <h3>WE CARE ABOUT YOU</h3>
                    <p>Have something to tell us? We'd love to hear it! Fill this form and we'll get back to you as soon as possible.</p>
                    <div id="contact-us-form-header-container" >
                       <div>
                       <h1>First Name</h1>
                        
                       </div>
                       <div>
                       <h1>Last Name</h1>
                   
                       </div>
                    </div>

                    <div id="contact-us-form-input-container" >
                        <div>
                            <input />
                        </div>
                        <div>
                            <input/>
                        </div>
                    </div>

                    <div id="contact-us-form-header-container" >
                       <div>
                       <h1>Email Id</h1>
                        
                       </div>
                       <div>
                       <h1>Mobile No.</h1>
                   
                       </div>
                    </div>

                    <div id="contact-us-form-input-container" >
                        <div>
                            <input />
                        </div>
                        <div>
                            <input/>
                        </div>
                    </div>

                    <div id="your-message-header-container" >
                        <h1>Your Message</h1>
                    </div>

                    <div id="your-message-input-container" >
                        <input/>
                    </div>

                    <div id="submit-button-contaier" >
                    <button class="ui button">Submit</button>
                    </div>
                    
                </div>
                

                <div id="contact-us-image-container" >
                    <img src={contactus} />
                </div>
            </div>

            <div id="FAQ-container" >
                <h3>FAQ</h3>
                <div>
                    <span>
                    <h1>What is the price of this service?</h1>
                    <Icon id="dropdown-icon"  name='angle down' />
                    </span>
                    <p>id eu habitasse et deserunt felis tincidunt felis ut donec platea elit, a augue ligula pariatur. ex nulla ad mauris. esse sunt magna lobortis integer neque. proident, fugiat</p>
                </div>

                <div>
                    <span>
                    <h1>What is the price of this service?</h1>
                    <Icon id="dropdown-icon"  name='angle down' />
                    </span>
                </div>

                <div>
                    <span>
                    <h1>What is the price of this service?</h1>
                    <Icon id="dropdown-icon"  name='angle down' />
                    </span>
                </div>

                <div>
                    <span>
                    <h1>What is the price of this service?</h1>
                    <Icon id="dropdown-icon"  name='angle down' />
                    </span>
                </div>

                <div>
                    <span>
                    <h1>What is the price of this service?</h1>
                    <Icon id="dropdown-icon"  name='angle down' />
                    </span>
                </div>

                
            </div>


        </div>
    )
}

export default ContactUs