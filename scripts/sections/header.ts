$('./body') {
  $(".//div[@id='Header']") {
<<<<<<< HEAD
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
=======
    attribute("data-ur-set", "toggler")
    
      $("./div[@id='Logo']") {
      # Move top menu into #Logo container
      move_here("../../../div[@id='TopMenu']", "bottom"){
        # Remove unwanted top menu items from upper menu
        remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
      }

      # Insert HTML for bottom of header
      insert_after("div", class:"mw_header_bottom") {
        insert("div", class:"mw_search")
        insert("div", class:"mw_menu_btn", data-ur-toggler-component: "button")
      }

      # Fill search HTML
>>>>>>> 7196b33... cleaning up images and basic stuff
      $("..//div[@class='mw_search']"){
        # Move search form into container element
        move_here("//div[@id='SearchForm']", "bottom"){
          remove("./p")

          $("./form") {
            remove("./label")
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
<<<<<<< HEAD
    }                       
    # Remove br
=======
    }
>>>>>>> 7196b33... cleaning up images and basic stuff
    remove("./br")

    # Move menu items into header
    move_here("../div[@id='Menu']", "bottom"){
<<<<<<< HEAD
=======
      attribute("data-ur-toggler-component", "content")
>>>>>>> 7196b33... cleaning up images and basic stuff
      # Move "Category List" element on bottom of #Menu element
      move_here("ancestor::div[@id='Outer']//div[@id='SideCategoryList']", "bottom")
    }
    # togglerize content
    ur_toggler(".//div[@class = 'mw_menu_btn']", "./div[@id='Menu']")
  }
}