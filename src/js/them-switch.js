const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  console.log(Theme.DARK)

  const bodyEl = document.querySelector('body')
  const themeSwitchButton = document.querySelector('#theme-switch-toggle')
  const marker = document.querySelector('.theme-switch__track')
   
  classBodyAdd ()
  
  themeSwitchButton.addEventListener('change', themeSwitch)
  themeSwitchButton.addEventListener('change', checkBox)
  
  function themeSwitch (evnt) {
    evnt.preventDefault()
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
  

  function classBodyAdd () {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === Theme.DARK) {
       bodyEl.classList.add(Theme.DARK)
       themeSwitchButton.checked = true
    } else {
       bodyEl.classList.add(Theme.LIGHT)
    }
  }
  
