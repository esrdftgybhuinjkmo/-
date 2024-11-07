import './Brands.css'

import rect from '../../img/Rectangle 2 (2).jpg'
export const Brands = () => {
    return (
        <div>
                 <img src={rect} alt=""  className='imgHome'/>
                 <div>
            
                    <h1 className=' brands-text '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='brands-p'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className='brands-btn'>Shop Now</button>
                    <div>
                        <div className='brands-shop ' >
                          <h2>200+</h2>
                        </div>
                        <div>
                             <h2>200+</h2>
                        </div> 
                        <div>
                            <h2>200+</h2>
                        </div>
                     </div>
           
            </div>
            
        </div>
    );
}


