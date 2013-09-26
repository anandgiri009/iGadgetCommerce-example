$("./body") {
  add_class("mw_category")
  
  $("./div[@id='Container']") {
    $("./div[@id='Outer']") {
      $("./div[@id='Wrapper']") {
        $("./div[@class='Left']") {

          # Create Togglers
          $("./div[@id='SideShopByBrand']") {
            attribute("data-ur-set", "toggler")
            $("./h2") {
              attribute("data-ur-toggler-component", "button")
              insert("div", class: "mw_indicator")
            }
            $("./div") {
              attribute("data-ur-toggler-component", "content")
            }          
          }

          $(".//div[contains(@class, 'NewsletterSubscription')]") {
            remove()
          }
        }

        $("./div[@class='Content ']") {
          remove(".//div[@id='CategoryBreadcrumb']")
          $("./div[@id='CategoryHeading']") {
            $("./div[@class='BlockContent']") {
              # Move page title on top of the content area
              $("./h2") {
                move_to("../../../../div[@class='Left']", "top")
              } 
              $("./div[@class='FloatRight SortBox']") {     
                $("./form") {
                  wrap_text_children("span")
                }       
              }
            }
          }
        }
      }
    }
    remove(".//div[contains(@class, 'FeedLink')]")
    remove(".//div[@class='CompareButton'] | .//div[@class='TopSellerNumber']")
  } 
}