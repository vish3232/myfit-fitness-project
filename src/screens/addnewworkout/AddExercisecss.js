import { jsx, css } from '@emotion/react'

/* add exercise main container start */
export const add_exercise_main_container=css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (max-width: 650px)  {
                justify-content: center;
    }
    #menu_container{
        width: 20%;
        height: 100%;
        @media only screen and (max-width: 650px)  {
                display: none;
            }
         
    }
    #add_exercise_sub_container{
        display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #F9F9F9 0% 0% no-repeat padding-box;
    opacity: 1;
    @media only screen and (max-width: 650px)  {
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            background: #F9F9F9 0% 0% no-repeat padding-box;
            opacity: 1;
        }
    
    }
    #add_new_exercise_header{
        margin-top: 2%;
        margin-left: 3%;
        text-align: left;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
       font-weight: bold;
       color: #646D82;
       text-transform: uppercase;
       opacity: 1;
       @media only screen and (max-width: 1100px)  {
            font-size: 20px;
        }
        @media only screen and (max-width: 850px)  {
                font-size: 18px;
            }
            @media only screen and (max-width: 850px)  {
                    font-size: 18px;
                }
                @media only screen and (max-width: 650px)  {
                        font-size: 16px;
                    }
          
    }
    #page_path_header{
        margin-top: 1%;
        margin-left: 3%;
       
        text-align: left;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0px;
        color: #0088FF;
        opacity: 1;
        @media only screen and (max-width: 1100px)  {
                font-size: 14px;
            }
        @media only screen and (max-width: 900px)  {
                    font-size: 13px;
            }
            @media only screen and (max-width: 850px)  {
                    font-size: 12px;
                }
                @media only screen and (max-width: 750px)  {
                       margin-top: 1.5%;
    
                    }
                    @media only screen and (max-width: 550px)  {
                           margin-top: 2%;
                        }
                      
        
    } 
    #add_exercise_input_container{
        margin-bottom: 50px;
    position: relative;
    margin-top: 2%;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    width: 90%;
    height: 98vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 11px #00000029;
    border-radius: 25px;
    opacity: 1;
    @media only screen and (max-width: 1100px)  {
            width: 90%;
            height: 75vh;
        }
    @media only screen and (max-width: 900px)  {
                width: 90%;
                height: 75vh;
        }
        @media only screen and (max-width: 850px)  {
                width: 90%;
                height: 70vh;
             }
             @media only screen and (max-width: 750px)  {
                    height: 100vh;
                    flex-direction: column;
                    align-items: center;
                 }
                 @media only screen and (max-width: 550px)  {
                         width: 90%;
                        height: 95vh;
                        flex-direction: column;
                        align-items: center;
                     }
    
    }
    #input_main_container{
        margin-top: 5%;
        width: 45%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        @media only screen and (max-width: 1100px)  {
                 width: 40%;
                } 
                @media only screen and (max-width: 900px)  {
                         width: 40%;
                        } 
                
                        @media only screen and (max-width: 850px)  {
                                 width: 40%;
                                } 
                                @media only screen and (max-width: 750px)  {
                                        width: 80%;
                                       } 
                                       @media only screen and (max-width: 550px)  {
                                             width: 85%;
                                            } 
     
    }
    #image_upload_container{
    
    margin-top: 5%;
    width: 45%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #FAFAFA 0% 0% no-repeat padding-box;
    opacity: 1;
    a{
        cursor: pointer;
        color: #0099FF
    }
    @media only screen and (max-width: 1100px)  {
            width: 45%;
            height: 22vh;
         }
    @media only screen and (max-width: 900px)  {
                width: 45%;
                height: 22vh;
        }
        @media only screen and (max-width: 850px)  {
                width: 45%;
                height: 20vh;
             }
             @media only screen and (max-width: 750px)  {
                    width: 80%;
                    margin-bottom: 15%;
                 }
                 @media only screen and (max-width: 650px)  {
                        height: 20vh;
                     }
                     @media only screen and (max-width: 550px)  {
                            width: 85%;
                            margin-bottom: 22%;
                         }
                        }
        #drag_drop_image_header{
        width: 100%;
    font-size: 16px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    opacity: 1;
    @media only screen and (max-width: 1100px)  {
            width: 97%;
            margin-top: 4%;
        font-size: 16px;
        }
    @media only screen and (max-width: 900px)  {
                width: 95%;
                margin-top: 5%;
            font-size: 14px;
        }
        @media only screen and (max-width: 850px)  {
                width: 90%;
               margin-top: 8%;
           font-size: 14px;
           }
           @media only screen and (max-width: 750px)  {
               margin-top: 5%;
           }
           @media only screen and (max-width: 650px)  {
           font-size: 12px;
           }
           @media only screen and (max-width: 550px)  {
                width: 95%;
               margin-top: 5%;
           }
        }  
        #drag_drop_image_upload{
        width: 25vw;
        height: 20vh;
        @media only screen and (max-width: 1100px)  {
                width: 25vw;
                height: 20vh;
            }
        @media only screen and (max-width: 900px)  {
                    width: 25vw;
                    height: 20vh;
            }
            @media only screen and (max-width: 850px)  {
                    width: 25vw;
                    height: 20vh;
                }
                @media only screen and (max-width: 550px)  {
                        width: 50vw;
                    }
            }  
            #drag_drop_image{
            width: 100%;
            height: 100%;
            object-fit: contain;
            @media only screen and (max-width: 1100px)  {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                @media only screen and (max-width: 900px)  {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
            }  
            #title_input_container{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            @media only screen and (max-width: 750px)  {
                margin-top: 2%;   
                }  
            }
            #title_header{
            width: 30%;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            font-size: 18px;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
            margin-right: 2%;
            @media only screen and (max-width: 1100px)  {
                    width: 30%;
                    margin-right: 10%;
                    font-size: 16px;
                    }
                    @media only screen and (max-width: 900px)  {
                            width: 30%;
                            margin-right: 12%;
                            font-size: 15px;
                            }
                            @media only screen and (max-width: 850px)  {
                                    width: 25%;
                                    margin-right: 15%;
                                    font-size: 15px;
                            
                                    }
                                    @media only screen and (max-width: 750px)  {
                                            margin-right: 18%;
                                         
                                            }
                                            @media only screen and (max-width: 650px)  {
                                                    margin-right: 18%;
                                                    font-size: 14px;
                                            
                                                    }
                                                    @media only screen and (max-width: 550px)  {
                                                            width: 25%;
                                                            }
                            }
                            #title_input_for_text{
                            width: 70%;
                            @media only screen and (max-width: 1100px)  {
                                    width: 55%;
                                }
                                @media only screen and (max-width: 900px)  {
                                        width: 55%;
                                    }
                                    @media only screen and (max-width: 850px)  {
                                            width: 50%;
                                        }
                                        @media only screen and (max-width: 550px)  {
                                                width: 52%;
                                              
                                            }
                           }
                           #title_input{
                           width: 100%;
                           height: 30px;
                           outline:none;
                           border:none;
                           border-bottom: solid;
                           border-bottom-width: 1px;
                           border-bottom-color: black;
                           background-color: #FFFFFF;
                           }
                           #instruction_text_area{
                           width: 100%;
                           height: 8vh;
                           background: #FFFFFF 0% 0% no-repeat padding-box;
                           border: 1px solid #707070;
                           opacity: 1;
                           }
                           #calorie_burn_input{
                           width: 70%;
                           height: 30px;
                           outline:none;
                           border:none;
                           border-bottom: solid;
                           border-bottom-width: 1px;
                           border-bottom-color: black;
                           @media only screen and (max-width: 1100px)  {
                                   width: 55%;
                               }
                               @media only screen and (max-width: 900px)  {
                                       width: 55%;
                                   }
                               
                                   @media only screen and (max-width: 850px)  {
                                           width: 45%;
                                       }
                                       @media only screen and (max-width: 750px)  {
                                               width: 50%;
                                           }
                                           @media only screen and (max-width: 550px)  {
                                                   width: 52%;
                                               }
                                               
                                            }                       
                            #reps_and_time_input{
                            width: 70%;
                            height: 30px;
                            outline:none;
                            border:none;
                            border-bottom: solid;
                            border-bottom-width: 1px;
                            border-bottom-color: black;
                            @media only screen and (max-width: 1100px)  {
                                    width: 55%;
                                }
                            @media only screen and (max-width: 1100px)  {
                                        width: 35%;
                                    }
                                    @media only screen and (max-width: 900px)  {
                                            width: 55%;
                                        }
                                        @media only screen and (max-width: 850px)  {
                                                width: 45%;
                                            }
                                            @media only screen and (max-width: 750px)  {
                                                    width: 50%;
                                                }
                                                @media only screen and (max-width: 550px)  {
                                                    
                                                        width: 52;
                                                     
                                                    }
                                                }  
                                #reps_and_time_input_unit{
                                margin-left: 5%;
                                width: 20%;
                                height: 30px;
                                outline:none;
                                border:none;
                                border-bottom: solid;
                                border-bottom-width: 1px;
                                border-bottom-color: black;
                                @media only screen and (max-width: 1100px)  {
                                    margin-left: 5%;
                                    width: 35%;
                                }
                            
                                @media only screen and (max-width: 900px)  {
                                        margin-left: 5%;
                                        width: 35%;
                                    }
                                    @media only screen and (max-width: 850px)  {
                                            margin-left: 5%;
                                            width: 42%;
                                        }
                                        @media only screen and (max-width: 750px)  {
                                                width: 35%;
                                            }
                                            @media only screen and (max-width: 650px)  {
                                                    margin-left: 5%;
                                                }
                                                @media only screen and (max-width: 550px)  {
                                                        width: 39%;
                                                       
                                                    }
                                                
                        } 
                        
                        #thumbail_container{
                        width: 10vw;
                        height: 10vh;
                        background: #EBEBEB 0% 0% no-repeat padding-box;
                        opacity: 1;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        color: white;
                        @media only screen and (max-width: 1100px)  {
                                width: 9vw;
                                height: 9vh;
                              }
                        @media only screen and (max-width: 900px)  {
                                    width: 9vw;
                                    height: 9vh;
                                  }
                                  @media only screen and (max-width: 850px)  {
                                        width: 9vw;
                                        height: 9vh;
                                      }
                                      @media only screen and (max-width: 650px)  {
                                            width: 8vw;
                                            height: 6vh;
                                            font-size: 35px;
                                          }
                                    
                                          @media only screen and (max-width: 550px)  {
                                                font-size: 30px;
                                              }
                        }

                               #close_save_button_container{
    
                               position: absolute;
                               left: 40%;
                               bottom: 5%;
                              
                               display: flex;
                               flex-direction: row;
                               align-items: center;
                               justify-content: center;
                               @media only screen and (max-width: 750px)  {
                                       bottom: 2%;
                                   }
                                   @media only screen and (max-width: 650px)  {
                                         left: 35%;
                                      }
                                      @media only screen and (max-width: 550px)  {
                                         left: 30%;
                                      }
                                      @media only screen and (max-width: 550px)  {
                                           bottom: 2%;
                                       }
                        } 
                        #close_button_container{
                        width: 10vw;
                        height: 5vh;
                        background: #A7A7A7 0% 0% no-repeat padding-box;
                        border-radius: 32px;
                        opacity: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        @media only screen and (max-width: 1100px)  {
                                width: 9vw;
                                height: 5vh;
                            }
                            @media only screen and (max-width: 900px)  {
                                    width: 9vw;
                                    height: 5vh;
                                }
                                @media only screen and (max-width: 850px)  {
                                        width: 9vw;
                                        height: 5vh;
                                    }
                                    @media only screen and (max-width: 650px)  {
                                            width: 12vw;
                                            height: 4vh;
                                        }
                                        @media only screen and (max-width: 550px)  {
                                                width: 15vw;
                                            }
                }             
                            
                                    #close_header{
                                    text-align: left;
                                    font-size: 18px;
                                    font-family: 'Montserrat', sans-serif;
                                    letter-spacing: 0px;
                                    color: #FFFFFF;
                                    opacity: 1;
                                    @media only screen and (max-width: 1100px)  {
                                            font-size: 18px;
                                        }
                                        @media only screen and (max-width: 900px)  {
                                                font-size: 16px;
                                            }
                                        
                                            @media only screen and (max-width: 850px)  {
                                                    font-size: 16px;
                                                }
                                                @media only screen and (max-width: 650px)  {
                                                        font-size: 14px;
                                                    }
                                                    @media only screen and (max-width: 550px)  {
                                                            font-size: 12px;
                                                        }
                                                    }    
                                    #save_button_container{
                                    margin-left: 5%;
                                    width: 10vw;
                                    height: 5vh;
                                    background:  #1D8472 0% 0% no-repeat padding-box;
                                    border-radius: 32px;
                                    opacity: 1;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    @media only screen and (max-width: 1100px)  {
                                            width: 9vw;
                                            height: 5vh;
                                        }
                                        @media only screen and (max-width: 900px)  {
                                                width: 9vw;
                                                height: 5vh;
                                            }
                                            @media only screen and (max-width: 850px)  {
                                                    width: 9vw;
                                                    height: 5vh;
                                                }
                                                @media only screen and (max-width: 650px)  {
                                    
                                                        width: 12vw;
                                                        height: 4vh;
                                                    }
                                                    @media only screen and (max-width: 550px)  {
                                                            width: 15vw;
                                                        }
                                                    }                                                                                                                   
                        #save_header{
                        text-align: left;
                        font-size: 18px;
                        font-family: 'Montserrat', sans-serif;
                        letter-spacing: 0px;
                        color: #FFFFFF;
                        opacity: 1;
                        @media only screen and (max-width: 1100px)  {
                                font-size: 18px;
                        }
                        @media only screen and (max-width: 900px)  {
                                font-size: 16px;
                            }
                            @media only screen and (max-width: 850px)  {
                                    font-size: 16px;
                                }
                                @media only screen and (max-width: 650px)  {
                                        font-size: 14px;
                                    }
                                    @media only screen and (max-width: 550px)  {
                                            font-size: 12px;
                                        }
                                    }     
                                
`
// /* add exercise main container end */

// /* menu-container start */
// export const  menu_container=css`
//     width: 20%;
//     height: 100%;
//     @media only screen and (max-width: 650px)  {
//             display: none;
//             }
        
// `
// /* menu-container end */


// /* add-exercise-sub-container start */
// export const add_exercise_sub_container=css`
//     display: flex;
//     width: 100%;
//     height: 100%;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     background: #F9F9F9 0% 0% no-repeat padding-box;
//     opacity: 1;
//     @media only screen and (max-width: 650px)  {
//             display: flex;
//             width: 100%;
//             height: 100%;
//             flex-direction: column;
//             align-items: flex-start;
//             justify-content: flex-start;
//             background: #F9F9F9 0% 0% no-repeat padding-box;
//             opacity: 1;
//         }
    
// `
// /* add-exercise-sub-container end */

// /* add exercise main container end */

// /* add-new-exercise-header start */
// export const add_new_exercise_header=css`
//     margin-top: 2%;
//     margin-left: 3%;
//     text-align: left;
//     font-size: 20px;
//     font-family: 'Montserrat', sans-serif;
//    font-weight: bold;
//    color: #646D82;
//    text-transform: uppercase;
//    opacity: 1;
//    @media only screen and (max-width: 1100px)  {
//         font-size: 20px;
//     }
//     @media only screen and (max-width: 850px)  {
//             font-size: 18px;
//         }
//         @media only screen and (max-width: 850px)  {
//                 font-size: 18px;
//             }
//             @media only screen and (max-width: 650px)  {
//                     font-size: 16px;
//                 }
                      
      

// `
// /* add-new-exercise-header end */

// /* page-path-header start */
// export const page_path_header=css`
//     margin-top: 1%;
//     margin-left: 3%;
   
//     text-align: left;
//     font-size: 14px;
//     font-family: 'Montserrat', sans-serif;
//     letter-spacing: 0px;
//     color: #0088FF;
//     opacity: 1;
//     @media only screen and (max-width: 1100px)  {
//             font-size: 14px;
//         }
//     @media only screen and (max-width: 900px)  {
//                 font-size: 13px;
//         }
//         @media only screen and (max-width: 850px)  {
//                 font-size: 12px;
//             }
//             @media only screen and (max-width: 750px)  {
//                    margin-top: 1.5%;

//                 }
//                 @media only screen and (max-width: 550px)  {
//                        margin-top: 2%;
//                     }
                  
        
    
// `
// /* page-path-header end */

// /* add-exercise-input-container start */
// export const add_exercise_input_container=css`
//     margin-bottom: 50px;
//     position: relative;
//     margin-top: 2%;
//     align-self: center;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: space-around;
//     width: 90%;
//     height: 98vh;
//     background: #FFFFFF 0% 0% no-repeat padding-box;
//     box-shadow: 0px 2px 11px #00000029;
//     border-radius: 25px;
//     opacity: 1;
//     @media only screen and (max-width: 1100px)  {
//             width: 90%;
//             height: 75vh;
//         }
//     @media only screen and (max-width: 900px)  {
//                 width: 90%;
//                 height: 75vh;
//         }
//         @media only screen and (max-width: 850px)  {
//                 width: 90%;
//                 height: 70vh;
//              }
//              @media only screen and (max-width: 750px)  {
//                     height: 100vh;
//                     flex-direction: column;
//                     align-items: center;
//                  }
//                  @media only screen and (max-width: 550px)  {
//                          width: 90%;
//                         height: 95vh;
//                         flex-direction: column;
//                         align-items: center;
//                      }
                  
        
    
// `
// /* add-exercise-input-container end */


// /*input-main-container start */
// export const input_main_container=css`
//    margin-top: 5%;
//     width: 45%;
//     height: 80%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: space-around;
//     @media only screen and (max-width: 1100px)  {
//              width: 40%;
//             } 
//             @media only screen and (max-width: 900px)  {
//                      width: 40%;
//                     } 
            
//                     @media only screen and (max-width: 850px)  {
//                              width: 40%;
//                             } 
//                             @media only screen and (max-width: 750px)  {
//                                     width: 80%;
//                                    } 
//                                    @media only screen and (max-width: 550px)  {
//                                          width: 85%;
//                                         } 
                                    
                           
// `
// /*input-main-container end */

// /*image-upload-container start */
// export const image_upload_container=css`
    
//     margin-top: 5%;
//     width: 45%;
//     height: 30vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-around;
//     background: #FAFAFA 0% 0% no-repeat padding-box;
//     opacity: 1;
//     a{
//         cursor: pointer;
//         color: #0099FF
//     }
//     @media only screen and (max-width: 1100px)  {
//             width: 45%;
//             height: 22vh;
//          }
//     @media only screen and (max-width: 900px)  {
//                 width: 45%;
//                 height: 22vh;
//         }
//         @media only screen and (max-width: 850px)  {
//                 width: 45%;
//                 height: 20vh;
//              }
//              @media only screen and (max-width: 750px)  {
//                     width: 80%;
//                     margin-bottom: 15%;
//                  }
//                  @media only screen and (max-width: 650px)  {
//                         height: 20vh;
//                      }
//                      @media only screen and (max-width: 550px)  {
//                             width: 85%;
//                             margin-bottom: 22%;
//                          }
    
// `
// /*image-upload-container end */


// /*image-upload-container a start */

// /*image-upload-container a end */

// /*drag-drop-image-header start */
// export const drag_drop_image_header=css`
//     width: 100%;
// font-size: 16px;
// text-align: center;
// font-family: 'Montserrat', sans-serif;
// letter-spacing: 0px;
// opacity: 1;
// @media only screen and (max-width: 1100px)  {
//         width: 97%;
//         margin-top: 4%;
//     font-size: 16px;
//     }
// @media only screen and (max-width: 900px)  {
//             width: 95%;
//             margin-top: 5%;
//         font-size: 14px;
//     }
//     @media only screen and (max-width: 850px)  {
//             width: 90%;
//            margin-top: 8%;
//        font-size: 14px;
//        }
//        @media only screen and (max-width: 750px)  {
//            margin-top: 5%;
//        }
//        @media only screen and (max-width: 650px)  {
//        font-size: 12px;
//        }
//        @media only screen and (max-width: 550px)  {
//             width: 95%;
//            margin-top: 5%;
//        }
   
    

// `
// /*drag-drop-image-header end */

// /*drag-drop-image-upload start */
// export const drag_drop_image_upload=css`
//     width: 25vw;
//     height: 20vh;
//     @media only screen and (max-width: 1100px)  {
//             width: 25vw;
//             height: 20vh;
//         }
//     @media only screen and (max-width: 900px)  {
//                 width: 25vw;
//                 height: 20vh;
//         }
//         @media only screen and (max-width: 850px)  {
//                 width: 25vw;
//                 height: 20vh;
//             }
//             @media only screen and (max-width: 550px)  {
//                     width: 50vw;
//                 }
            
        
// `
// /*drag-drop-image-upload end */

// /*drag-drop-image start */
// export const drag_drop_image=css`
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//     @media only screen and (max-width: 1100px)  {
//             width: 100%;
//             height: 100%;
//             object-fit: contain;
//         }
//         @media only screen and (max-width: 900px)  {
//                 width: 100%;
//                 height: 100%;
//                 object-fit: contain;
//             }
        
    
// `
// /*drag-drop-image end */

// /*drag-drop-image start */
// export const title_input_container=css`
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     @media only screen and (max-width: 750px)  {
//         margin-top: 2%;   
//         }
        
        
// `
// /*drag-drop-image end */

// /*title-header start */
// export const title_header=css`
//     width: 30%;
//     text-align: left;
//     font-family: 'Montserrat', sans-serif;
//     font-size: 18px;
//     letter-spacing: 0px;
//     color: #000000;
//     opacity: 1;
//     margin-right: 2%;
//     @media only screen and (max-width: 1100px)  {
//             width: 30%;
//             margin-right: 10%;
//             font-size: 16px;
//             }
//             @media only screen and (max-width: 900px)  {
//                     width: 30%;
//                     margin-right: 12%;
//                     font-size: 15px;
//                     }
//                     @media only screen and (max-width: 850px)  {
//                             width: 25%;
//                             margin-right: 15%;
//                             font-size: 15px;
                    
//                             }
//                             @media only screen and (max-width: 750px)  {
//                                 .title-header{
//                                     margin-right: 18%;
                                 
//                                     }
//                                     @media only screen and (max-width: 650px)  {
//                                         .title-header{
//                                             margin-right: 18%;
//                                             font-size: 14px;
                                    
//                                             }
//                                             @media only screen and (max-width: 550px)  {
//                                                 .title-header{
//                                                     width: 25%;
//                                                     }
                                               
    
// `
// /*title-header end */

// /*title-input-for-text start */
// export const title_input_for_text=css`
//     width: 70%;
//     @media only screen and (max-width: 1100px)  {
//             width: 55%;
//         }
//         @media only screen and (max-width: 900px)  {
//                 width: 55%;
//             }
//             @media only screen and (max-width: 850px)  {
//                     width: 50%;
//                 }
//                 @media only screen and (max-width: 550px)  {
//                         width: 52%;
                      
//                     }
                
    
    
// `
// /*title-input-for-text end */

// /*title-input start */
// export const title_input=css`
//     width: 100%;
//     height: 30px;
//     outline:none;
//     border:none;
//     border-bottom: solid;
//     border-bottom-width: 1px;
//     border-bottom-color: black;
//     background-color: #FFFFFF;
    
// `
// /*title-input end */

// /*instruction-text-area start */
// export const instruction_text_area=css`
// width: 100%;
// height: 8vh;
// background: #FFFFFF 0% 0% no-repeat padding-box;
// border: 1px solid #707070;
// opacity: 1;
// `
// /*instruction-text-area end */

// /*calorie-burn-input start */
// export const calorie_burn_input=css`
//     width: 70%;
//     height: 30px;
//     outline:none;
//     border:none;
//     border-bottom: solid;
//     border-bottom-width: 1px;
//     border-bottom-color: black;
//     @media only screen and (max-width: 1100px)  {
//             width: 55%;
//         }
//         @media only screen and (max-width: 900px)  {
//                 width: 55%;
//             }
        
//             @media only screen and (max-width: 850px)  {
//                     width: 45%;
//                 }
//                 @media only screen and (max-width: 750px)  {
//                         width: 50%;
//                     }
//                     @media only screen and (max-width: 550px)  {
//                             width: 52%;
//                         }
                        
                
   
// `
// /*calorie-burn-input end */

// /*reps-and-time-input start */
// export const reps_and_time_input=css`
//     width: 70%;
//     height: 30px;
//     outline:none;
//     border:none;
//     border-bottom: solid;
//     border-bottom-width: 1px;
//     border-bottom-color: black;
//     @media only screen and (max-width: 1100px)  {
//             width: 55%;
//         }
//     @media only screen and (max-width: 1100px)  {
//                 width: 35%;
//             }
//             @media only screen and (max-width: 900px)  {
//                     width: 55%;
//                 }
//                 @media only screen and (max-width: 850px)  {
//                         width: 45%;
//                     }
//                     @media only screen and (max-width: 750px)  {
//                             width: 50%;
//                         }
//                         @media only screen and (max-width: 550px)  {
                            
//                                 width: 52;
                             
//                             }
                        
   
// `
// export const reps_and_time_input_unit=css`
//     margin-left: 5%;
//     width: 20%;
//     height: 30px;
//     outline:none;
//     border:none;
//     border-bottom: solid;
//     border-bottom-width: 1px;
//     border-bottom-color: black;
//     @media only screen and (max-width: 1100px)  {
//         margin-left: 5%;
//         width: 35%;
//     }

//     @media only screen and (max-width: 900px)  {
//             margin-left: 5%;
//             width: 35%;
//         }
//         @media only screen and (max-width: 850px)  {
//                 margin-left: 5%;
//                 width: 42%;
//             }
//             @media only screen and (max-width: 750px)  {
//                     width: 35%;
//                 }
//                 @media only screen and (max-width: 650px)  {
//                         margin-left: 5%;
//                     }
//                     @media only screen and (max-width: 550px)  {
//                             width: 39%;
                           
//                         }
                    
                
   
// `
// export const thumbail_container=css`
//     width: 10vw;
//     height: 10vh;
//     background: #EBEBEB 0% 0% no-repeat padding-box;
//     opacity: 1;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     font-size: 40px;
//     color: white;
//     @media only screen and (max-width: 1100px)  {
//             width: 9vw;
//             height: 9vh;
//           }
//     @media only screen and (max-width: 900px)  {
//             .thumbail-container{
//                 width: 9vw;
//                 height: 9vh;
//               }
//               @media only screen and (max-width: 850px)  {
//                     width: 9vw;
//                     height: 9vh;
//                   }
//                   @media only screen and (max-width: 650px)  {
//                         width: 8vw;
//                         height: 6vh;
//                         font-size: 35px;
//                       }
                
//                       @media only screen and (max-width: 550px)  {
//                         .thumbail-container{
//                             font-size: 30px;
//                           }
                    
        
// `

// export const close_save_button_container=css`
    
//     position: absolute;
//     left: 40%;
//     bottom: 5%;
   
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     @media only screen and (max-width: 750px)  {
//             bottom: 2%;
//         }
//         @media only screen and (max-width: 650px)  {
//               left: 35%;
//            }
//            @media only screen and (max-width: 550px)  {
//               left: 30%;
//            }
//            @media only screen and (max-width: 550px)  {
//                 bottom: 2%;
//             }
        
      
        
      
// `
 
// export const close_button_container=css`
//     width: 10vw;
//     height: 5vh;
//     background: #A7A7A7 0% 0% no-repeat padding-box;
//     border-radius: 32px;
//     opacity: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     @media only screen and (max-width: 1100px)  {
//             width: 9vw;
//             height: 5vh;
//         }
//         @media only screen and (max-width: 900px)  {
//                 width: 9vw;
//                 height: 5vh;
//             }
//             @media only screen and (max-width: 850px)  {
//                     width: 9vw;
//                     height: 5vh;
//                 }
//                 @media only screen and (max-width: 650px)  {
//                         width: 12vw;
//                         height: 4vh;
//                     }
//                     @media only screen and (max-width: 550px)  {
//                             width: 15vw;
//                         }
                       
        
    
// `

// export const close_header=css`
//     text-align: left;
//     font-size: 18px;
//     font-family: 'Montserrat', sans-serif;
//     letter-spacing: 0px;
//     color: #FFFFFF;
//     opacity: 1;
//     @media only screen and (max-width: 1100px)  {
//             font-size: 18px;
//         }
//         @media only screen and (max-width: 900px)  {
//                 font-size: 16px;
//             }
        
//             @media only screen and (max-width: 850px)  {
//                     font-size: 16px;
//                 }
//                 @media only screen and (max-width: 650px)  {
//                         font-size: 14px;
//                     }
//                     @media only screen and (max-width: 550px)  {
//                             font-size: 12px;
//                         }
                    
                
              
// `

// export const save_button_container=css`
//     margin-left: 5%;
//     width: 10vw;
//     height: 5vh;
//     background:  #1D8472 0% 0% no-repeat padding-box;
//     border-radius: 32px;
//     opacity: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     @media only screen and (max-width: 1100px)  {
//             width: 9vw;
//             height: 5vh;
//         }
//         @media only screen and (max-width: 900px)  {
//                 width: 9vw;
//                 height: 5vh;
//             }
//             @media only screen and (max-width: 850px)  {
//                     width: 9vw;
//                     height: 5vh;
//                 }
//                 @media only screen and (max-width: 650px)  {
    
//                         width: 12vw;
//                         height: 4vh;
//                     }
//                     @media only screen and (max-width: 550px)  {
//                             width: 15vw;
//                         }
                    
                
    
// `

// export const save_header=css`
//     text-align: left;
//     font-size: 18px;
//     font-family: 'Montserrat', sans-serif;
//     letter-spacing: 0px;
//     color: #FFFFFF;
//     opacity: 1;
//     @media only screen and (max-width: 1100px)  {
//             font-size: 18px;
//     }
//     @media only screen and (max-width: 900px)  {
//             font-size: 16px;
//         }
//         @media only screen and (max-width: 850px)  {
//                 font-size: 16px;
//             }
//             @media only screen and (max-width: 650px)  {
//                     font-size: 14px;
//                 }
//                 @media only screen and (max-width: 550px)  {
//                         font-size: 12px;
//                     }
                
            
    
// `


