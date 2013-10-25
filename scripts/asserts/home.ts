# Homepage Assertions

$("//*[@id='HomeNewProducts'] | //*[@id='HomeFeaturedProducts']") {
  has_attr("data-ur-set", "carousel")
  must_$(".//div[@data-ur-carousel-component='scroll_container']") {  
    must_$("..//li[contains(@class, 'Odd') or contains(@class, 'Even')]") {
      has_attr("data-ur-carousel-component", "item")
    }
  }
}