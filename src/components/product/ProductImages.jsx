/* eslint-disable react/prop-types */
import {useState} from 'react'

const ProductImages = ({imgs = [{url: ""}]}) => {
    const[mainImage, setMainImage] = useState(imgs[0]);

  return (
    <section className='grid grid-cols-2 gap-4'>
        <div className="grid grid-cols-4 gap-4">
            {imgs.map((curElem, index) => (
                    <figure key={index}>
                        <img src={curElem.url} alt={curElem.filename} 
                        className='w-full h-full cursor-pointer'
                        onClick={() => setMainImage(curElem)}/>

                    </figure>
                
            ))}
        </div>
        <div className='main-screen'>
            
        </div>
    </section>
  )
}

export default ProductImages;