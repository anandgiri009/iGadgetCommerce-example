# HTML Transformations go here

$("/html") {
  # Rewrite anchors so they don't go back to original desktop site.
  rewrite_links()
  # Rewrite relative image paths to point to original desktop site.
  absolutize_srcs()
  # Add the mobile meta tags 
  clean_mobile_meta_tags()
    
  # Remove styles and comments
  remove_all_styles()
  remove_html_comments()

  # Late load all the images on the site
  # lateload()

  # Add our images, javascript, and stylesheets
  add_assets()

  # Import header and footer transformations on every page
  @import sections/header.ts
  @import sections/footer.ts

  # Determine the Tritium applied to certain types of pages using the path in the URL.
  @import mappings.ts
}

