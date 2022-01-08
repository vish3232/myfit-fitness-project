import { jsx, css } from '@emotion/react'

export const add_workout_container = css`
    padding: 25px 30px;
    background-color: #f9f9f9;
    height: 100%;
    input:focus,select:focus{
        outline: none;   
    }

    @media screen and (max-width: 770px) {
        padding: 20px 10px;
    }
   
`
export const card = css`
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 11px #00000029;
    border-radius: 25px;
    padding: 25px 20px;
    @media screen and (max-width: 500px) {
        padding: 25px 10px;
    }
    
`
export const row_container = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const row=css`
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
        color: #646d82;
        font-size: 18px;
    }
    span:nth-child(2) {
        color: #646d82;
        font-size: 24px;
        font-weight: 600;
        border-bottom: 1px solid #229480;
        padding-bottom: 5px;
    }
    @media screen and (max-width: 500px) {
       span:nth-child(1) {
        font-size: 14px;
      }
    
       span:nth-child(2) {
        font-size: 18px;
      }
    }
    
    
`
export const column=css`
display: flex;
align-items: center;
button {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border: 1px solid #21927e;
    background-color: #fff;
  }
  button:nth-child(2) {
    border: 3px solid #21927e;
    font-size: 26px;
    color: #229480;
  }
  button > img {
    height: 70%;
    width: 70%;
  }
`
export const bar_container=css`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #229480 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 6px #00000029;
    border-radius: 8px;
    padding: 0px 20px;
    span:nth-child(1) {
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
      }
      span:nth-child(2) {
        border: 3px solid #fff;
        width: 40px;
      }
      @media screen and (max-width: 500px) {
       
          padding: 0px 10px;
        
      
         span:nth-child(1) {
          font-size: 14px;
        }
      
         span:nth-child(2) {
          border: 2px solid #fff;
          width: 30px;
        }
      }
      
  `
export const workout_info=css`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  `
export const  workout_info_row=css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
        width: 20%;
        margin-top: 15px;
        font-size: 14px;
        color: #676767;
        font-weight: 500;
      }
      div span {
        display: none;
      }
      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }
      select {
        border: 0.5px solid #707070;
        color: #676767;
        font-size: 14px;
        font-weight: 500;
      }
      input {
        border: 0.5px solid #707070;
        color: #676767;
        font-size: 14px;
        font-weight: 500;
        padding: 2px 0px;
        width: 50px;
        text-align: center;
      }
      @media screen and (max-width: 640px) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          div {
            width: 100%;
          }
          img {
            width: 100%;
            height: auto;
          }
          div span {
            display: unset;
            font-size: 14px !important;
            margin-right: 5px;
          }
        }
      
  `
export const add_exercise_button=css` 
    align-self: flex-end;
    height: 36px;
    background-color: #229480;
    display: flex;
    align-items: center;
    padding: 0px 3px;
    border-radius: 20px;
    box-shadow: 0px 3px 6px #00000029;
    button {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: none;
        color: #229480;
        font-size: 24px;
        background-color: #ffffff;
      }
      span {
        margin: 0px 20px;
        font-size: 12px;
        color: #fff;
      }
      @media screen and (max-width: 640px) {
        margin-top: 20px;
      }
  `
  export const  bar_container_rest=css`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    box-shadow: 0px 2px 6px #00000029;
    border: 2px solid #1d8472;
    border-radius: 8px;
    padding: 0px 20px;
    color: #1d8472;
    font-size: 18px;
  `
  export const rounds=css` 
    margin-top: 20px;
    font-size: 16px;
    color: #676767;
    span:nth-child(2) {
        border: 0.5px solid #707070;
        padding: 2px 10px;
        margin-left: 100px;
        font-weight: 500;
      }
  `
  export const border=css`
    border: 0.5px solid #707070;
    padding: 2px 10px;
  `
  export const  bottom_section=css` 
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media screen and (max-width: 680px) {
       button {
         font-size: 14px !important;
      }
    }
    @media screen and (max-width: 530px) {
         display: flex;
         flex-direction: column;
      
    
       div {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
    
      div button {
         width: 40%;
      }
    }
  `
  export const button1=css`
    background: #313332 0% 0% no-repeat padding-box;
    border: none;
    font-size: 18px;
    height: 46px;
    border-radius: 32px;
    padding: 0px 20px;
    color: #fff;
  `
  export const button2=css`
    height: 46px;
    background: #1d8472 0% 0% no-repeat padding-box;
    border-radius: 32px;
    color: #fff;
    border: none;
    margin-right: 20px;
    font-size: 18px;
    padding: 0px 30px;
  `
  export const button3=css` 
    height: 46px;
    background: #b2b2b2 0% 0% no-repeat padding-box;
    border-radius: 32px;
    color: #fff;
    font-size: 18px;
    padding: 0px 30px;
    border: none;
  `

