fetch("js/items.json")
  .then((response) => response.json())
  .then((data) => {
    const swiper_items_salw = document.getElementById("swiper_items_salw");
    all_product_json = data
    data.forEach((product) => {
      if (product.old_price) {
        const persent_disc = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        swiper_items_salw.innerHTML += `
                    <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>
              <span class="sale_present">${persent_disc}%</span>
              <div class="img_product">
                <img src="${product.img}" alt="" />
                <img class="img_hover" src="${product.img_hover}" alt="" />
              </div>
              <h3 class="name_product">
                <a href="#">${product.name}</a
                >
              </h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="price">
                <p><span>$${product.price}</span></p>
                <p class="old_price">$${product.old_price}</p>
              </div>
            </div>
        `;
      }
    });
  });
