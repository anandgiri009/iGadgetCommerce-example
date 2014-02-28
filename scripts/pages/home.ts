$("./body") {
  add_class("mw_home")
  # Creating Image Carousels
  $$("#HomeFeaturedProducts, #HomeNewProducts") {
    ur_carousel("..//li[contains(@class, 'Odd') or contains(@class, 'Even')]")
    remove(css(".BlockContent"))
    attribute("data-ur-center", "disabled")
    attribute("data-ur-autoscroll", "disabled")
    attribute("data-ur-touch", "enabled")
    # $$("[data-ur-carousel-component='count'], [data-ur-carousel-button-type='next'], [data-ur-carousel-button-type='prev']") {
    #   remove()
    # }
  }
  # Remove unnecessary content
  remove(".//span[contains(@class, 'FeedLink')]")
  remove(".//div[@id='LayoutColumn3']")
}