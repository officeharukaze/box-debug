const colors = document.getElementsByName('colors');

document.getElementById('save').onclick = () => {
  if (colors[0].checked) {
    localStorage['color'] = 'red';
  } else if (colors[1].checked) {
    localStorage['color'] = 'blue';
  } else {
    localStorage['color'] = 'green';
  }
}
document.body.onload = () => {
  switch (localStorage['color']) {
    case 'red': {
      colors[0].checked = true;
      break;
    }
    case 'blue': {
      colors[1].checked = true;
      break;
    }
    case 'green': {
      colors[2].checked = true;
      break;
    }
    default: {
      colors[0].checked = true;
      break;
    }
  }
}
