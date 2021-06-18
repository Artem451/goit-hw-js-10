const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  console.log(Theme.DARK)

  const bodyEl = document.querySelector('body')
  const themeSwitchButton = document.querySelector('#theme-switch-toggle')
  const marker = document.querySelector('.theme-switch__track')


  themeSwitchButton.addEventListener('change', themeSwitch)
  themeSwitchButton.addEventListener('change', checkBox)
  test(themeSwitchButton)
  classBodyAdd (bodyEl)

  
  
  
  function themeSwitch (evnt) {
    evnt.preventDefault()
    let savedTheme = bodyEl.classList
    
    
    if(!evnt.target.checked) {
       bodyEl.classList.add(Theme.LIGHT)
       bodyEl.classList.remove(Theme.DARK)
       
    } else {
       bodyEl.classList.add(Theme.DARK)
       bodyEl.classList.remove(Theme.LIGHT)
       
    }
    localStorage.setItem('theme', savedTheme)
  }
  
  function checkBox (evnt) {
    let savedCheck = evnt.target.checked
    localStorage.setItem('checked', savedCheck)
    
  }
  
  function test () {
      const checkStatus = localStorage.getItem('checked')
      console.log(checkStatus)
      themeSwitchButton.cheked = checkStatus
  }

  function classBodyAdd () {
      console.log(bodyEl.classList)
    if(bodyEl.classList === null){
        bodyEl.classList.remove('null')
        bodyEl.classList.add(Theme.LIGHT)
    } else {bodyEl.classList.add (localStorage.getItem('theme'))}
  }