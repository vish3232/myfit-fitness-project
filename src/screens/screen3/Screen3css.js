import { jsx, css } from '@emotion/react'
import Screen3 from '../../assets/Screen3.png'

export const screen3=css`
    #banner {
        background-image: url(${Screen3});
        height: 50vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    #grid {
        padding: 50px 50px;
        display: grid;
        grid-template-columns: 318px 1fr;
        gap: 20px;

        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
 
        }
        @media screen and (max-width: 700px) {
            padding: 20px;
 
        }
        #column1{
            @media screen and (max-width: 1000px) {
                width: 318px;
  
            }
            @media screen and (max-width: 360px) {
                width: 100%
                #profile {
                    width: 100%
                  }
            }

            #image-row {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
    
                img {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                  }
              } 

        }

        #column2 {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            @media screen and (max-width: 1000px) {
                margin-left: 0px;
 
            }
            h2 {
                font-size: 26px;
            }

            #sub-title {
                color: #444343;
                font-size: 18px;
            }

            #next-section {
                margin-top: 50px;
              }
            p {
                color: #585858;
                margin-top: 15px;
            }

            #tags-container {
                display: flex;
                flex-wrap: wrap;

                span {
                    background-color: #d9d9d9;
                    padding: 10px 20px;
                    border-radius: 32px;
                    margin-right: 10px;
                    font-size: 16px;
                    margin-top: 15px;
                  }
            }

            #certificate-container {
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
                gap: 20px;
                @media screen and (max-width: 500px) {
                    margin-bottom: 100px;

                }
                #card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;

                    img {
                        width: 154px;
                        height: 131px;
                        margin-bottom: 10px;
                      }
                  }
              }
            
            
          }
    }

    

    
`