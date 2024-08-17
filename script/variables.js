const timerSeconds = 20;

//Кнопки запуска игр
const aviatorGo = document.getElementById("aviator-go");
const luckyjetGo = document.getElementById("luckyjet-go");
const rocketQueenGo = document.getElementById("rocket-queen-go");

//Aviator
const aviatorGetSignal = document.getElementById("aviator-get-signal");
const aviatorStopSignalTimeBlock = document.getElementById("aviator-stop-signal-time-block");
const aviatorPrintSignal = document.getElementById("aviator-print-signal");
const aviatorStopProgress = document.getElementById("aviator-stop-progress");
const aviatorErrorNotification = document.getElementById("aviator-error-notification");
const aviatorErrorProgress = document.getElementById("aviator-error-progress");
const aviatorTextError = document.getElementById("aviator-text-error");
const aviatorGetSignalTwo = document.getElementById("aviator-get-signal-two");
const aviatorErrorExit = document.getElementById("aviator-error-exit");

//LuckyJet
const luckyjetGetSignal = document.getElementById("luckyjet-get-signal");
const luckyjetStopSignalTimeBlock = document.getElementById("luckyjet-stop-signal-time-block");
const luckyjetPrintSignal = document.getElementById("luckyjet-print-signal");
const luckyjetStopProgress = document.getElementById("luckyjet-stop-progress");
const luckyjetErrorNotification = document.getElementById("luckyjet-error-notification");
const luckyjetErrorProgress = document.getElementById("luckyjet-error-progress");
const luckyjetTextError = document.getElementById("luckyjet-text-error");
const luckyjetGetSignalTwo = document.getElementById("luckyjet-get-signal-two");
const luckyjetErrorExit = document.getElementById("luckyjet-error-exit");

//Rocket Queen
const rocketQueenGetSignal = document.getElementById("rocket-queen-get-signal");
const rocketQueenStopSignalTimeBlock = document.getElementById("rocket-queen-stop-signal-time-block");
const rocketQueenPrintSignal = document.getElementById("rocket-queen-print-signal");
const rocketQueenStopProgress = document.getElementById("rocket-queen-stop-progress");
const rocketQueenErrorNotification = document.getElementById("rocket-queen-error-notification");
const rocketQueenErrorProgress = document.getElementById("rocket-queen-error-progress");
const rocketQueenTextError = document.getElementById("rocket-queen-text-error");
const rocketQueenGetSignalTwo = document.getElementById("rocket-queen-get-signal-two");
const rocketQueenErrorExit = document.getElementById("rocket-queen-error-exit");

//Mines
let minesButtonGetSignal = document.getElementById("minesGetSignal");
let minesLoadingSignal = document.getElementById("minesLoading");
let minesScreenStart = document.getElementById("minesScreenStart");
let minesSignal = document.getElementById("minesImgSignal");
let minesGameScreen = document.getElementById("mines-game-screen")

//Royal
const royalButtonGeneration = document.getElementById("royalButtonGeneration");
const royalButtonGenerationIcon = document.getElementById("royalButtonGenerationIcon");
const royalNumberFront = document.getElementById("royalNumberFront");
const royalNumberBack = document.getElementById("royalNumberBack");
const royalCardFront = document.getElementById("royalCardFront");
const royalCardBack = document.getElementById("royalCardBack");

//Bumpucks
const bumpucksButtonGeneration = document.getElementById("bumpucksButtonGeneration");
const bumpucksButtonGenerationIcon = document.getElementById("bumpucksButtonGenerationIcon");
const bumpucksNumberFront = document.getElementById("bumpucksNumberFront");
const bumpucksNumberBack = document.getElementById("bumpucksNumberBack");
const bumpucksCardFront = document.getElementById("bumpucksCardFront");
const bumpucksCardBack = document.getElementById("bumpucksCardBack");


//Шапка и меню
const header = document.getElementById("header");
const menu = document.getElementById("menu");

//Кнопки меню
const info = document.getElementById("menu-button-info");
const home = document.getElementById("menu-button-home");
const channel = document.getElementById("menu-button-channel");

//Активная кнопка
const active = document.getElementById("menu-button-active");

//Основные страницы
const pageHome = document.getElementById("page-home");
const pageInfo = document.getElementById("page-info");
const pageChannel = document.getElementById("page-channel");

//Страницы игр
const pageAviator = document.getElementById("page-aviator");
const pageLuckyjet = document.getElementById("page-luckyjet");
const pageRocketQueen = document.getElementById("page-rocket-queen");

//Кнопка выхода
const backHome = document.querySelectorAll("#backHome");

//Инструкции
const instructionsBumpucks = document.getElementById("instructions-bumpucks");
const instructionsRoyal = document.getElementById("instructions-royal");
const instructionsMines = document.getElementById("instructions-mines");

//Кнопка открытия инструкции
const bumpucksOpenInstructions = document.getElementById("bumpucks-open-instructions");
const royalOpenInstructions = document.getElementById("royal-open-instructions");
const minesOpenInstructions = document.getElementById("mines-open-instructions");
//Кнопка закрытия инструкции
const closeInstructions = document.querySelectorAll("#close-instructions");

//Смена языка
const select = document.querySelector("select")