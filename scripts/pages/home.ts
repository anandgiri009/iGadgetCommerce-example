$("./body") {
  add_class("mw_home")

  # Creating Image Carousels
  $$("#HomeFeaturedProducts, #HomeNewProducts") {
    ur_carousel("..//li[contains(@class, 'Odd') or contains(@class, 'Even')]")
    remove(css(".BlockContent"))
    attribute("data-ur-center", "disabled")
    attribute("data-ur-autoscroll", "enabled")
    attribute("data-ur-touch", "enabled")
  }

  # Remove unnecessary content
  remove(".//span[contains(@class, 'FeedLink')]")
  remove(".//div[@id='LayoutColumn3']")
}