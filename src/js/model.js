export const state = {
  colors: {
    red: ['#c84242', '#ce5555', '#d36868', '#b43b3b'],
    pink: ['#ae3ec9', '#b651ce', '#be65d4', '#8b32a1'],
    blue: ['#1971c2', '#307fc8', '#478dce', '#145a9b'],
    green: ['#2f9e44', '#44a857', '#59b169', '#267e36'],
    purple: ['#7048e8', '#7e5aea', '#8d6ded', '#5a3aba'],
    yellow: ['#f08c00', '#f2981a', '#f3a333', '#c07000'],
  },
  autoStartPomodoro: false,
  autoStartBreak: true,
  longBreakIntervals: 4,
  sessionCounter: 1,
  timers: {
    pomodoro: {
      name: 'pomodoro',
      timer: 1500,
      colorSet: ['#c84242', '#ce5555', '#d36868', '#b43b3b'],
    },
    shortBreak: {
      name: 'shortBreak',
      timer: 300,
      colorSet: ['#2f9e44', '#44a857', '#59b169', '#267e36'],
    },
    longBreak: {
      name: 'longBreak',
      timer: 900,
      colorSet: ['#1971c2', '#307fc8', '#478dce', '#145a9b'],
    },
  },
};

export const getTimerObject = function (timerModeName) {
  return state.timers[timerModeName];
};

export const getNextTimerName = function (currentTimerName) {
  if (
    currentTimerName === 'pomodoro' &&
    state.sessionCounter % state.longBreakIntervals !== 0
  ) {
    return 'shortBreak';
  }

  if (
    currentTimerName === 'pomodoro' &&
    state.sessionCounter % state.longBreakIntervals === 0
  ) {
    return 'longBreak';
  }

  return 'pomodoro';
};
