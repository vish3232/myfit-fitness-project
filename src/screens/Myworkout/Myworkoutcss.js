import { jsx, css } from '@emotion/react'

export const my_workout_container=css`
width:100%;
height:100%;
 display:flex;
 flex-direction:column;
 jusify-content:flex-start;
 background: #F9F9F9 0% 0% no-repeat padding-box;
 opacity: 1;
 #header-main-container{
     display:flex;
     flex-direction:row;
     align-items:center;
     justify-content:space-evenly;
     width:100%;
    #header-container{
        width:60%;
       
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        span{
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:20px;
            letter-spacing: 0.02px;
            color: #646D82;
            text-transform: uppercase;
            opacity: 1;
        }
        p{
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size:14px;
            letter-spacing: 0px;
            color: #0088FF;
            opacity: 1;
        }
        
    }
    #delete-add-button-container{
        width:30%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
      
    
    #delete-button-container{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        height:45px;
        width:48%;
        background: #FE6E00 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        padding-left:5px;
        span{
            margin-left:10px;
            text-align: left;
            font-size:12px;
            font-family: 'Montserrat', sans-serif;
           
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
        }
         #delete-btn{
        background: #FFFFFF;
        color:#FE6E00;
        }
    }

    #add-button-container{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        height:45px;
        width:48%;
        background: #229480 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        padding-left:5px;
        span{
            margin-left:10px;
            text-align: left;
            font-size:12px;
             font-family: 'Montserrat', sans-serif;
           
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
        }
         #add-btn{
        background: #FFFFFF;
        color:#229480;
        }
    }


    }
}

    #card{
        margin-top:50px;
        margin-bottom:50px;
        align-self:center;
        display:flex;
        width:90%;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 11px #00000029;
        border-radius: 25px;
        opacity: 1;
        #search-bar-container{
            margin-top:2%;
            margin-bottom:2%;
            position:relative;
            width:50%;
            height:40px;
            display:flex;
            flex-direction:row;
            align-items:center;
            justfy-content:space-between;
            align-self:center;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #AAAAAA;
            border-radius: 5px;
            opacity: 1;

            input{
                padding-left:10px;
                width:95%;
                text-align: left;
                font-size:12px;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 0px;
                color: #BCBCBC;
                opacity: 1;
                border:none;
                outline:none;
            }
            Button{
                
                position:absolute;
                color:white;
                right:0px;
                padding-left:10px;
                background: #229480 0% 0% no-repeat padding-box;
                opacity: 1;
            }

        }
        #border{
            width:100%;
        height:1px;
        background:#00000029;
        }
        #list-of-workout-header{
            margin-top:20px;
            margin-bottom:20px;
            display:flex;
            width:100%;
            flex-direction:row;
            align-items:center;
            justify-content:flex-start;
            div{
                width:20%;
                text-align: left;
                font-size:12px;
                font-family: 'Montserrat', sans-serif;
                font-weight:600;
                letter-spacing: 1.5px;
                color: #646464;
                opacity: 1;
                display:flex;
                flex-direction-row;
                align-items:center;
                justify-content:flex-start;
            }
        }
        #list-of-workout{
            margin-top:20px;
            
            height:90px;
            display:flex;
            width:100%;
            flex-direction:row;
            align-items:center;
            justify-content:flex-start;
            margin-bottom:20px;

            img{
                width:20%;
                height:90px;
                object-fit:contain;
            }
            span{
                width:20%;
                align-self:center;
                justify-self:flex-start;
            }
            div{
                width:20%;
                display:flex;
                flex-direction:row;
                justify-content:flex-start;
                align-items:center;
                #edit{
                    color:#1166E6;
                    margin-right:10px;
                }
                #delete{
                    color:#FEC300
                }
            }
            

        }
    }
    #border-for-list{
        width:95%;
        height:1px;
        background:#00000029;
       
    }
   
 }
`