class TimerView {
  #modeTabsContainer = document.querySelector('.timer--tabs-box');
  #modeTabs = document.querySelectorAll('.timer--tab');
  #timerBtn = document.querySelector('.btn--timer');
  #timerNextSessionBtn = document.querySelector('.btn--next-session');
  #timerDisplay = document.querySelector('.counter--num-text');
  #timerSessionResetBtn = document.querySelector('.timer--session-reset-btn');

  #timerState = false;
  #timerID = null;
  #checkTimerID = null;
  #currentTimerValue = 0;
  #currentTimerBackground = null;

  #sessionCounter = 1;

  /**************** EVENT HANDLERS ****************/
  addHandlerReset(handler) {
    this.#timerSessionResetBtn.addEventListener('click', () => {
      if (window.confirm('Are you sure to reset your sessions?')) {
        this.#sessionCounter = 1;
        handler();
      }
    });
  }

  addHandlerNextSession(handler, state, getNextTimerName) {
    this.#timerNextSessionBtn.addEventListener('click', () => {
      /* if (
        getNextTimerName(this.getTimerMode()) === 'shortBreak' ||
        (getNextTimerName(this.getTimerMode()) === 'longBreak' &&
          state.autoStartBreak)
      ) {
      }

      if (
        getNextTimerName(this.getTimerMode()) === 'pomodoro' &&
        state.autoStartBreak
      ) {
      } else  */ this._stopTimer();
      handler();
    });
  }
  addHandlerStart(handler, goToNextSession) {
    this._timerBtnClickHandler(goToNextSession);
    handler();
  }

  addHandlerTab(handler) {
    this.#modeTabsContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('timer--tab')) return;

      this._activateTab(e.target);
      handler();
      this._stopTimer();
    });
  }

  /**************** TIMER FUNCTIONS ****************/

  _timerBtnClickHandler(goToNextSession) {
    this.#timerBtn.addEventListener('click', () => {
      if (this.#timerState) {
        this._stopTimer();
      } else {
        this._startTimer(goToNextSession);
      }
    });
  }

  _clickBtn() {
    this.#timerBtn.classList.add('clicked');
    this.#timerBtn.textContent = 'pause';
    this.#timerNextSessionBtn.classList.remove('hidden');
    this.#timerState = true;
  }

  _unClickBtn() {
    this.#timerBtn.classList.remove('clicked');
    this.#timerBtn.textContent = 'start';
    this.#timerNextSessionBtn.classList.add('hidden');
    this.#timerState = false;
  }

  _resumeTimer(goToNextSession) {
    this.#timerID = setInterval(() => {
      if (this.#currentTimerValue !== 0) {
        this.#currentTimerValue--;
        this._displayTimer();
      } else {
        const autoStart = goToNextSession();
        if (autoStart.nextTimer === 'pomodoro' && autoStart.autoStartPomodoro);
        else if (
          autoStart.nextTimer !== 'pomodoro' &&
          autoStart.autoStartBreak
        );
        else {
          this._stopTimer();
        }
      }
    }, 1000);
  }

  _pauseTimer() {
    clearInterval(this.#timerID);
  }

  _startTimer(goToNextSession) {
    this._resumeTimer(goToNextSession);
    this._clickBtn();
  }

  _stopTimer() {
    this._unClickBtn();
    this._pauseTimer();
  }

  _displayTimer() {
    this.#timerDisplay.textContent = `${String(
      Math.floor(this.#currentTimerValue / 60)
    ).padStart(2, '0')}:${String(this.#currentTimerValue % 60).padStart(
      2,
      '0'
    )}`;
  }

  _displaySession() {
    this.#timerSessionResetBtn.textContent = `#${this.#sessionCounter}`;
  }

  setSession(currentSessionNum) {
    this.#sessionCounter = currentSessionNum;
    this._displaySession();
  }

  setTimer(timerObject) {
    this.#currentTimerValue = timerObject.timer;
    this.#currentTimerBackground = timerObject.colorSet;
    this._setTimerBackground(this.#currentTimerBackground);
    this._displayTimer();
    this.#modeTabs.forEach((tab) => {
      if (tab.dataset.mode === timerObject.name) {
        this._activateTab(tab);
      }
    });
  }

  getTimerMode() {
    let activeTimerModeName = '';

    this.#modeTabs.forEach((tab) => {
      if (tab.classList.contains('active')) {
        activeTimerModeName = tab.dataset.mode;
      }
    });

    return activeTimerModeName;
  }

  _setTimerBackground(curTimeBackground) {
    document.documentElement.style.setProperty(
      '--primary-color',
      curTimeBackground[0]
    );
    document.documentElement.style.setProperty(
      '--light-color',
      curTimeBackground[1]
    );
    document.documentElement.style.setProperty(
      '--light-color-tint--1',
      curTimeBackground[2]
    );
    document.documentElement.style.setProperty(
      '--dense-color',
      curTimeBackground[3]
    );
    /* --primary-color: #c84242;
    --light-color: #ce5555;
    --light-color-tint--1: #d36868;
    --dense-color: #a03535; */
  }

  /**************** TAB FUNCTIONS ****************/

  _activateTab(selectedTab) {
    this.#modeTabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    selectedTab.classList.add('active');
  }
}

export default new TimerView();
