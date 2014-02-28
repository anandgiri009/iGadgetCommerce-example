# $("//script[contains(@src, 'blah')]") {
#   attributes(data-keep: "true")
# }

perf.bundle_all_js() {
  perf.async_bundled_js()
}
move_css_above_scripts()
