import React, { useEffect, useState } from 'react';
import SunIcon from "./icons/Sun"
import MoonIcon from "./icons/Moon"

const themes = ['light', 'dark'];

const ThemeToggleButton = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark'
    }
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', t);
    setTheme(t);
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className='inline-flex items-center justify-around rounded-3xl bg-orange-300 dark:bg-zinc-600 w-[60px] h-8 ml-3'>
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${checked ? 'bg-white text-black' : ''} cursor-pointer rounded-3xl p-1 `}
            onClick={toggleTheme}
            aria-label='Toggle Theme'
          >
            {t === 'light' ? <SunIcon className='w-5 h-5' /> : <MoonIcon className='w-5 h-5' />}
          </button>
        )
      })}
    </div>
  )
    : <div />
}

export { ThemeToggleButton }
