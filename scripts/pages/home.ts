$("./body") {
  add_class("mw_home")

  $$("#HomeFeaturedProducts") {
    ur_carousel("..//li[contains(@class, 'Odd') or contains(@class, 'Even')]")
    remove(css(".BlockContent"))
  }

  
}