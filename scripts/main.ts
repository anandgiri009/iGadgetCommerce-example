# The main file executed by Tritium. The start of all other files.

# Match the content type so we know what assumptions we can make about the structure of the document and parse it as such.
match($content_type) {
  with(/html/) {
    html("UTF-8") {
      @import device_detection.ts  
      @import html.ts
    }
  }
  with(/javascript/) {
    log("Passing through JavaScript!")
  }
  with(/json/) {
    log("Passing through JSON!")
  }
  else() {
    log(concat("Passing through ", $content_type, " unmodified"))
  }
}

# Don't gzip outgoing HTTP request so we can see it in tmp/ folder
export("disable_compression", "true")