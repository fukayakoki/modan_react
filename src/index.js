import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deletelist2 = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (inputText) => {
  //div
  const div = document.createElement("div");
  div.className = "list-row";

  //li
  const li = document.createElement("li");
  li.innerText = inputText;

  //buttonその１
  const completeB = document.createElement("button");
  completeB.innerText = "完了";
  completeB.addEventListener("click", () => {
    deletelist(completeB.parentNode);

    //完了に追記
    //button作成
    const returnB = document.createElement("button");
    returnB.innerText = "戻す";
    returnB.addEventListener("click", () => {
      deletelist2(returnB.parentNode);

      createIncompleteList(returnB.parentNode.firstElementChild.innerText);
    });

    //div作成
    const div2 = document.createElement("div");
    div2.className = "list-row";

    //li作成
    const li = document.createElement("li");
    li.innerText = completeB.parentNode.firstElementChild.innerText;

    div2.appendChild(li);
    div2.appendChild(returnB);
    document.getElementById("complete-list").appendChild(div2);
  });

  //buttonそのに
  const deleteB = document.createElement("button");
  deleteB.innerText = "削除";
  deleteB.addEventListener("click", () => {
    deletelist(deleteB.parentNode);
  });

  //divに追加
  div.appendChild(li);
  div.appendChild(completeB);
  div.appendChild(deleteB);

  //divを表示
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
