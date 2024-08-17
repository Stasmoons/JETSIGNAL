luckyjetGo.onclick = function () {
  pageHome.classList.add("b-none");
  pageHome.classList.remove("b-show");
  header.classList.add("b-none");
  header.classList.remove("b-show");
  menu.classList.add("b-none");
  menu.classList.remove("b-show");

  pageLuckyjet.style["z-index"] = "100"
  pageLuckyjet.style["position"] = "relative"
  pageLuckyjet.style["top"] = "0px"

  pageLuckyjet.classList.remove("b-none");
  pageLuckyjet.classList.add("b-show");
}

//Функция для генерации случайного числа
function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(
    decimals,
  );
  return parseFloat(str);
}

//Нажатие на кнопку "GET SIGNAL"
luckyjetGetSignal.onclick = function () {
  let receivingSignal = getRandomFloat(1.00, 3.99, 2);

  if ((receivingSignal.toString().length == 3)) {
    receivingSignal += "0";
  } if ((receivingSignal.toString().length == 1)) {
    receivingSignal += ".00";
  }
  luckyjetPrintSignal.innerHTML = `${receivingSignal}${"x"}`;
  luckyjetPrintSignal.classList.remove("luckyjet-deactivate");
  luckyjetGoTimer(timerSeconds);
  luckyjetGetSignal.disabled = true;
}

//Нажатие на кнопку "GET SIGNAL", когда идёт таймер 60 секунд.
luckyjetGetSignalTwo.onclick = function () {
  luckyjetGetSignalTwo.disabled = true;
  luckyjetGoTimerError(5, "go");
}



//Таймер после получения сигнала
function luckyjetGoTimer(time) {
  const timer = setInterval(() => {
    if (time >= 1) {
      luckyjetGetSignalTwo.classList.remove("luckyjet-deactivate");
      luckyjetGetSignal.classList.add("luckyjet-deactivate");
      luckyjetGetSignalTwo.style["z-index"] = "5";
      luckyjetStopProgress.style["animation"] = `animateProgress ${timerSeconds}s linear infinite`;
      luckyjetStopSignalTimeBlock.classList.remove("luckyjet-deactivate");
      let stopTimer = document.getElementById("luckyjet-stop-timer");

      if (language == "en") {
        stopTimer.innerHTML = `${time--}${"<span> seconds</span>"}`;
        timerr = time;
      } if (language == "ru") {
        stopTimer.innerHTML = `${time--}${"<span> секунд</span>"}`;
        timerr = time;
      }
      luckyjetGetSignal.disabled = true;
    } else {
      luckyjetGetSignalTwo.classList.add("luckyjet-deactivate");
      luckyjetGetSignal.classList.remove("luckyjet-deactivate");
      luckyjetGetSignalTwo.style["z-index"] = "-1";
      luckyjetStopSignalTimeBlock.classList.add("luckyjet-deactivate");
      luckyjetStopProgress.style["animation"] = "none";
      clearInterval(timer);
      luckyjetGetSignal.disabled = false;
    }
  }, 1000)
}

//Работа уведомления ошибки
function luckyjetGoTimerError(time) {
  const timer = setInterval(() => {
    if (time >= 1) {
      time--;
      luckyjetErrorNotification.classList.remove("luckyjet-deactivate");
      luckyjetErrorProgress.style["animation"] = "animateErrorProgress 5s linear infinite";
      luckyjetErrorNotification.style["transform"] = "translateY(0px)";
    } else {
      luckyjetErrorNotification.style["transform"] = "translateY(-99px)";
      luckyjetErrorProgress.style["animation"] = "none";
      clearInterval(timer);
      luckyjetGetSignalTwo.disabled = false;
      luckyjetErrorNotification.classList.add("luckyjet-deactivate");
    }
    luckyjetErrorExit.onclick = function () {
      luckyjetErrorNotification.classList.add("luckyjet-deactivate");
      luckyjetErrorNotification.style["transform"] = "translateY(-99px)";
      luckyjetErrorProgress.style["animation"] = "none";;
      clearInterval(timer);
      luckyjetGetSignalTwo.disabled = false;
    }
  }, 1000)
}