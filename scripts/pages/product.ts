$("/html/body") {
  add_class("_product")
  
  $$("#LayoutColumn1, #LayoutColumn3, #ImageScrollPrev, #ImageScrollNext, #SimilarProductsByCustomerViews, #ProductBreadcrumb, #ProductReviews > a") {
    remove()
  }

  $$(".AddCartButton") {
    insert("a", "Add to Cart", class:"mw_btn1")
    $$("input[type='image']") {
      move_to("..", "./a")
    }
  }
}

