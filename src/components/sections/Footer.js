import React from 'react'

const Footer = () => {
    return (
        <div className="wrap_footer">
            <div className="container pt-5">
                <div className="d-flex justify-content-center">
                    <div className="pb-4">
                        <a href="https://twitter.com/chillfrogsnft" target="_blank" rel="noopener noreferrer">
                            <span className="fab fa-twitter text-white footer_icon"></span>
                        </a>
                        <a href="https://discord.gg/chillfrogs" target="_blank" rel="noopener noreferrer">
                            <span className="fab fa-discord text-white footer_icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
