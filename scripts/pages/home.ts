$("./body") {
  add_class("mw_home")

  $$("#HomeFeaturedProducts, #HomeNewProducts") {
    ur_carousel("..//li[contains(@class, 'Odd') or contains(@class, 'Even')]")
    remove(css(".BlockContent"))
    attribute("data-ur-center", "enabled")
    attribute("data-ur-autoscroll", "enabled")
    attribute("data-ur-touch", "enabled")
    $$("[data-ur-carousel-component='count'], [data-ur-carousel-button-type='next'], [data-ur-carousel-button-type='prev']") {
      remove()
    }
  }
}