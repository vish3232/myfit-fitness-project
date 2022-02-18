import { jsx, css } from '@emotion/react'
import card1 from '../../assets/card1.png'
import downloadappbackground from '../../assets/Group632.png'

export const blog_main_container=css`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
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
        }

        p{
            margin-top:0.5%;
            font-family: 'Montserrat', sans-serif;
            font-size:18px;
            text-align: center;
            letter-spacing: 0px;
            color: #FFFFFF;
        
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
        width:30%
        height:340px;
        background-image: url(${downloadappbackground});
        background-repeat: no-repeat;
        background-size: 30% 350px;   
    
    }

`