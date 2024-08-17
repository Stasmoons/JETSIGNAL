rocketQueenGo.onclick = function () {
    pageHome.classList.add("b-none");
    pageHome.classList.remove("b-show");
    header.classList.add("b-none");
    header.classList.remove("b-show");
    menu.classList.add("b-none");
    menu.classList.remove("b-show");
  
    pageRocketQueen.style["z-index"] = "100"
    pageRocketQueen.style["position"] = "relative"
    pageRocketQueen.style["top"] = "0px"
  
    pageRocketQueen.classList.remove("b-none");
    pageRocketQueen.classList.add("b-show");
  }
  
  //Функция для генерации случайного числа
  function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(
      decimals,
    );
    return parseFloat(str);
  }
  
  //Нажатие на кнопку "GET SIGNAL"
  rocketQueenGetSignal.onclick = function () {
    let receivingSignal = getRandomFloat(1.00, 3.99, 2);
  
    if ((receivingSignal.toString().length == 3)) {
      receivingSignal += "0";
    } if ((receivingSignal.toString().length == 1)) {
      receivingSignal += ".00";
    }
    rocketQueenPrintSignal.innerHTML = `${receivingSignal}${"x"}`;
    rocketQueenPrintSignal.classList.remove("rocket-queen-deactivate");
    rocketQueenGoTimer(timerSeconds);
    rocketQueenGetSignal.disabled = true;
  }
  
  //Нажатие на кнопку "GET SIGNAL", когда идёт таймер 60 секунд.
  rocketQueenGetSignalTwo.onclick = function () {
    rocketQueenGetSignalTwo.disabled = true;
    rocketQueenGoTimerError(5, "go");
  }
  
  
  
  //Таймер после получения сигнала
  function rocketQueenGoTimer(time) {
    const timer = setInterval(() => {
      if (time >= 1) {
        rocketQueenGetSignalTwo.classList.remove("rocket-queen-deactivate");
        rocketQueenGetSignal.classList.add("rocket-queen-deactivate");
        rocketQueenGetSignalTwo.style["z-index"] = "5";
        rocketQueenStopProgress.style["animation"] = `animateProgress ${timerSeconds}s linear infinite`;
        rocketQueenStopSignalTimeBlock.classList.remove("rocket-queen-deactivate");
        let stopTimer = document.getElementById("rocket-queen-stop-timer");
   
        if (language == "en") {
          stopTimer.innerHTML = `${time--}${"<span> seconds</span>"}`;
          timerr = time;
        } if (language == "ru") {
          stopTimer.innerHTML = `${time--}${"<span> секунд</span>"}`;
          timerr = time;
        }
        rocketQueenGetSignal.disabled = true;
      } else {
        rocketQueenGetSignalTwo.classList.add("rocket-queen-deactivate");
        rocketQueenGetSignal.classList.remove("rocket-queen-deactivate");
        rocketQueenGetSignalTwo.style["z-index"] = "-1";
        rocketQueenStopSignalTimeBlock.classList.add("rocket-queen-deactivate");
        rocketQueenStopProgress.style["animation"] = "none";
        clearInterval(timer);
        rocketQueenGetSignal.disabled = false;
      }
    }, 1000)
  }
  
  //Работа уведомления ошибки
  function rocketQueenGoTimerError(time) {
    const timer = setInterval(() => {
      if (time >= 1) {
        time--;
        rocketQueenErrorNotification.classList.remove("rocket-queen-deactivate");
        rocketQueenErrorProgress.style["animation"] = "animateErrorProgress 5s linear infinite";
        rocketQueenErrorNotification.style["transform"] = "translateY(0px)";
      } else {
        rocketQueenErrorNotification.style["transform"] = "translateY(-99px)";
        rocketQueenErrorProgress.style["animation"] = "none";
        clearInterval(timer);
        rocketQueenGetSignalTwo.disabled = false;
        rocketQueenErrorNotification.classList.add("rocket-queen-deactivate");
      }
      rocketQueenErrorExit.onclick = function () {
        rocketQueenErrorNotification.classList.add("rocket-queen-deactivate");
        rocketQueenErrorNotification.style["transform"] = "translateY(-99px)";
        rocketQueenErrorProgress.style["animation"] = "none";;
        clearInterval(timer);
        rocketQueenGetSignalTwo.disabled = false;
      }
    }, 1000)
  }