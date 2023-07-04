import * as model from './model.js';
import timerView from './views/timerView.js';

const controlTabs = function () {
  model.changeCurrentTimer(timerView.getTimerMode());
  console.log(model.state.currentTimer);
  timerView.setTimer(model.state.currentTimer.timer);
};

const init = function () {
  // Setting current active timer
  timerView.setTimer(model.state.currentTimer.timer);
  timerView.addHandlerSelectTab(controlTabs);
};

init();
