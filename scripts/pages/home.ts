$("./body") {
  add_class("mw_home")

  # Notice this is broken on mlocal.mstage.igadgetcommerce.com
  # Creating Image Carousels
  must_$("//*[@id='HomeFeaturedProducts'] | //*[@id='HomeNewProducts']") {
    ur_carousel("..//li[contains(@class, 'Odd') or contains(@class, 'Even')]")
    remove(css(".BlockContent"))
    attribute("data-ur-center", "disabled")
    attribute("data-ur-autoscroll", "enabled")
    attribute("data-ur-touch", "enabled")
  }

  log("Failure Count: " + $ASSERTION_FAILURE_COUNT)
  log("Failure Messages: " + $ASSERTION_FAILURE_MESSAGES)

  # Remove unnecessary content
  remove(".//span[contains(@class, 'FeedLink')]")
  remove(".//div[@id='LayoutColumn3']")
}