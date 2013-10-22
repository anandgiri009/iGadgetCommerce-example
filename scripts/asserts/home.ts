# Homepage Assertions

# If this element exists the new desktop page will break
must_not_$(css("#HomeFeaturedProducts"))

must_$("//*[@id='HomeNewProducts']") {
  has_attr("data-ur-set", "carousel")
  has_class("NewProducts")
}

