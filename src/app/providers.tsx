'use client'

import { createContext, useEffect, useState, useRef, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useFeatureFlagVariantKey } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'always',
    capture_pageview: true
  })
}

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export const AppContext = createContext<{
  previousPathname?: string
  toggleComicSansMode?: () => void
}>({})

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)

  const [comicSansMode, setComicSansMode] = useState(false)

  const toggleComicSansMode = () => {
    console.log("nice")
    if (comicSansMode == false) {
      posthog.capture(
        '$set', 
        { 
          $set: { comicsans: 'off'  },
        }
      )
    } else {
      posthog.capture(
        '$set', 
        { 
          $set: { comicsans: 'on'  },
        }
      )
    }
    
  }

  let variant = useFeatureFlagVariantKey('comic-sans-mode')

  useEffect(() => {
     (variant == 'variant1') ? setComicSansMode(true) : setComicSansMode(false)
  }, [variant])

  return (
    <AppContext.Provider value={{ previousPathname, toggleComicSansMode }}>
      <div className={
        comicSansMode ? "font-comic mx-auto" : "mx-auto"
      }>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        <PostHogProvider client={posthog}>
            {children}
        </PostHogProvider>
      </ThemeProvider>
      </div>
    </AppContext.Provider>
  )
}
