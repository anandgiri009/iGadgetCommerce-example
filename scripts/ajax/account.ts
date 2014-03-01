$("./body") {
  add_class("mw-account-content")
  $("./div[@id = 'Container']"){
    move_here(".//div[@id = 'LayoutColumn2']", "before") {
      remove("./div[contains(@class, 'Breadcrumb')]")
      $("./div[@id = 'LoginForm']") {
        remove(".//p[contains(@class, 'SuccessMessage')]")
        $(".//div[@class = 'AccountLogin']") {
          # Create account section
          move_here("preceding-sibling::div[@class = 'CreateAccount']", "after") {
            inner_wrap("to_be_removed") {
              move_here(".//a", "before") {
                text("Create Account")
                add_class("mw-btn1")
              }
              remove()
            }
            insert_top("div", class: "mw-or", "Or")
          }
          # Login section
          $(".//input[@id = 'LoginButton']") {
            add_class("mw-btn1")
          }
          $(".//a[contains(@href, 'reset_password')]") {
            add_class("mw-forgot-password-btn")
          }
        }
      }
      $(".//h2") {
        add_class("mw-h2")
      }
    }
    remove()
  }
  remove("./div[@id = 'Footer']")
}