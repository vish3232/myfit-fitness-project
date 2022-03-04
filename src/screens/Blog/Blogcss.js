import { jsx, css } from '@emotion/react'
import card1 from '../../assets/card1.png'
import downloadappbackground from '../../assets/Group632.png'

export const blog_main_container=css`
    position:relative;
    width:100%;
    display:flex;
    flex-direction:column;
    #blog-header-container{
        background-image: url(${card1});
        background-repeat: no-repeat;
        background-size: 100% 250px;   
        width:100%;
        height:300px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        opacity: 1;
        position:relative;
    
        span{
            font-family: 'Montserrat', sans-serif;
            font-size:40px;
            text-align: center;
            letter-spacing: 0px;
            color: #FFFFFF;
            @media screen and (max-width: 800px) {
                font-size:30px;
            }
        }

        p{
            margin-top:0.5%;
            font-family: 'Montserrat', sans-serif;
            font-size:18px;
            text-align: center;
            letter-spacing: 0px;
            color: #FFFFFF;
            @media screen and (max-width: 800px) {
                font-size:12px;
            }
        }
    }

    #blog-image-container{
        width:100%;
        display:flex;
        flex-direction:column;
        align-item:flex-start;
        justify-content:flex-start;
    }

    #profile-image{
        position:absolute;
        left:5%;
        bottom:0%;
        width: 150px;
        height: 150px;
        @media screen and (max-width: 800px) {
            left:5%;
        bottom:0%;
        width: 100px;
        height: 100px;
        
        }
        img{
            width:100%;
            height:100%;
            object-fit:contain;
        }
    }

    #blog-content-container{
        width:100%;
        display:flex;
        flex-direction:column;
        align-item:flex-start;
        justify-content:flex-start;
        padding-left:4%;
        padding-right:4%;
        h4{
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:18px;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
        }

        span{
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:20px;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
            font-weight:600;

            img{
                width:100%;
                height:400px;
                
            }
        }

       
    }

    #download-app-container{
        margin-top:2%;
        margin-right:5%;
        align-self:flex-end;
        width:25%;
        height:250px;
        background-image: url(${downloadappbackground});
        background-repeat: no-repeat;
        background-size: 100% 100%;   
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        
        @media screen and (max-width: 900px) {
            z-index:10;
        }
        div{
            width:80%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;

            img{
                width:48%;
                height:72px;
                object-fit:contain;
            }
        }

        #download-header{
            margin-right:5px;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:28px;
            font-weight:bold;
            letter-spacing: 0px;
            color: #040404;
            @media screen and (max-width: 1100px) {
                font-size:22px;
            
            }

            @media screen and (max-width: 900px) {
                font-size:18px;
            
            }
            @media screen and (max-width: 650px) {
                font-size:12px;
            
            }
            @media screen and (max-width: 450px) {
                font-size:8.5px;
            
            }
        }

        span{
            width:90%;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:12px;
            letter-spacing: 0px;
            color: #585858;
            @media screen and (max-width: 900px) {
                font-size:10px;
            
            }
            @media screen and (max-width: 900px) {
                font-size:8px;
            
            }
        }

        #App-header{
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:28px;
            font-weight:bold;
            letter-spacing: 0px;
            color: #2FC4A9;
            @media screen and (max-width: 1100px) {
                font-size:22px;
            
            }
            @media screen and (max-width: 900px) {
                font-size:18px;
            
            }
            @media screen and (max-width: 650px) {
                font-size:12px;
            
            }
            @media screen and (max-width: 450px) {
                font-size:8.5px;
            
            }
        }
    }   

`