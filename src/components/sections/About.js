import React from 'react'
import imgz from '../../assets/images/150.png'

const About = () => {
    return (
        <div className="wrap_about">
            <div className="container" id="about">
                <div className="row">
                    <div className="col-sm-8 mt-5">
                        <p className="about_title">ABOUT US</p>
                        <p className="about_text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-sm-4 mt-3 abt_img">
                        <img src={imgz} alt="nft-img" className="img-fluid about_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
