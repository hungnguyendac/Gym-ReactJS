import React from 'react'

const ProductCard = ({product}) => {
  return (
      <div className="col-6 col-sm-4 col-md-3">
          <div className="product">
              <a href="">
                  <div className="image-container">
                      <img
                          src={product.normalImage}
                          alt="Normal Image"
                          className="normal-img"
                      />
                      <img
                          src={product.hoverImage}
                          alt="Hover Image"
                          className="hover-img"
                      />
                  </div>
              </a>
              <a href="productdetail.html?id=${item.id}">
                  <h3>{product.name}</h3>
              </a>
              <p>{product.price} VNĐ</p>
          </div>
      </div>
  );
}

export default ProductCard