import { jsx, css } from '@emotion/react'
import close from '../../assets/close.png'
export const popup_container=css` 
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    padding: 20px;

    #card {
        padding: 30px;
        background-color: #fff;
        width: calc(100vw - 35vw);
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
            height: auto;
        }

        h1 {
            font-size: 58px;
            color: #676767;
            font-weight: bold;
            margin-top: 10px;
            @media screen and (max-width: 850px) {
                font-size: 38px;
            }
            @media screen and (max-width: 530px) {
                font-size:22px;
            }
        }

        span {
            color: #676767;
            font-size: 25px;
            @media screen and (max-width: 850px) {
                font-size: 22px;
            }
            @media screen and (max-width: 530px) {
                font-size:16px;
            }
        }

        strong {
            font-size: 25px;
            color: #676767;
            margin-left: 20px;
            @media screen and (max-width: 850px) {
                font-size: 22px;
            }
            @media screen and (max-width: 530px) {
                font-size:16px;
            }
        }

        h5 {
            color: #676767;
           font-size: 20px;
           font-weight: 600;
           margin: 10px 0px;
           @media screen and (max-width: 850px) {
            font-size: 18px;
           }
           @media screen and (max-width: 530px) {
            font-size:15px;
            }
        }

        p {
            color: #676767;
            font-size: 18px;
            @media screen and (max-width: 850px) {
                font-size: 16px;
            }
            @media screen and (max-width: 530px) {
                font-size:15px;
            }
        }

        #column {
            margin: 10px 0px;
         }


        #close-button {
            height: 40px;
            width: 40px;
            background-image: url(${close});
            background-size: contain;
            margin-bottom: 10px;
            align-self: flex-end;
            @media screen and (max-width: 530px) {
                height: 25px;
                width: 25px;
            }
        }

        @media screen and (max-width: 850px) {
            width: calc(100vw - 20vw);
    
        }

        @media screen and (max-width: 530px) {
            padding: 20px;
            width: calc(100vw - 10vw);
     
        }
    }

     
`

