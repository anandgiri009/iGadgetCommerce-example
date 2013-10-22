# More Assert Functions
# NOTE: Failure count and messages are not updated with this functions...

@open assert

@func XMLNode.must_not_$(Text %xpath) {
  $(%xpath) {
    warn("This node should not exist: " + %xpath)
  }
}

@func XMLNode.has_attr(Text %attr) {
  %fetched_attr = fetch("@"+%attr)
  match(%fetched_attr, "") {
    warn("This node does not have the attribute: "+%attr)
  }
}

@func XMLNode.has_attr(Text %attr, Text %value) {
  %fetched_attr = fetch("@"+%attr)
  match_not(%fetched_attr, %value) {
    warn("This node's attribute: "+%attr+" does not equal: "+%value)
  }
}

# This isn't quite right but you get what it should do
@func XMLNode.has_class(Text %value) {
  %class = fetch("@class")
  %regexp = "^"+%value+"$|"+
            "^"+%value+"\\s|"+
            "\\s"+%value+"\\s|"+
            "\\s"+%value+"$"
  log(%regexp)
  match_not(%class, regexp(%regexp)) {
    warn("This node does not have the class: "+%value)
  }
}