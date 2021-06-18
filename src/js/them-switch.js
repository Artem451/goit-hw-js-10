const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  console.log(Theme.DARK)

  const bodyEl = document.querySelector('body')
  const themeSwitchButton = document.querySelector('#theme-switch-toggle')
  const marker = document.querySelector('.theme-switch__track')
  

  themeSwitchButton.addEventListener('change', themeSwitch)

  bodyEl.classList.add (localStorage.getItem('theme'))
  
  
  function themeSwitch (evnt) {
    event.preventDefault()
    const savedTheme = bodyEl.classList
    const savedCheck = evnt.target.checked
    
    if(!savedCheck) {
       bodyEl.classList.add(Theme.LIGHT)
       bodyEl.classList.remove(Theme.DARK)
       
    } else {
        bodyEl.classList.add(Theme.DARK)
        bodyEl.classList.remove(Theme.LIGHT)
    }
    localStorage.setItem('theme', savedTheme)
    localStorage.setItem('checked', savedCheck)
  }
  
  