const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// The function to handle adding new comments.
function addComment(event) {
  const newComment = cInput.value;
  console.log(event);
  

  // This wasn't in the instructions, but
  // we added a guard against empty comments:
  if (newComment === "") return;

  cList.appendChild(document.createElement("li")).textContent = newComment;
  cInput.value = "";
  cInput.focus();
}

// Register the event listener.
cBtn.addEventListener("click", addComment);