class TimerView {
  #timerStartBtn = document.querySelector('.btn--timer');
  #timerNextBtn = document.querySelector('.btn--next-session');
  #timerTabsContainer = document.querySelector('.timer--tabs-box');
  #timerTabs = document.querySelectorAll('.timer--tab');
  #timerBox = document.querySelector('.counter--num-text');
  #root = document.querySelector(':root');
  #time;
  #timerInterval;

  addHandlerSelectTab(handler) {
    this.#timerTabsContainer.addEventListener('click', (e) => {
      this._setTabWindow(e.target);
      handler();
    });
  }

  _startTimer() {
    this.#timerStartBtn.addEventListener('click', () => {
      this._toggleTimerBtn();
    });
  }

  _toggleTimerBtn() {
    if (!this.#timerStartBtn.classList.contains('clicked')) {
      this.#timerStartBtn.textContent = 'pause';
      this.#timerStartBtn.classList.add('clicked');
      this._tickTimer();
      this.#timerNextBtn.classList.remove('hidden');
    } else {
      this.#timerStartBtn.textContent = 'start';
      this.#timerStartBtn.classList.remove('clicked');
      this.#timerNextBtn.classList.add('hidden');
      this._stopTimer();
    }
  }

  // Displaying current timer state into display
  _displayTimer() {
    this.#timerBox.textContent = `${String(
      Math.floor(this.#time / 60)
    ).padStart(2, '0')}:${String(this.#time % 60).padStart(2, '0')}`;
  }

  // Adding time interval into the timer
  _tickTimer() {
    this.#timerInterval = setInterval(() => {
      this.#time--;
      this._displayTimer();
    }, 1000);
  }

  // Clearing time interval from the timer
  _stopTimer() {
    clearInterval(this.#timerInterval);
  }

  // Setting current timer mode
  setTimer(curTimer) {
    this.#time = curTimer;
    this._startTimer();
    this._displayTimer();
  }

  // Highlights current selected tab on tabs window
  _setTabWindow(selectedTab) {
    this._stopTimer();
    this.#timerTabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    selectedTab.classList.add('active');
  }

  getTimerMode() {
    let activeTab = null;
    this.#timerTabs.forEach((tab) => {
      if (tab.classList.contains('active')) {
        activeTab = tab;
      }
    });

    return activeTab.dataset.mode;
  }
}

export default new TimerView();
