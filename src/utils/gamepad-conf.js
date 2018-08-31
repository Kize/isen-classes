const buttonsMapping = [
  {
    mappingIndex: 0,
    btnInfo: 'a',
    throwKeyEvent: false,
    key: 'ArrowRight',
    action: this.nextStep,
  },
  {
    mappingIndex: 1,
    btnInfo: 'b',
    throwKeyEvent: true,
    key: 'ArrowDown',
    action: null,
  },
  {
    mappingIndex: 2,
    btnInfo: 'POWER',
    throwKeyEvent: true,
    key: 'a',
    action: null,
  },
  {
    mappingIndex: 3,
    btnInfo: 'x',
    throwKeyEvent: true,
    key: 'ArrowUp',
    action: null,
  },
  {
    mappingIndex: 4,
    btnInfo: 'y',
    throwKeyEvent: false,
    key: 'ArrowLeft',
    action: this.previousStep,
  },
  {
    mappingIndex: 6,
    btnInfo: 'L1',
    throwKeyEvent: false,
    key: '',
    action: this.previousStep,
  },
  {
    mappingIndex: 7,
    btnInfo: 'R1',
    throwKeyEvent: false,
    key: '',
    action: this.nextStep,
  },
  {
    mappingIndex: 8,
    btnInfo: 'L2',
    throwKeyEvent: true,
    key: 'a',
    action: null,
  },
  {
    mappingIndex: 9,
    btnInfo: 'R2',
    throwKeyEvent: true,
    key: '',
    action: null,
  },
  {
    mappingIndex: 13,
    btnInfo: 'joystick left pressed',
    throwKeyEvent: true,
    key: 'a',
    action: null,
  },
  {
    mappingIndex: 14,
    btnInfo: 'joystick right pressed',
    throwKeyEvent: true,
    key: 'a',
    action: null,
  },
];

const axesMapping = [
  {
    mappingIndex: 0,
    axeInfo: 'Left stick 🢀🢂',
    throwKeyEvent: true,
    key1: 'a',
    key2: 'z',
  },
  {
    mappingIndex: 1,
    axeInfo: 'Left stick 🢁🢃',
    throwKeyEvent: false,
    negativeThreshold: -0.99,
    positiveThreshold: 0.99,
    action1: () => {
      this.nextStep();
    },
    action2: () => {
      this.previousStep();
    },
  },
  {
    mappingIndex: 2,
    axeInfo: 'Right stick 🢀🢂',
    throwKeyEvent: true,
    key1: 'a',
    key2: 'z',
  },
  {
    mappingIndex: 3,
    axeInfo: 'Right stick 🢁🢃',
    throwKeyEvent: false,
    action1: () => {
      this.nextStep();
    },
    action2: () => {
      this.previousStep();
    },
  },
  {
    mappingIndex: 6,
    axeInfo: 'Arrow stick 🢀🢂',
    throwKeyEvent: true,
    key1: 'a',
    key2: 'z',
  },
  {
    mappingIndex: 7,
    axeInfo: 'Arrow stick 🢁🢃',
    throwKeyEvent: false,
    action1: () => {
      this.nextStep();
    },
    action2: () => {
      this.previousStep();
    },
  },
];

export const GamepadConfiguration = {
  identifier: '8Bitdo',
  debug: true,
  buttonsMapping,
  axesMapping,
};

export const GamepadOptions = {
  keyboardButtonsTimeLoop: 50,
  defaultActionThrottle: 500,

  defaultNegativeThreshold: -0.5,
  defaultPositiveThreshold: 0.5,
};
