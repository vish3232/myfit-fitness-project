/** @jsxImportSource @emotion/react */
import React from "react";
import {blog_main_container} from './Blogcss'
import profile from '../../assets/Ellipse41.png'
import blogimage from '../../assets/Mask_Group_59.png'
const Blog=(props)=>{
    return(
        <div css={blog_main_container} >
            <div id="blog-header-container" >
                <span>What is keto diet?</span>
                <p>Home/Blog</p>
                <div id="blog-image-container" >
                <div id="profile-image" >
                    <img src={profile} />

                </div>
                
            </div>
            </div>
            <div id="blog-content-container" >
            <h4>Amanda Holmes</h4>
            <span>Breaking Muscle is the fitness world’s preeminent destination for timely, high-quality information on exercise, fitness, health, and nutrition. Our audience encompasses the entire spectrum of the fitness community: consumers, aficionados, fitness professionals, and business owners. We seek to inform, educate and advocate for this community.<br/><br/> pen-minded, inquisitive, and empirically driven, we also aim to provide – and provoke – genuine and fruitful discussion, deliver practical and actionable information, and uphold high standards of quality and insight.<br/><br/> Most important, Breaking Muscle is a community-led platform. It is your platform. We are always looking for contributions from experienced coaches, and from knowledgeable fitness professionals and athletes.<br/><br/>
            <img src={blogimage} /><br/><br/> The Breaking Muscle team is comprised of experienced, passionate professionals who are dedicated to obtaining, creating, and disseminating relevant, timely, high-quality content, and to providing comprehensive strength and conditioning, and mind/body wellness programs.The Breaking Muscle team is comprised of experienced, passionate professioning, and disseminating relevant, timely, high-quality content, and to providing comprehensive strength and conditioning, and mind/body wellness programs.The Breaking Muscle team is comprised of experienced, passionate professionals who are dedicated to obtaining, creating, and disseminating relevant, timely, hiofessionals who are dedicated to obtaining, creating, and disseminating relevant, timely, high-quality content, and to providing comprehensive strength and conditioning, and mind/body wellness programs.The Breaking Muscle team is comprised of experienced, passionate professionals who are dedicated to obtaining, creating, and disseminating relevant, timely, high-quality content, and to providing comprehensive strength and conditioning, and mind/body wellness programsThe Breaking Muscle team is comprised of experienced, passionate professionals who are dedicated to obtaining, creating, and disseminating relevant, timely, high-quality content, and to providing comprehensive strength and conditioning, and mind/body.</span>
            </div>

            <div id="download-app-container" >
                hello
            </div>
            
        </div>
    )
}

export default Blog