import { jsx, css } from '@emotion/react'

export const FitnessReadMainContainer=css`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    justifyContent:flex-start;
    
    #fitness-read-header-image-container{
        margin-top:2%;
        display:flex;
        width:100%;
        flex-direction:row;
        align-items:flex-start;
        justify-content:space-between;
        padding:2%;
        @media screen and (max-width: 600px) {
            flex-direction:column;
            align-items:center;
       
       
        }
        

    }

    #fitness-read-header-container{
        width:45%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        @media screen and (max-width: 600px) {
            width:80%;
       
        }
        
        span{
            text-align: left;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
            font-family: 'Montserrat', sans-serif;
            font-size:40px;
            @media screen and (max-width: 800px) {
                font-size:32px;
             
            }
            @media screen and (max-width: 600px) {
                font-size:30px;
             
            }
            b{
                text-align: left;
                letter-spacing: 0px;
                color: #000000;
                opacity: 1;
                font-family: 'Montserrat', sans-serif;
                font-size:40px;
                @media screen and (max-width: 800px) {
                    font-size:32px;
                 
                }
                @media screen and (max-width: 600px) {
                    font-size:30px;
                 
                }
               
            }
        }

        p{
            margin-top:3%;
            text-align: left;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
            font-family: 'Montserrat', sans-serif;
            font-size:16px;
            
        }
    }

    #fitness-read-image-container{
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

    #grid{
        margin-top:2%;
        margin-bottom:2%;
        width: 100%;
        padding: 0px 30px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        padding-bottom: 30px;

    }

    #image_card{
        position:relative;
        width:100%;
        height:40vh;
        display:flex;
        flex-direction:column;
        align-tems:flex-start;
        justify-content:flex-start;
        
        img{
            width:100%;
            height:100%;
            object-fit:contain;
           
        }
        div{
            width:80%;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px -13px 91px #00000029;
            border-radius: 8px;
            opacity: 1;
            position:absolute;
            top:80%;
            left:10%;
            padding:2%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:flex-start;
            height:120px;
            @media screen and (max-width: 1050px) {
                top:70%;
                height:100px;
            }
            @media screen and (max-width: 850px) {
                top:60%;
                height:110px;
            }
            @media screen and (max-width: 500px) {
                top:75%;
                height:80px;
            }
            h4{
                text-align: left;
                font-size:16px;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 0px;
                color: #000000;
                opacity: 1;
                @media screen and (max-width: 1050px) {
                    font-size:12px;
                
                }
                @media screen and (max-width: 850px) {
                    font-size:10px;
                
                }
            }

            p{
                text-align: left;
                font-size:10px;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 0px;
                color: #656565;
                opacity: 1;
                @media screen and (max-width: 1050px) {
                    font-size:8px;
                
                }
                @media screen and (max-width: 850px) {
                    font-size:8px;
                
                }
            }
            span{
                width:100%;
               
                 display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:flex-start;

                img{
                    width:20px;
                    height:20px;
                    opacity: 1;
                    border-radius:10px;
                }

                p{
                    margin-left:2%;
                    text-align: left;
                    font-size:10px;
                    font-family: 'Montserrat', sans-serif;
                    letter-spacing: 0px;
                    color: #000000;
                    opacity: 1;
                    font-weight:bold;
                    @media screen and (max-width: 850px) {
                        font-size:8px;
                    
                    }
                }
            }
        }
    }


`