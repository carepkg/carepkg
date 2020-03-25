import React from 'react'

class SingleProduct extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div id='single-product-container'>
                <div id='single-product-content'>
                    <div id='single-product-left'>
                        <div className='single-product-image'></div>
                        <div id='button-menu'>
                            <button className='single-product-button single-product-button-left'>Buy Now</button>
                            <button className='single-product-button single-product-button-right'>Add to Cart</button>
                        </div>
                    </div>
                    <div id='single-product-right'>
                        <div id='single-product-header'>
                            <h1>sampleProd</h1>
                            <h3>$x.xx</h3>
                            <h3 id='single-product-avail'>In stock</h3>
                        </div>
                        <div id='single-product-info-cont'>
                            <p>Sample description of the product. Sample description of the product.
                            Sample description of the product. Sample description of the product.
                            </p>
                            <h3 id='single-product-rating'>4/5</h3>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default SingleProduct;