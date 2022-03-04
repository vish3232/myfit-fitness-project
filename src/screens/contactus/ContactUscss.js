import { jsx, css } from '@emotion/react'

export const contact_us_main_container=css`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    justifyContent:flex-start;
   
    #contact-us-container{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-evenly;
        width:100%;
        background-color:#FFFFFF;

        @media screen and (max-width: 600px) {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-evenly;
            width:100%;
            background-color:#FFFFFF;
    
        }

    }

    #contact-us-form{
        display:flex;
        width:45%;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;

        @media screen and (max-width: 600px) {
            width:80%;
        
        }
        
        h3{
            text-align: left;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
            font-family: 'Montserrat', sans-serif;
            font-weight:bold;
            font-size:50px;
        }

        p{
            text-align: left;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
            font-family: 'Montserrat', sans-serif;
            font-size:24px;
         
        }
    }

    #contact-us-image-container{
        width:45%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        @media screen and (max-width: 600px) {
            width:80%;
        
        }
        img{
            width:90%;
            height:90%;
            object-fit:contain;
                    
        }
    }

    #contact-us-form-header-container{
        margin-top:2%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        width:100%;
        
        div{
            width:50%;
        }

        h1{
            font-family: 'Montserrat', sans-serif;
            font-size:20px;
            font-weight:600;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
        }
    }

    #contact-us-form-input-container{
        margin-top:1%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        width:100%;
        
        div{
            width:50%;
        }

        input{
            height:35px;
            width:90%;
            box-shadow: inset 0px 3px 6px #00000029, 0px 3px 6px #00000029;
            border: 1px solid #707070;
            border-radius: 5px;
            opacity: 1;
        }
    }
    
    #your-message-header-container{
        margin-top:1%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        width:100%;
        
        h1{
            font-family: 'Montserrat', sans-serif;
            font-size:20px;
            font-weight:600;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
         
        }
    }

    #your-message-input-container{
        margin-top:1%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        width:100%;
        input{
            height:104px;
            width:95%;
            box-shadow: inset 0px 3px 6px #00000029, 0px 3px 6px #00000029;
            border: 1px solid #707070;
            border-radius: 5px;
            opacity: 1;
        }
        
    }

    #submit-button-contaier{
        margin-top:1%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-end;
        width:92%;
        
        button{
            width:156px;
            height:40px;
            background-color:#229480;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 7px;
            opacity: 1;
            font-family: 'Montserrat', sans-serif;
            font-size:14px;
            
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
        }
    }

    #FAQ-container{
        display:flex;
        flex-direction:column;
        width:100%;
        align-items:flex-start;
        justify-content:flex-start;
        background: #F8F8F8;
        padding-top:2%;
        padding-left:3%;
        padding-right:3%;
        padding-bottom:3%;

        h3{
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:40px;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
        }

        div{
            margin-top:2%;
            width:100%;
            height:150px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 10px #00000029;
            border-radius: 17px;
            opacity: 1;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:space-evenly;
            padding:2%;
            @media screen and (max-width: 600px) {
                height:170px;
           
            }
            span{
                width:100%;
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:space-between;

                #dropdown-icon{
                    font-size:40px;
                    @media screen and (max-width: 600px) {
                        font-size:30px;
                    
                    }
                }

                h1{
                    text-align:left;
                    font-family: 'Montserrat', sans-serif;
                    font-size:20px;
                    letter-spacing: 0px;
                    color: #000000;
                    opacity: 1;

                    @media screen and (max-width: 600px) {
                        font-size:16px;
                    
                    }
                
                }

                
            }
            p{
                width:98%;
                text-align:left;
                font-family: 'Montserrat', sans-serif;
                font-size:18px;
                
                letter-spacing: 0px;
                color: #000000;
                opacity: 1;
                @media screen and (max-width: 600px) {
                    font-size:14px;
                
                }
            }
        }
    }
`