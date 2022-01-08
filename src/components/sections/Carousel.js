import React from 'react'
import image1 from '../../assets/images/146.png'
import image2 from '../../assets/images/141.png'
import image3 from '../../assets/images/142.png'

const Carousel = () => {
    return (
        <div className="wrap_carousel">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 carousel_col">
                        <img src={image1} alt="nft-img" className="img-fluid carousel_image" />
                    </div>
                    <div className="col-sm-4 carousel_col">
                        <img src={image2} alt="nft-img" className="img-fluid carousel_image" />
                    </div>
                    <div className="col-sm-4 carousel_col">
                        <img src={image3} alt="nft-img" className="img-fluid carousel_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
