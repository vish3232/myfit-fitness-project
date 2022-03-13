import { jsx, css } from '@emotion/react'
import Yoga from '../../assets/Yoga.png'
export const screen2=css`
    #banner {
    background-image: url(${Yoga});
    height: 70vh;
    background-repeat: no-repeat;
    background-position: 65% 0px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #fff;
    text-align: center;
    padding: 0px 5%;

    @media screen and (max-width: 600px) {
        p {
            font-size: 14px !important;
        }
        
        h2 {
            font-size: 24px !important;
        }

        h4 {
            font-size: 16px !important;
        }
        
        
    }

    h1 {
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

    @media screen and (max-width: 600px) {
        background-position: center;
        height: 50vh;
      
    }    
  }

  #section1{
    padding: 100px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 950px) {
        display: flex;
        flex-direction: column;
      
    }
    #column1 {
        width: 60%;
        position: relative;
        margin-right: 50px;

        @media screen and (max-width: 950px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          
        }
        h2 {
            font-size: 32px;
        }

        p {
            margin: 20px 0px;
            font-size: 16px;
            line-height: 1.5;
            color: #585858;
        } 
        
        button {
            background-color: #229480;
            padding: 15px 30px;
            border: none;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-size: 14px;

            @media screen and (max-width: 600px) {
                padding: 10px 20px;
 
            }

            img {
                height: 15px;
                margin-left: 15px;
              }
          }
          #dot-image1 {
            position: absolute;
            width: 20%;
            max-width: 100px;
            height: auto;
            top: -90px;
            z-index: -1;
            @media screen and (max-width: 950px) {
                left: 0px;
 
            }
          }
          #dot-image2 {
            position: absolute;
            width: 20%;
            max-width: 100px;
            height: auto;
            bottom: -50px;
            z-index: -1;
            @media screen and (max-width: 950px) {
                left: 0px;
 
            }
          }
    }

    #column2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        align-items: center;
        justify-items: center;

        @media screen and (max-width: 950px) {
            margin-top: 50px;

        }
        #card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            h4 {
                margin: 5px 0px;
                margin-top: 15px;
                font-size: 20px;
              }

              p {
                font-size: 16px;
                color: #585858;
                line-height: 1.5;
              }

              img {
                max-width: 71px;
                width: 25%;
              }
          }
      }

  }

  #section2 {
    margin: 0px 5%;
    background-color: #212121;
    border-radius: 20px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 20px;
    row-gap: 40px;

    #card {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 20px;

        > img {
            max-width: 112px;
            width: 6vw;
            min-width: 60px;
            margin-right: 20px;
          }

          h3 {
            font-size: 24px;
            font-weight: bold;
          }

          h5 {
            font-size: 16px;
            font-weight: 400;
          }
      }

    #card-center {
        border-left: 1px solid #707070;
        border-right: 1px solid #707070;
        @media screen and (max-width: 777px) {
            border: none;

        }
      }
  }

  #section3 {
    padding: 50px 5%;

    h2 {
        font-size: 32px;
        font-weight: 400;
        span {
            font-weight: 600;
          }
    }
    
    p {
        font-size: 16px;
        line-height: 1.5;
        max-width: 600px;
        width: 45%;
        color: #585858;
      }
    #grid {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(294px, 1fr));
        margin-top: 50px;
        align-items: center;
        justify-items: center;
      }
    #card {
        max-width: 294px;
        cursor: pointer;
        :hover{
            #hover-card {
                display: flex;
              }
        }
        
        #image-container {
            position: relative;

            img {
                width: 294px;
                height: 475px;
                object-fit: cover;
              }
        }

        #center {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;

            h6 {
                font-size: #000000;
                font-size: 18px;
                font-weight: 600;
              }
        }

        span {
            font-size: 16px;
            margin-top: 5px;
        }

        #hover-card {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000000c7;
            padding: 20px;
            justify-content: center;

            p {
                width: 100%;
                color: #ffffff;
            }

            button {
                width: 100%;
                background: transparent linear-gradient(89deg, #229480 0%, #2fc4a9 100%) 0% 0%
                  no-repeat padding-box;
                width: 120px;
                height: 42px;
                border-radius: 41px;
                font-size: 12px;
                font-weight: 600;
                border: none;
                color: #fff;
                margin-top: 20px;
                cursor: pointer;
              }
              
          }

      }
  }


`