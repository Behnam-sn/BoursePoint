t = 1;

function navclick() {
  if (t == 1) {
    w3.addClass('#nav', 'nav-small-back');
    w3.removeClass('#bhr', 'bhr-ex-wh');
    w3.addClass('#bhr', 'bhr-ex-bl');
    t = 0;
  } else {
    w3.removeClass('#nav', 'nav-small-back');
    w3.removeClass('#bhr', 'bhr-ex-bl');
    w3.addClass('#bhr', 'bhr-ex-wh');
    t = 1;
  }
}
