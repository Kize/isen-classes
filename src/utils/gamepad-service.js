import { GamePadHandler } from 'gamepad-handler';
import { GamepadOptions } from './gamepad-options';
import { eightbitdoGamepad } from './gamepad-mapping-8bitdo';

export const gamepadHandler = new GamePadHandler([eightbitdoGamepad], GamepadOptions);
gamepadHandler.start();

export function setButtonToPlayNote(mappingIndex, noteOn, noteOff) {
  const buttonMapping = eightbitdoGamepad.buttonsMapping.find(btnMapping => btnMapping.mappingIndex === mappingIndex);

  buttonMapping.mode = 'DOUBLE_ACTION';
  buttonMapping.keydownAction = noteOn;
  buttonMapping.keyupAction = noteOff;
}

export function resetButton(mappingIndex) {
  const buttonMapping = eightbitdoGamepad.buttonsMapping.find(btnMapping => btnMapping.mappingIndex === mappingIndex);

  buttonMapping.mode = 'KEYBOARD_EVENT';
}

export function initGamepad(nextStep, prevStep) {
  const btnMapping = eightbitdoGamepad.buttonsMapping;

  btnMapping[8].mode = 'ACTION';
  btnMapping[8].action = () => {
    prevStep();
  };
  btnMapping[9].mode = 'ACTION';
  btnMapping[9].action = () => {
    nextStep();
  };

  btnMapping[2].mode = 'ACTION';
  btnMapping[2].action = () => {
    prevStep();
  };
  btnMapping[1].mode = 'ACTION';
  btnMapping[1].action = () => {
    nextStep();
  };
}

export function resetGamepad() {
  const btnMapping = eightbitdoGamepad.buttonsMapping;

  btnMapping[8].mode = 'KEYBOARD_EVENT';
  btnMapping[8].action = null;
  btnMapping[9].mode = 'KEYBOARD_EVENT';
  btnMapping[9].action = null;

  btnMapping[2].mode = 'KEYBOARD_EVENT';
  btnMapping[2].action = null;
  btnMapping[1].mode = 'KEYBOARD_EVENT';
  btnMapping[1].action = null;
}
