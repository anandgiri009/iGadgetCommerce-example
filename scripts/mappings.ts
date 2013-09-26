/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.
*/

match($status) {

  # Let redirects pass through.
  with(/302/) {
    log("--> STATUS: 302") 
  }

  with(/200/) {
    log("--> STATUS: 200")

    # Matching the path of the URL against certain regular expressions.
    match($path) {
      with(/^\/$|^\/\?/) {
        log("--> Importing pages home.ts in mappings.ts")
        @import pages/home.ts
      }
      with(/sample-product/) {
        log("--> Importing product.ts in mappings.ts")
        @import pages/product.ts
      }
      with(/shop-/) {
        log("--> Importing category.ts in mappings.ts")
        @import pages/category.ts
      }
      else() {
        log("--> No page match in mappings.ts, it's out of scope.")
        # @import pages/out_of_scope.ts
      }
    }   
  }

  # Not 200 or 302 response status
  else() {
    log("--> STATUS: " + $status + " assuming its an error or out of scope.")
    @import pages/out_of_scope.ts
  }
}
