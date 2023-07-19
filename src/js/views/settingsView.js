class SettingsView {
  #navBar = document.querySelector('.nav-bar');
  #modalForm = document.querySelector('.modal-form');
  #modalOverlay = document.querySelector('.overlay');
  #modals = document.querySelectorAll('.modal');
  #modalCloseBtns = document.querySelectorAll('.btn-close');
  #modalSliderBtns = document.querySelectorAll('.btn-slider-container');
  #pomodoroInput = document.getElementById('timer-pomodoro');
  #shortBreakInput = document.getElementById('timer-short-br');
  #longBreakInput = document.getElementById('timer-long-br');
  #colorThemeSelectBtns = document.querySelectorAll('.btn-color-theme-select');
  #colorThemeBtns = document.querySelectorAll('.btn-color-theme');
  #colorThemeContainer = document.querySelector('.color-theme-btn-container');
  #colorSelectTextContainer = document.querySelector('.color-select-text');
  #colorThemeBtnSelectContainer = document.querySelector(
    '.color-theme-btn-select-container'
  );
  #breakIntervalInput = document.getElementById('break-interval');
  #selectedTimerMode = null;
  #selectedColorSet = null;
  #colors = {
    red: ['#c84242'],
    pink: ['#ae3ec9'],
    blue: ['#1971c2'],
    green: ['#2f9e44'],
    purple: ['#7048e8'],
    yellow: ['#f08c00'],
  };

  constructor() {
    this._handlerNavButton();
    this._timerColorThemeClickHandler();
  }

  addHandlerTimerSettings(handler, state) {
    this.#modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (
        this.#pomodoroInput.value !== '' ||
        this.#shortBreakInput.value !== '' ||
        this.#longBreakInput.value !== ''
      ) {
        state.timers.pomodoro.timer = +this.#pomodoroInput.value * 60;
        this.#pomodoroInput.value = '';

        state.timers.shortBreak.timer = +this.#shortBreakInput.value * 60;
        this.#shortBreakInput.value = '';

        state.timers.longBreak.timer = +this.#longBreakInput.value * 60;
        this.#longBreakInput.value = '';
      }

      if (this.#breakIntervalInput.value !== '') {
        state.longBreakIntervals = +this.#breakIntervalInput.value;
        this.#breakIntervalInput.value = '';
      }

      this._closeModal();
      handler();
    });
  }

  addHandlerApplyColorSettings(handler, state) {
    this.#colorThemeBtnSelectContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn-color-theme-select')) return;
      this.#selectedColorSet = this._chooseColor(e.target);
      this.#selectedColorSet = e.target.dataset.color;
      this.#colorThemeBtns.forEach((button) => {
        this.#colorThemeBtns.forEach((button) => {
          if (button.dataset.timer === this.#selectedTimerMode) {
            button.style.backgroundColor = this.#colors[this.#selectedColorSet];
          }
        });
      });

      state.timers[this.#selectedTimerMode].colorSet =
        state.colors[this.#selectedColorSet];

      this.#modals[1].classList.add('hidden');
      this.#modals[0].classList.remove('hidden');

      handler();
    });
  }

  addHandlerSliderBtn(handler) {
    this.#modalSliderBtns.forEach((slider) => {
      slider.addEventListener('click', (e) => {
        slider.classList.toggle('btn-slider-active');
        handler(slider.dataset.name);
      });
    });

    /* btn-slider-active */
  }

  _handlerNavButton() {
    this.#navBar.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn-nav')) return;

      const curModal = e.target.dataset.target;
      this._openModal(curModal);
    });

    this.#modalCloseBtns.forEach((button) => {
      button.addEventListener('click', () => this._closeModal());
    });

    this.#modalOverlay.addEventListener('click', () => this._closeModal());
  }

  _timerColorThemeClickHandler() {
    this.#colorThemeContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains === 'btn-color-theme') return;
      this.#modals[0].classList.add('hidden');
      this.#modals[1].classList.remove('hidden');

      if (e.target.dataset.timer === 'pomodoro') {
        this.#colorSelectTextContainer.textContent =
          'Pick a color for Pomodoro';
      }

      if (e.target.dataset.timer === 'shortBreak') {
        this.#colorSelectTextContainer.textContent =
          'Pick a color for Short Break';
      }

      if (e.target.dataset.timer === 'longBreak') {
        this.#colorSelectTextContainer.textContent =
          'Pick a color for Long Break';
      }
      this.#selectedTimerMode = e.target.dataset.timer;
    });
  }

  _chooseColor(selectedColorBtn) {
    this.#colorThemeSelectBtns.forEach((button) => {
      button.classList.remove('selected');
    });

    selectedColorBtn.classList.add('selected');
    return selectedColorBtn.dataset.color;
  }

  _openModal(curModal) {
    this.#modals.forEach((modal) => {
      if (modal.classList.contains(`modal__${curModal}`)) {
        modal.classList.remove('hidden');
        this.#modalOverlay.classList.remove('hidden');
      }
    });
  }

  _closeModal() {
    this.#modals.forEach((modal) => {
      modal.classList.add('hidden');
    });

    this.#modalOverlay.classList.add('hidden');
  }
}

export default new SettingsView();
