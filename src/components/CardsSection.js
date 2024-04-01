import React from 'react';
import { BsStars } from "react-icons/bs";

const CardsSection = () => {
  return (
    <div className='wow fadeInUp' style={{ padding: '5%',display:'flex',flexDirection:'column',backgroundColor:'white', color: 'black' }}>
      <div style={{display:'flex',flexDirection:'column'}}>
      <div className='chips' style={{minWidth:'70px',minHeight:'20px'}}>
      <BsStars />{' '}Benefits
  </div>
      <div className="section-heading">
        Why We Stand Out?
      </div>

      <div className="section-text">
      <p>Web design involves creating and designing websites, including layout, content, and user experience.
</p>
      </div>
      </div>
      <div className='cardContainerUsp'>
        <div className='cardUsp' style={{backgroundColor:'#ecf0f3'}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>Innovative technology solutions
</h2>
            <p className='cardDescriptionUsp'>We pride ourselves on our ability to develop and implement cutting-edge technologies that solve problems in unique and efficient ways.</p>
          </div>
        </div>

        <div className='cardUsp' style={{backgroundColor:'#feefdb'}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>User friendly interfaces</h2>
            <p className='cardDescriptionUsp'>We prioritise intuitive interfaces and seamless interactions by making our services easy and enjoyable to use.</p>
          </div>
        </div>

        <div className='cardUsp' style={{backgroundColor:'#ecf0f3'}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>Exceptional customer service</h2>
            <p className='cardDescriptionUsp'>Whether it's offering 24/7 support, quick response times to inquiries, or personalized assistance, we go above and beyond to address customer needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
