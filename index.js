const listElement = document.getElementById("allList");
const listElement2 = document.getElementById("unFinishedList");
const listElement1 = document.getElementById("finishedList");

const inList = () => {
  const listInput = document.getElementById("list1");

  const list = listInput.value;

  if (list === "") {
    alert("Lütfen Alışveriş Listesini Yazınız..");
    return;
  }

  addToList(list); //listeye hangi değerlerin ekleneceğini belirttik

  listInput.value = ""; // veri girişinden sonra tekrar girilmesi için inputları temizledik
};

const addToList = (list) => {
  const listDiv = document.createElement("input");
  const checkbox = document.createElement("div");
  const deleteButton = document.createElement("img");
  const onayBox = document.getElementById("allList", "unFinishedList");
  const finis = document.createElement("finishedList");
  const düzenleButton = document.createElement("img");

  onayBox.type = "checkbox";
  onayBox.value = "value";
  listDiv.type = "checkbox";
  listDiv.value = "value";
  checkbox.type = "checkbox";
  checkbox.value = "value";

  onayBox.addEventListener("change", () => {
    if (this.checked) {
      listElement2.innerHTML = list;
      listElement.innerHTML = list;
    } else if (listElement.checked == listElement2.checked) {
      listElement1.innerHTML = list;
    }
  });

  checkbox.innerHTML = list;
  listDiv.innerHTML = list;

  deleteButton.setAttribute("src", "image/x.svg");
  deleteButton.id = listElement.childElementCount - 1;
  deleteButton.setAttribute("id", "deleteButton");
  düzenleButton.setAttribute("src", "image/p.svg");
  düzenleButton.id = listElement.childElementCount - 1;
  düzenleButton.setAttribute("id", "düzenleButton");

  deleteButton.onclick = () => {
    ((checkbox.remove() == listDiv.remove()) == düzenleButton.remove()) ==
      deleteButton.remove();
  };

  düzenleButton.onclick = () => {
    const x = document.createElement("input");
    x.setAttribute("type", "text");
    document.getElementById("allList", "unFinishedList").appendChild(x);
  };

  checkbox.appendChild(listDiv);
  onayBox.appendChild(listDiv);
  checkbox.appendChild(deleteButton);
  onayBox.appendChild(deleteButton);
  checkbox.appendChild(düzenleButton);
  onayBox.appendChild(düzenleButton);

  listElement.appendChild(checkbox);
  listElement2.appendChild(checkbox);
  listElement.appendChild(onayBox);
  listElement2.appendChild(onayBox);
  listElement1.appendChild(deleteButton);
};
