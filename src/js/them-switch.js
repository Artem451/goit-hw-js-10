const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  console.log(Theme.DARK)

  const bodyEl = document.querySelector('body')
  const themeSwitchButton = document.querySelector('#theme-switch-toggle')
  const marker = document.querySelector('.theme-switch__track')


  themeSwitchButton.addEventListener('change', themeSwitch)
  themeSwitchButton.addEventListener('change', checkBoxSave)
  bodyEl.classList.add (localStorage.getItem('theme'))
  themeSwitchButton.checked = localStorage.getItem('cheked')
  
  function themeSwitch (evnt) {
    event.preventDefault()
    const savedTheme = bodyEl.classList
    
    
    if(!evnt.target.checked) {
       bodyEl.classList.add(Theme.LIGHT)
       bodyEl.classList.remove(Theme.DARK)
       
    } else {
        bodyEl.classList.add(Theme.DARK)
        bodyEl.classList.remove(Theme.LIGHT)
    }
    localStorage.setItem('theme', savedTheme)
  }

  function checkBoxSave (evnt) {
    const savedCheck = evnt.target.checked
    localStorage.setItem('checked', evnt.target.checked)
    if (localStorage.getItem('cheked')) {
        return true
    } else {return false}
  } 
  
  