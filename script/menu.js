for (let b of backHome) {
  b.onclick = function () {
    backchek = 1
    pageAviator.style["z-index"] = "-100"
    pageAviator.style["position"] = "absolute"
    pageAviator.style["opacity"] = "0"
    pageAviator.classList.remove("b-show");
    
    pageLuckyjet.style["z-index"] = "-100"
    pageLuckyjet.style["position"] = "absolute"
    pageLuckyjet.style["opacity"] = "0"
    pageLuckyjet.classList.remove("b-show");

    pageRocketQueen.style["z-index"] = "-100"
    pageRocketQueen.style["position"] = "absolute"
    pageRocketQueen.style["opacity"] = "0"
    pageRocketQueen.classList.remove("b-show");


    //Шапка
    header.classList.remove("b-none");
    header.classList.add("b-show");
    //Основная страница
    pageHome.classList.remove("b-none");
    pageHome.classList.add("b-show");
    //Меню
    menu.classList.remove("b-none");
    menu.classList.add("b-show");

  }
}

info.onclick = function () {
  // Отключаем страницу
  pageHome.classList.add("b-none");
  pageHome.classList.remove("b-show");
  pageChannel.classList.add("b-none");
  pageChannel.classList.remove("b-show");
  // Включаем страницу
  pageInfo.classList.remove("b-none");
  pageInfo.classList.add("b-show");

  active.style.removeProperty("margin-left");
  active.style["transition"] = "0.4s ease-out";
  active.style["margin-right"] = "176px";
}

home.onclick = function () {
  // Отключаем страницу
  pageInfo.classList.add("b-none");
  pageInfo.classList.remove("b-show");
  pageChannel.classList.add("b-none");
  pageChannel.classList.remove("b-show");
  // Включаем страницу
  pageHome.classList.remove("b-none");
  pageHome.classList.add("b-show");

  active.style.removeProperty("margin-right");
  active.style.removeProperty("margin-left");
}

channel.onclick = function () {
  // Отключаем страницу
  pageHome.classList.add("b-none");
  pageHome.classList.remove("b-show");
  pageInfo.classList.add("b-none");
  pageInfo.classList.remove("b-show");
  // Включаем страницу
  pageChannel.classList.remove("b-none");
  pageChannel.classList.add("b-show");


  active.style.removeProperty("margin-right");
  active.style["transition"] = "0.4s ease-out";
  active.style["margin-left"] = "176px";
}