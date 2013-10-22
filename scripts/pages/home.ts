$("./body") {
  add_class("mw_home")

  # Notice this is broken on mlocal.mstage.igadgetcommerce.com
  # Creating Image Carousels
  $("//*[@id='HomeFeaturedProducts'] | //*[@id='HomeNewProducts']") {
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

# Import my assertions for the home page
@import ../asserts/home.ts