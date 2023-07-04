export const state = {
  colors: {
    red: ['#c84242', '#ce5555', '#d36868', '#b43b3b'],
    pink: ['#ae3ec9', '#b651ce', '#be65d4', '#8b32a1'],
    blue: ['#1971c2', '#307fc8', '#478dce', '#145a9b'],
    green: ['#2f9e44', '#44a857', '#59b169', '#267e36'],
    purple: ['#7048e8', '#7e5aea', '#8d6ded', '#5a3aba'],
    yellow: ['#f08c00', '#f2981a', '#f3a333', '#c07000'],
  },
  sessionCounter: 0,
  longBreakInterval: 4,
  autoStartBreak: true,
  autoStartPomodoro: true,
  timers: {
    pomodoro: {
      timer: 1500,
      colorSet: ['#c84242', '#ce5555', '#d36868', '#b43b3b'],
    },
    shortBreak: {
      timer: 300,
      colorSet: ['#2f9e44', '#44a857', '#59b169', '#267e36'],
    },
    longBreak: {
      timer: 900,
      colorSet: ['#1971c2', '#307fc8', '#478dce', '#145a9b'],
    },
  },
  currentTimer: {
    timer: 1500,
    colorSet: ['#c84242', '#ce5555', '#d36868', '#b43b3b'],
  },
};

// const changeShortBreakTime = function () {};
// const changeLongBreakTime = function () {};
export const changeCurrentTimer = function (curTime) {
  state.currentTimer = state.timers[curTime];
};
