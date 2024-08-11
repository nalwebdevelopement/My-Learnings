const div = document.createElement("div")
div.classname = "foo";
console.log (div.outerHTML)
//div.classList.remove("foo")
div.classList.add("anotherelement")
console.log (div.outerHTML)
div.classList.toggle("visible")
console.log (div.outerHTML)
