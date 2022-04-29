import React from 'react';
import './customarReview.css';

const CustomarReview = () => {
    return (
        <div>
            <h2 className='review-title'>Customar Review</h2>
            <div className="customars">
                <div className="customar">
                    <p className='review-text'>Very good service. Personally i am very setisfied. Heighly recomended.</p>
                    <p className='review-name'>--Jorge adam</p>
                    <img className='review-img' src="https://i.ibb.co/9y2Sszz/person-4.jpg" alt="" />
                </div>
                <div className="customar">
                    <p className='review-text'>I just love there service. Very good collection and also i am very setisfied.</p>
                    <p className='review-name'>--Mr smeeth</p>
                    <img className='review-img' src="https://i.ibb.co/mJwWxfT/person-5.jpg" alt="" />
                </div>
                <div className="customar">
                    <p className='review-text'>i am setisfy with there service. Very kindful and awosome service. Highly recomended.</p>
                    <p className='review-name'>--jorse Harison</p>
                    <img className='review-img' src="https://i.ibb.co/4YRsB0r/person-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CustomarReview;