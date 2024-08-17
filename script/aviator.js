aviatorGo.onclick = function () {
  pageHome.classList.add("b-none");
  pageHome.classList.remove("b-show");
  header.classList.add("b-none");
  header.classList.remove("b-show");
  menu.classList.add("b-none");
  menu.classList.remove("b-show");

  pageAviator.style["z-index"] = "100"
  pageAviator.style["position"] = "relative"
  pageAviator.style["top"] = "0px"

  pageAviator.classList.remove("b-none");
  pageAviator.classList.add("b-show");
}

//Функция для генерации случайного числа
function aviatorGetRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(
    decimals,
  );
  return parseFloat(str);
}

//Нажатие на кнопку "GET SIGNAL"
aviatorGetSignal.onclick = function () {
  let receivingSignal = aviatorGetRandomFloat(1.00, 3.99, 2);

  if ((receivingSignal.toString().length == 3)) {
    receivingSignal += "0";
  } if ((receivingSignal.toString().length == 1)) {
    receivingSignal += ".00";
  }
  aviatorPrintSignal.innerHTML = `${receivingSignal}${"x"}`;
  aviatorPrintSignal.classList.remove("aviator-deactivate");
  aviatorGoTimer(timerSeconds);
  aviatorGetSignal.disabled = true;
}

//Нажатие на кнопку "GET SIGNAL", когда идёт таймер 60 секунд.
aviatorGetSignalTwo.onclick = function () {
  aviatorGetSignalTwo.disabled = true;
  aviatorGoTimerError(5, "go");
}



//Таймер после получения сигнала
function aviatorGoTimer(time) {
  let timer = setInterval(() => {
    if (time >= 1) {
      aviatorGetSignalTwo.classList.remove("aviator-deactivate");
      aviatorGetSignal.classList.add("aviator-deactivate");
      aviatorGetSignalTwo.style["z-index"] = "5";
      let timer = time
      aviatorStopProgress.style["animation"] = `animateProgress ${timerSeconds}s linear infinite`;
      aviatorStopSignalTimeBlock.classList.remove("aviator-deactivate");
      let stopTimer = document.getElementById("aviator-stop-timer");
      
      if (language == "en") {
        stopTimer.innerHTML = `${time--}${"<span> seconds</span>"}`;
        timer = time;
      } if (language == "ru") {
        stopTimer.innerHTML = `${time--}${"<span> секунд</span>"}`;
        timer = time;
      }
      aviatorGetSignal.disabled = true;
    } else {
      aviatorGetSignalTwo.classList.add("aviator-deactivate");
      aviatorGetSignal.classList.remove("aviator-deactivate");
      aviatorGetSignalTwo.style["z-index"] = "-1";
      aviatorStopSignalTimeBlock.classList.add("aviator-deactivate");
      aviatorStopProgress.style["animation"] = "none";
      clearInterval(timer);
      aviatorGetSignal.disabled = false;
    }
  }, 1000)
}

//Работа уведомления ошибки
function aviatorGoTimerError(time) {
  const timer = setInterval(() => {
    if (time >= 1) {
      time--;
      aviatorErrorNotification.classList.remove("aviator-deactivate");
      aviatorErrorProgress.style["animation"] = "animateErrorProgress 5s linear infinite";
      aviatorErrorNotification.style["transform"] = "translateY(0px)";
    } else {
      aviatorErrorNotification.style["transform"] = "translateY(-99px)";
      aviatorErrorProgress.style["animation"] = "none";
      clearInterval(timer);
      aviatorGetSignalTwo.disabled = false;
      aviatorErrorNotification.classList.add("aviator-deactivate");
    }
    aviatorErrorExit.onclick = function () {
      aviatorErrorNotification.classList.add("aviator-deactivate");
      aviatorErrorNotification.style["transform"] = "translateY(-99px)";
      aviatorErrorProgress.style["animation"] = "none";;
      clearInterval(timer);
      aviatorGetSignalTwo.disabled = false;
    }
  }, 1000)
}