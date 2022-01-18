import { jsx, css } from '@emotion/react'

/* view-workout-main-container start */
export const  view_workout_main_container=css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: #ffffff;

    //workout_name_container start
    #workout_name_container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    }

    //workout_name_header_container start
    #workout_name_header_container{
    width: 40% ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    }

    //workout_name_header start
    #workout_name_header{
    text-align: left;
    font-size: 14px;
    letter-spacing: 0.02px;
    color: #646D82;
    font-family: 'Montserrat', sans-serif;
    }  
    
    //workout_name_value_header start
    #workout_name_value_header{
    text-align: left;
    font-size: 24px;

    letter-spacing: 0.02px;
    color: #229480;
    font-family: 'Montserrat', sans-serif;
    }

    //edit_delete_icon_container start
    #edit_delete_icon_container{
    margin-top: 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 6%;
    }

    //edit_icon_container start
    #edit_icon_container{
    display: flex;
    width: 45%;
    height: 31px;
   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    //edit_icon start
    #edit_icon{
    height: 100%;
    width: 100%;
    object-fit: contain;
    }

    //delete_icon_container start
    #delete_icon_container{
       
    display: flex;
    width: 45%;
    height: 31px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    //delete_icon start
    #delete_icon{
    height:80%;
    width: 100%;
    object-fit: contain;
    }

    //workout_list_sub_container start
    #workout_list_sub_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 95%;
    }

    //workout_list_container start
    #workout_list_container{
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    }

    //workout_list_item_container start
    #workout_list_item_container{
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 8vh;
    background: #229480 0% 0% no-repeat padding-box;
box-shadow: 0px 2px 6px #00000029;
border-radius: 8px;
opacity: 1;
}

    //workout_list_item_container_name_header start
    #workout_list_item_container_name_header{
    text-align: left;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    }

    //add_icon start
    #add_icon{
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    color: white;
    }

    //list_item_open_container start
    #list_item_open_container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 90%;
    background-color: #ffffff;
    padding: 2%;
    }

    //list_item_details_container start
    #list_item_details_container{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding:2% ;
    }
    //list_item_info_image_container start
    #list_item_info_image_container{
    width: 20%;
    height: 120px;
    display: flex;
    }

    //info_image start
    #info_image{
    width: 100%;
    height: 100%;
    object-fit: contain;
    }

    //info_content_container start
    #info_content_container{
    margin-left: 2%;
    padding:1%;
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;
    justify-content: space-between;
    }

    //info_all_details_header_container start
    #info_all_details_header_container{
        margin-top: 2%;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 800px) {
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
       
    }
    }

    //reps_header_value_container start
    #reps_header_value_container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media screen and (max-width: 800px) {

    width: 100%;
    flex-direction: row;
    }
    }

    //bottom_button_container start
    #bottom_button_container{
    margin-top: 2%;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
    }

    //attached_container start
    #attached_container{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    }

    //video_svg start
    #video_svg{
    margin-left: 5%;
    margin-top: 2%;
    }

    //total_calories_burn_button start
    #total_calories_burn_button{
        width: 30%;
        height: 7vh;
        display: flex;
        background: #313332 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 950px){
    
        width: 45%;
    }
    @media screen and (max-width: 700px){
        width: 55%;
    }
    @media screen and (max-width: 700px){
        width: 65%;
    }
    @media screen and (max-width: 500px){
        width: 70%;
    }
    }

    //save_btn_container start
    #save_btn_container{
        margin-left: 1.5%;
        width: 10vw;
        height: 7vh;
        background: #1D8472 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #FFFFFF;
    @media screen and (max-width: 950px){
        width: 11%;
    }
    @media screen and (max-width: 700px){
        width: 14%;
    }
    @media screen and (max-width: 700px){
        width: 20%;
    }
    @media screen and (max-width: 500px){
        width: 20%;
        font-size: 14px;
    }

    }

    //allcontent_header start
    #allcontent_header{
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #229480;
    opacity: 1;
    }

    //allcontent_header_title start
    #allcontent_header_title{
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #040404;
    opacity: 1;
    }

    //allcontent_header_value start
    #allcontent_header_value{
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
color: #040404;
opacity: 1;
    }

    //total_calories_burn_button_header start
    #total_calories_burn_button_header{
    
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    @media screen and (max-width: 500px){
    font-size: 12px;
    }
    }

    //total_calories_burn_button_value start
    #total_calories_burn_button_value{
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #FFFFFF;
    @media screen and (max-width: 500px){
    font-size: 12px;
    }
    }

    //instruction_header start
    #instruction_header{
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #229480;
    opacity: 1;
    }

    //sub_title_instruction_header start
    #sub_title_instruction_header{
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #040404;
    opacity: 1;
    }
    `
/* view-workout-main-container end */

/* workout-name-container start */
export const   workout_name_container=css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 95%;
    `
/* workout-name-container end */

/* workout-name-header-container start */

export const   workout_name_header_container=css`
        width: 40% ;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    `
/* workout-name-header-container end */

/* workout-name-header start */

export const    workout_name_header=css`
        text-align: left;
        font-size: 14px;
        letter-spacing: 0.02px;
        color: #646D82;
        font-family: 'Montserrat', sans-serif;
      
    `
/* workout-name-header end */
   
/* workout-name-value-header start */

export const    workout_name_value_header=css`
        text-align: left;
        font-size: 24px;
    
        letter-spacing: 0.02px;
        color: #229480;
        font-family: 'Montserrat', sans-serif;
      
    `
/* workout-name-value-header end */
    
/* edit-delete-icon-container start */

export const edit_delete_icon_container=css`
        margin-top: 4%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 6%;
    `
/* edit-delete-icon-container end */

/* edit-icon-container start */
    
export const    edit_icon_container=css`
        display: flex;
        width: 45%;
        height: 31px;
       
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    `
/* edit-icon-container end */

/* edit-icon start */

 export const   edit_icon=css`
        height: 100%;
        width: 100%;
        object-fit: contain;
    
    `
/* edit-icon end */
    
/* delete-icon-container start */

export const delete_icon_container=css`
       
        display: flex;
        width: 45%;
        height: 31px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
/* delete-icon-container end */
  
/* delete-icon start */

 export const   delete_icon=css`
        height:80%;
        width: 100%;
        object-fit: contain;
    
    `
/* delete-icon end */

/*workout-list-sub-container start */

 export const   workout_list_sub_container=css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 95%;
    `
/*workout-list-sub-container end */
    
/*workout-list-container start */

export const workout_list_container=css`
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    `
/*workout-list-container end */
    
/*workout-list-item-container start */

export const workout_list_item_container=css`
        padding-left: 2%;
        padding-right: 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        height: 8vh;
        background: #229480 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 6px #00000029;
    border-radius: 8px;
    opacity: 1;
    `
/*workout-list-item-container end */
    
/*workout-list-item-container-name-header start */

export const workout_list_item_container_name_header=css`
        text-align: left;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    `
/*workout-list-item-container-name-header end */
    
/*add-icon start */

export const add_icon=css`
        font-size: 30px;
        font-family: 'Montserrat', sans-serif;
        color: white;
    `

/*add-icon end */

/*list-item-open-container start */

export const list_item_open_container=css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        background-color: #ffffff;
        padding: 2%;
    `
/*list-item-open-container end */
    
/*list-item-details-container start */

export const list_item_details_container=css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding:2% ;
    `
/*list-item-details-container end */

/*list-item-info-image-container start */
export const list_item_info_image_container=css`
    width: 20%;
    height: 120px;
    display: flex;
`
/*list-item-info-image-container end */
    
/*info-image start */
export const info_image=css`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
/*info-image end */

/*info-content-container start */
    
 export const   info_content_container=css`
        margin-left: 2%;
        padding:1%;
        display: flex;
        flex-direction: column;
        width: 80%;
        align-items: flex-start;
        justify-content: space-between;
    `
/*info-content-container end */
    
/*info-all-details-header-container start */
export const info_all_details_header_container=css`
        margin-top: 2%;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 800px) {
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
       
    }

       
    `
/*info-all-details-header-container end */

/*reps-header-value-container start */
export const reps_header_value_container=css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        @media screen and (max-width: 800px) {
   
        width: 100%;
        flex-direction: row;
    }

    `
/*reps-header-value-container end */
    
/*bottom-button-container start */
export const bottom_button_container=css`
        margin-top: 2%;
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
`
/*bottom-button-container end */

/*bottom-button-container start */
export const attached_container=css`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
`
/*bottom-button-container end */

/*video-svg start */
export const video_svg=css`
        margin-left: 5%;
        margin-top: 2%;
`
/*video-svg end */

/*total-calories-burn-button start */
export const total_calories_burn_button=css`
        width: 30%;
        height: 7vh;
        display: flex;
        background: #313332 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 950px){
    
        width: 45%;
    }
    @media screen and (max-width: 700px){
        width: 55%;
    }
    @media screen and (max-width: 700px){
        width: 65%;
    }
    @media screen and (max-width: 500px){
        width: 70%;
    }




    `
/*total-calories-burn-button end */

/*save-btn-container start */
export const save_btn_container=css`
        margin-left: 1.5%;
        width: 10vw;
        height: 7vh;
        background: #1D8472 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #FFFFFF;
    @media screen and (max-width: 950px){
        width: 11%;
    }
    @media screen and (max-width: 700px){
        width: 14%;
    }
    @media screen and (max-width: 700px){
        width: 20%;
    }
    @media screen and (max-width: 500px){
        width: 20%;
        font-size: 14px;
    }

}

`
/*save-btn-container end */

/*allcontent-header start */
export const allcontent_header=css`
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #229480;
    opacity: 1;
`
/*allcontent-header end */

/*allcontent-header-title start */
export const allcontent_header_title=css`
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #040404;
    opacity: 1;
`
/*allcontent-header-title end */

/*allcontent-header-value start */
export const allcontent_header_value=css`
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
color: #040404;
opacity: 1;

`
/*allcontent-header-value end */

/*total-calories-burn-button-header start */
export const  total_calories_burn_button_header=css`
    
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    @media screen and (max-width: 500px){
    font-size: 12px;
    }

`
/*total-calories-burn-button-header end */

/*total-calories-burn-button-value start */
export const total_calories_burn_button_value=css`
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #FFFFFF;
    @media screen and (max-width: 500px){
    font-size: 12px;
    }
`
/*total-calories-burn-button-value end */

/*instruction-header start */
export const instruction_header=css`
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #229480;
    opacity: 1;
`
/*instruction-header end */

/*sub-title-instruction-header start */
export const sub_title_instruction_header=css`
    text-align: left;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #040404;
    opacity: 1;
`
/*sub-title-instruction-header end */








