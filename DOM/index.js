//display the inner text in div of app whiich has an id of app
// const app = document.getElementById("app");
// console.log(app.innerText);

// // displaying the element in console with getElementbyName
// const selects = document.getElementsByName("selectBy");
// console.log(selects);

// //using qury selector
// const codeEl = document.querySelector("code");
// console.log(codeEl);

// const app1 = document.querySelector("#app");
// console.log(app1);

// const firstSelect = document.querySelector("input[type=checkbox]");
// console.log(firstSelect);

// const firstSelect1 = document.querySelector("label");
// console.log(firstSelect1);

// //by tagname
// const inputs = document.getElementsByTagName("input");
// console.log(inputs);
// for (let input of inputs) {
//   console.log(input);
// }
// //by query selector all

// const inputs1 = document.querySelectorAll("input");
// console.log(inputs1);

// insert table in DOM
{
const rows = 5;
const cols = 10;

const app = document.getElementById("app");
const table = document.createElement("table");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");

    // Sneak peek at what's coming next!
    // After creating an element, it needs
    // to be added to the DOM tree.
    tr.appendChild(td)
    tr.appendChild(td);
  }
  table.appendChild(tr);
  
}

app.appendChild(table);
}

const he = document.createElement("h1");
he.innerHTML = "This is a dynamic heading";
document.body.append(he);


const he1 = document.createElement("h1");
he1.innerHTML = "This is a dynamic heading";
document.body.append(he1);

const he2 = document.createElement("h1");
he2.innerHTML = "This is a dynamic heading";
document.body.append(he2);

const app1 = document.getElementById("app1");
const div1 = document.createElement("div");
const ul = document.createElement("ul");

const li = document.createElement("li");

li.innerHTML = "Nested Structure";
ul.appendChild(li);
div1.appendChild(ul);
app1.appendChild(div1);



// app1.appendChild(document.createElement("li")).textContent = "Nested Structure";
// app1.appendChild(document.createElement("li")).textContent = "Nested Structure";
// app1.appendChild(document.createElement("li")).textContent = "Nested Structure";    

// app1.appendChild(document.createElement("div"));
// app1.appendChild(document.createElement("ol"));
// app1.appendChild(document.createElement("li")).textContent = "Nested Structure";
// app1.appendChild(document.createElement("li")).textContent = "Nested Structure";
// app1.appendChild(document.createElement("li")).textContent = "Nested Structure";    

const div = document.createElement("div")
div.classname = "foo";
console.log (div.outerHTML)
//div.classList.remove("foo")
div.classList.add("anotherelement")
console.log (div.outerHTML)
div.classList.toggle("visible")
console.log (div.outerHTML)



