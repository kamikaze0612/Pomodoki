import * as model from "./model.js";
import timerView from "./views/timerView.js";
import settingsView from "./views/settingsView.js";

const controlTimer = function () {
  const currentTimerMode = model.getTimerObject("pomodoro");
  timerView.setTimer(currentTimerMode);
};

const controlApplySettings = function () {
  const currentTimerMode = timerView.getTimerMode();
  const currentTimerObject = model.getTimerObject(currentTimerMode);
  timerView.setTimer(currentTimerObject);
};

const controlTab = function () {
  const currentTimerMode = timerView.getTimerMode();
  const currentTimerObject = model.getTimerObject(currentTimerMode);
  timerView.setTimer(currentTimerObject);
};

const controlNextSession = function () {
  timerView.setSession(model.state.sessionCounter);
  const currentTimerMode = timerView.getTimerMode();
  const nextTimerMode = model.getNextTimerName(currentTimerMode);

  const autoStart = {
    nextTimer: nextTimerMode,
    autoStartPomodoro: model.state.autoStartPomodoro,
    autoStartBreak: model.state.autoStartBreak,
  };

  if (nextTimerMode !== "pomodoro") {
    model.state.sessionCounter++;
  }
  const nextTimerObject = model.getTimerObject(nextTimerMode);
  timerView.setTimer(nextTimerObject);

  return autoStart;
};

const controlResetSessions = function () {
  model.state.sessionCounter = 1;
  timerView.setSession(model.state.sessionCounter);
};

const controlSliderBtn = function (value) {
  if (value === "shortBreak") {
    model.state.autoStartBreak = !model.state.autoStartBreak;
  }

  if (value === "pomodoro") {
    model.state.autoStartPomodoro = !model.state.autoStartPomodoro;
  }
};

const init = function () {
  timerView.addHandlerStart(controlTimer, controlNextSession);
  timerView.addHandlerTab(controlTab);
  timerView.addHandlerNextSession(
    controlNextSession,
    model.state,
    model.getNextTimerName
  );
  timerView.addHandlerReset(controlResetSessions);
  settingsView.addHandlerTimerSettings(controlApplySettings, model.state);
  settingsView.addHandlerApplyColorSettings(controlApplySettings, model.state);
  settingsView.addHandlerSliderBtn(controlSliderBtn);
};

init();
