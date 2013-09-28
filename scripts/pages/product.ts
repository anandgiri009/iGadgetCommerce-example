$("/html/body") {
  add_class("_product")
  
  $$("#LayoutColumn1, #LayoutColumn3, #ImageScrollPrev, #ImageScrollNext, #SimilarProductsByCustomerViews, #ProductBreadcrumb") {
    remove()
  }
}

