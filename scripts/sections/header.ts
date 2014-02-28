$('./body') {
  $(".//div[@id='Header']") {
      # Move top menu into #Logo container
      $("./div[@id='Logo']") {
      move_here("ancestor::div[@id = 'Container']/div[@id='TopMenu']", "bottom"){
        $("./ul") {
          # Remove unwanted top menu items from upper menu
          $("./li[position() = 1 or position() > 2 and not(position()=last()-1)]") {
            remove()
          }
        }
      }

      # Inject header template
      inject_after(read("../sections/header.html"))
      
      %account_url = fetch(".//div[@id = 'TopMenu']//li[1]/a/@href")
     $(".//div[@id = 'TopMenu']//li[1]") {
       remove("./a")
       insert_bottom("div", class: "mw-account-btn")
     }
      insert_after("iframe", id: "mw-account-iframe", src: %account_url)
      # Fill search template
      $("..//div[@class='mw_search']"){
        # Move search form into container element
        move_here("//div[@id='SearchForm']", "bottom"){
          $("./p") {
            remove()
          }
          $("./form") {
            $("./label") {
              remove()
            }
            # Change search button background image
            $("./input[@type='image']") {
              wrap("div", class: "mw_search_btn buttons-search")
            }
            $("./input[@type='text']") {
              attribute("placeholder", "Search…")
            } 
          }     
        }
      }   
    }                       
    # Remove br
    remove("./br")

    # Move menu items into #Header
    move_here("../div[@id='Menu']", "bottom"){
      # Move "Category List" element on bottom of #Menu element
      move_here("ancestor::div[@id='Outer']//div[@id='SideCategoryList']", "bottom")
    }
    # togglerize content
    ur_toggler(".//div[@class = 'mw_menu_btn']", "./div[@id='Menu']")
  }
}