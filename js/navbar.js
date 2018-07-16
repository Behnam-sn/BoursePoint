t = true;

function navclick() {
  if (t == true) {
    w3.addClass('#nav', 'nav-small-back');
    w3.removeClass('#bhr', 'bhr-ex-wh');
    w3.addClass('#bhr', 'bhr-ex-bl');
    t = false;
  } else {
    w3.removeClass('#nav', 'nav-small-back');
    w3.removeClass('#bhr', 'bhr-ex-bl');
    w3.addClass('#bhr', 'bhr-ex-wh');
    t = true;
  }
}