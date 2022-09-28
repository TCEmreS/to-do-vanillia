const allList = document.getElementById("allList");
/* let elemanSayisi = 0; */

const todoList = [
  { title: "elma", isFinished: false },
  { title: "armut", isFinished: true },
];

const cleanList = () => {
  allList.innerHTML = "";
};

const showList = (itemList, showFinished = undefined) => {
  cleanList();
  console.log(itemList);
  itemList
    .filter((listItem) => {
      if (showFinished === undefined) {
        return true;
      }
      return listItem.isFinished === showFinished;
    })
    .map((listItem, index) => {
      const groupDiv = document.createElement("div");
      groupDiv.className = "group";

      const titleDiv = document.createElement("div");
      const checkbox = document.createElement("input");
      const editButton = document.createElement("img");
      const deleteButton = document.createElement("img");

      editButton.onclick = () => {
        titleDiv.contentEditable = !titleDiv.isContentEditable;
      };

      titleDiv.innerHTML = listItem.title;
      titleDiv.onkeyup = (e) => {
        listItem.title = titleDiv.innerText;
      };

      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = listItem.isFinished;
      checkbox.onclick = () => {
        listItem.isFinished = !listItem.isFinished;
        showList(todoList, showFinished);
      };

      editButton.setAttribute("src", "image/p.svg");
      editButton.className = "editButton";

      deleteButton.setAttribute("src", "image/x.svg");
      deleteButton.className = "deleteButton";
      deleteButton.onclick = () => {
        todoList.splice(index, 1);
        showList(todoList, showFinished);
      };

      groupDiv.appendChild(checkbox);
      groupDiv.appendChild(editButton);
      groupDiv.appendChild(deleteButton);
      groupDiv.appendChild(titleDiv);

      allList.appendChild(groupDiv);
    });
};

showList(todoList);

const onAdd = () => {
  const titleInput = document.getElementById("title");

  const title = titleInput.value;

  if (title === "") {
    alert("LÜTFEN BOŞ ALANLARI DOLDURUNUZ..!");
    return;
  }

  todoList.push({ title: title, isFinished: false });

  showList(todoList);

  titleInput.value = "";
};

const listAll = () => {
  showList(todoList);
};

const listUnfinished = () => {
  showList(todoList, false);
};

const listFinished = () => {
  showList(todoList, true);
};

/* const addToList = (list) => {
  const listDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  const editButton = document.createElement("img");
  const deleteButton = document.createElement("img");
  // const unFinishedListDiv = listDiv.cloneNode(true);

  checkbox.setAttribute("type", "checkbox");
  editButton.setAttribute("src", "image/p.svg");
  deleteButton.setAttribute("src", "image/x.svg");
  // listDiv.id = "allList" + elemanSayisi;

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      finishedList.appendChild(listDiv);
      finishedList.appendChild(checkbox);
      finishedList.appendChild(editButton);
      finishedList.appendChild(deleteButton);
    } else {
      allList.appendChild(listDiv);
      allList.appendChild(checkbox);
      allList.appendChild(editButton);
      allList.appendChild(deleteButton);
    }
  });

  editButton.addEventListener("click", function () {
    if (this.click) {
      listDiv.contentEditable = true;
    } else if (this.click) {
      listDiv.contentEditable = false;
    }
  });

  deleteButton.onclick = () => {
    ((checkbox.remove() == listDiv.remove()) == editButton.remove()) ==
      deleteButton.remove();
  };

  listDiv.innerHTML = list;
  // unFinishedListDiv.innerHTML = list;

  allList.appendChild(checkbox);
  allList.appendChild(listDiv);
  allList.appendChild(editButton);
  allList.appendChild(deleteButton);
};
 */
