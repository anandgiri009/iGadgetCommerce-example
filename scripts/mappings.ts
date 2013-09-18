/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

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
        $imported = "false"
        $("//div[@id='ProductDetails']/ancestor::html") {
          log("--> Importing product.ts - mapping on content")
          @import pages/product.ts
          $imported = "true"
        }
        match($imported, "false") {
          log("--> No page match in mappings.ts, it's out of scope.")
          @import pages/out_of_scope.ts
        }
      }
    }   
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error or out of scope.")
    @import pages/out_of_scope.ts
  }

}
