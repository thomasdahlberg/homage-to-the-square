function handleChange(event) {
  const { target } = event;
  const homageElement = document.body.querySelector('homage-to-the-square');
  if (target.name === 'composition-type') {
    handleCompositionChange(target, homageElement);
  } else if (target.getAttribute('aria-disabled') !== 'true') {
    handleColorChange(target, homageElement);
  }
}

function handleColorChange(target, homageElement) {
  const { value, id } = target ;
  const colorIndex = parseInt(id, 10) - 1;
  const colors = homageElement.getAttribute('colors').split(" ");
  colors[colorIndex] = value;
  homageElement.setAttribute('colors', colors.join(" "));
}

function handleCompositionChange(target, homageElement) {
  const { name, value } = target;
  homageElement.setAttribute(name, value);
  handleInactiveColorInput(value);
}

function handleInactiveColorInput(compositionType) {
  resetAriaDisabledOnColorInputs();
  if (compositionType !== '1') {
    document.getElementById(compositionType).setAttribute('aria-disabled', 'true');
  }
}

function resetAriaDisabledOnColorInputs() {
  const colorInputs = document.body.querySelectorAll('input[type="color"]');
  colorInputs.forEach((input) => input.removeAttribute('aria-disabled'));
}
const colorInputs = document.body.querySelectorAll('input[type="color"]');
colorInputs.forEach((colorInput) => {
  colorInput.addEventListener('click', (event) => {
    if (colorInput.ariaDisabled === 'true') event.preventDefault();
  });
});
const form = document.querySelector('form');
form.addEventListener('change', handleChange);