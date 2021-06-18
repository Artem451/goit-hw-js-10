const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  console.log(Theme.DARK)

  const bodyEl = document.querySelector('body')
  const themeSwitchButton = document.querySelector('#theme-switch-toggle')
  
  bodyEl.classList.add (localStorage.getItem('theme'))
  themeSwitchButton.setAttribute("checked", localStorage.getItem('cheked')) 
  themeSwitchButton.addEventListener('change', themeSwitch)
  
  
  function themeSwitch (evnt) {
    const savedTheme = bodyEl.classList
    const savedCheck = evnt.target.checked
    console.log(evnt.target.checked)
    if(evnt.target.checked) {
       bodyEl.classList.add(Theme.DARK)
       bodyEl.classList.remove(Theme.LIGHT)
    } else {
        bodyEl.classList.add(Theme.LIGHT)
        bodyEl.classList.remove(Theme.DARK)
    }
    localStorage.setItem('theme', savedTheme)
    localStorage.setItem('cheked', savedCheck)
  }
  
  