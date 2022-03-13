import { jsx, css } from '@emotion/react'
import banner from '../../assets/banner.png'
export const screen1=css`
    #banner{
        background-image:url(${banner}) ;
        height: 70vh;
        background-repeat: no-repeat;
        background-position: 10% 0px;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-align: center;
        @media screen and (max-width: 600px) {
            background-position: center;
            height: 50vh;
        }

        h1{
            font-size: 50px;
            font-weight: 600;
            @media screen and (max-width: 600px) {
                font-size: 25px;
                font-weight: 600;
            }
        }

        h6 {
            font-size: 20px;
            font-weight: 400;
            @media screen and (max-width: 600px) {
                font-size: 14px;
                font-weight: 400;
              
            }
        }


    }

    #section2{
        display: grid;
        grid-template-columns: 45% 55%;
        align-items: center;
        justify-items: center;
        padding: 50px;
        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
  
        }
        @media screen and (max-width: 600px) {
            padding: 30px;
  
        }

        #info{

            padding: 10%;
            @media screen and (max-width: 1000px) {
                padding: 0px;
                margin-bottom: 20px;
            }
            h2 {
    
                font-size: 32px;
                @media screen and (max-width: 600px) {
                    font-size: 24px;
                }
            }
            p{
                margin-top: 15px;
                color: #585858;
                @media screen and (max-width: 600px) {
                    font-size: 14px;
                    margin-top: 10px;
                }
            }
    
        }

        #image{
            position: relative;
            img {
                width: 100%;
            }
            
            #dot-image{
                position: absolute;
                width: 100px;
                left: 0px;
                bottom: -30px;
                left: -30px;
                @media screen and (max-width: 600px) {
                    position: absolute;
                    width: 60px;
                    left: 0px;
                    bottom: -15px;
                    left: -15px;
                 
                }
            }
        
        }


    }

    

    

    
    #section3{
        background-color: #fbfbfb;
        padding: 50px;
        position: relative;
        @media screen and (max-width: 600px) {
            padding: 50px 10px;
        }

        h2 {
            font-size: 32px;
            text-align: center;
            @media screen and (max-width: 600px) {
                font-size: 24px;
            }
        }
        
        #dot-image {
            position: absolute;
            width: 100px;
            top: -35px;
        }

        #grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            justify-items: center;
            @media screen and (max-width: 750px) {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
             
            }
        }

        #card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            font-size: 24px;
            @media screen and (max-width: 600px) {
                font-size: 18px;
                text-align: center;
                img {
                    width: 50px;
                  }
            }
            h6 {
                margin-top: 10px;
              }

          }

          #hide {
            @media screen and (max-width: 1000px) {
 
            display: none;
            }
          }

    }

    #section4 {
        
        padding: 50px;
        position: relative;
        @media screen and (max-width: 600px) {
            padding: 50px 20px;

        }
        @media screen and (max-width: 600px) {
            padding: 50px 20px;
   
        }
        h2 {
            font-size: 32px;
            @media screen and (max-width: 600px) {
                font-size: 24px;
  
            }
        }
        #underline {
            height: 5px;
            width: 120px;
            background-color: #2fc4a9;
            margin-top: 10px;
        }
        #grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin-top: 20px;
            justify-items: center;
            align-items: center;
            @media screen and (max-width: 900px) {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
          }

          #card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 0px 13px #00000029;
            background-color: #ffffff;
            width: 100%;
            > img {
                width: 100%;
            }
            h4 {
                margin-top: 10px;
                font-size: 16px;
                @media screen and (max-width: 600px) {
                    font-size: 14px;
                    font-weight: 500;
                 
                }
              }

            button {
                background-color: #229480;
                padding: 10px 15px;
                border: none;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                font-size: 12px;
                margin-top: 15px;
                margin-bottom: 20px;

                img {
                    height: 15px;
                    margin-left: 10px;
                  }
              }
            #center {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
          }

          #svg {
            position: absolute;
            width: 100vw;
            left: 0px;
            bottom: -25%;
            z-index: -1;
            @media screen and (max-width: 900px) {
                width: 100vw;
                bottom: -10%;
             
            }
            @media screen and (max-width: 640px) {
                display: none;
  
            }
            @media screen and (max-width: 600px) {
                width: 100vw;
                bottom: -10%;
           
            }
          }
    }

`