import { jsx, css } from '@emotion/react'

export const workout_container=css`
    background-color: #f9f9f9;
    padding: 0px 30px;
    @media screen and (max-width: 770px) {
        padding: 20px 10px;
        background-color: #f9f9f9;
      }
      @media screen and (max-width: 500px) {
          padding: 20px 10px;
          background-color: #f9f9f9;
        }
      
    
  `
  
  export const main_card=css`
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 0.98;
    backdrop-filter: blur(37px);
    -webkit-backdrop-filter: blur(37px);
    display: flex;
    justify-content: center;
  `
  export const card=css`
    width: 90%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 12px 11px #00000029;
    border-radius: 25px;
    margin-top: 70px;
    margin-bottom: 70px;
  `
  export  const top_section=css` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 0px 25px;
    @media screen and (max-width: 500px) {
       padding: 10px 10px;
       img {
        height: 40px;
      }
      }
      @media screen and (max-width: 400px) {
    
        img {
          height: 40px;
        }
      }
    
  `
  export  const input_wrapper=css` 
    border: 0.699999988079071px solid #cecece;
    border-radius: 45px;
    height: 50px;
    width: 40%;
    min-width: 300px;
    display: flex;
    align-items: center;
    input {
      border: none;
      height: 40px;
      width: 60%;
      margin-left: 5%;
      outline: none;
    }
    button {
    width: 40%;
    height: 50px;
    border-radius: 45px;
    border: none;
    background: #229480 0% 0% no-repeat padding-box;
    border-radius: 32px;
    color: #ffffff;
  }
  @media screen and (max-width: 500px) {
   
      height: 40px;
      min-width: 250px;
      input {
        height: 30px;
      }

      button {
        height: 40px;
      }
    
    }

    @media screen and (max-width: 400px) {
        height: 40px;
        min-width: 200px;
      }
    
  
  `
  
  
  
  
  
  /* video section */
  export const video_section=css` 
    background-color: #fcfcfc;
    padding: 40px;
    margin-top: 40px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 850px) {
        flex-direction: column;
      }
      @media screen and (max-width: 500px) {
          flex-direction: column;
          padding: 20px;
        }
      
    
  `
  
  export const video=css`
    height: auto;
    width: 50%;
    contain: cover;
    border-radius: 10px;
    @media screen and (max-width: 850px) {
   
        height: auto;
        width: 70%;
        margin-bottom: 20px;
      }
  `
  
  export const info_container=css`
    display: flex;
    margin-left: 50px;
    @media screen and (max-width: 500px) {
       margin-left: 20px;
      }
  `
  
  export const exercise_info=css` 
    display: flex;
    flex-direction: column;
    span {
      margin: 10px 0px;
      color: #676767;
    }
  `
  
  
  export  const exercise_info_todo=css` 
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    span {
      margin: 10px 0px;
      color: #676767;
      font-weight: 600;
    }
  `
  
  
  
  
  
  
  /* button section */
  export  const button_section=css` 
    margin: 15px 30px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 500px) {
        margin: 15px 10px;
      }
  `
  
  export const button_container=css`
    height: 36px;
    border: none;
    background-color: #229480;
    border-radius: 32px;
    display: flex;
    align-items: center;

    button {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      border: none;
      margin-left: 2px;
      background-color: #ffffff;
      color: #229480;
      font-size: 24px;
    }
    span {
      margin: 0px 15px;
      color: #ffffff;
    }
    @media screen and (max-width: 380px) {
       span {
        margin: 0px 5px;
        font-size: 12px;
      }
  `
  
  
  
  export const ButtonSectionrow=css`
    color: #676767;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 15px;
    }
    @media screen and (max-width: 380px) {
   
  
        color: #676767;
        font-size: 12px;
        img {
          margin-right: 10px;
        }
      }
  `
  
  
  
  
   
  /* grid container */
  export const grid=css`
    width: 100%;
    padding: 0px 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding-bottom: 30px;
    @media screen and (max-width: 500px) {
        padding: 0px 10px;
        padding-bottom: 30px;
    }
  `
  
  export const  image_card=css`
    position: relative;
    > img {
      object-fit: cover;
      width: 100%;
      max-height: 100%;
      transition: .2s all;
    }
    > img:hover {
      filter: brightness(50%);
    }
    
  `
  
  
  
  export const ImageCardrow=css`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    button {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      border: none;
      font-size: 16px;
      background-color: #229480;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2px;
    }
  `
  
  

  
  