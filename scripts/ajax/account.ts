$("./body") {
  add_class("mw-account-iframe-content")
  $("./div[@id = 'Container']"){
    move_here(".//div[@id = 'LoginForm']", "before") {
      
    }
    remove()
  }
  remove("./div[@id = 'Footer']")
}