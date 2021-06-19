const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  console.log(Theme.DARK)

  const bodyEl = document.querySelector('body')
  const themeSwitchButton = document.querySelector('#theme-switch-toggle')
  const marker = document.querySelector('.theme-switch__track')
   
  classBodyAdd (bodyEl)
  checkBox(themeSwitchButton)
  
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
  
  
  
  function checkBox () {
     if (localStorage.getItem('theme') === Theme.LIGHT) {
         themeSwitchButton.checked = false
     } else {themeSwitchButton.checked = true}
  }

  function classBodyAdd () {
    if(localStorage.getItem('theme') === null){
       localStorage.setItem('theme', Theme.LIGHT)
        bodyEl.classList.remove('null')
        bodyEl.classList.add(Theme.LIGHT)
    } else {bodyEl.classList.add (localStorage.getItem('theme'))}
  }