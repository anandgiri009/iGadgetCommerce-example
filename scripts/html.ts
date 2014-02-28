# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

    
  # Add the mobile meta tags 
  clean_mobile_meta_tags()

    
  # Needed to begin mobilizing
  remove_all_styles()
  remove_html_comments()

  # Late load all the images on the site
  # lateload()
  
  add_assets()

  @import optimize.ts
  
  # remove_desktop_js()
  
  log("Path: "+$path)
  match($path) {
    with(/^\/account\.php|^\/login\.php/) {
      log("--> importing ajax.ts")
      @import ajax.ts
    }
    else() {
      @import sections/header.ts
      @import sections/footer.ts
      
      @import mappings.ts
    }
  }
}

