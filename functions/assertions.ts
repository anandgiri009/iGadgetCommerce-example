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
  match_not(%class, regexp(%regexp)) {
    warn("This node does not have the class: "+%value)
  }
}

@func XMLNode.must_equal(Text %a, Text %b) {
  match_not(%a, %b) {
    warn("Input value: "+%a+" does not equal: "+%b)
  }
}

# must equal
# must come after
# or must be in position? could use must_$ with xpath tricks to do this...
# i.e. following sibling, etc. 

