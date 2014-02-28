$("./head") {
  remove_scripts()
}
$("./body"){
  add_class("_out_of_scope")

  inner("<div class='apology'>
          <h2> Sorry! </h2>
          <p> This page is out of scope for the current project. </p>
          <form><input type='button' value='Back' onClick='history.go(-1);return true;'></form>
          </div>")
}