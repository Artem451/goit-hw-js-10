const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  console.log(Theme.DARK)

  const bodyEl = document.querySelector('body')
  const themeSwitchButton = document.querySelector('#theme-switch-toggle')
  themeSwitchButton.addEventListener('change', themeSwitch)
  bodyEl.classList.add(Theme.LIGHT)

  function themeSwitch (evnt) {
    
    if(evnt.target.checked) {
       bodyEl.classList.add(Theme.DARK)
       bodyEl.classList.remove(Theme.LIGHT)
    } else {
        bodyEl.classList.add(Theme.LIGHT)
        bodyEl.classList.remove(Theme.DARK)
    }
  }