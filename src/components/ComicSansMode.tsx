'use client'

import { useContext } from 'react'
import { AppContext } from '@/app/providers'
import { Switch } from "@/components/ui/switch"

export function ComicSansMode() {
  const { toggleComicSansMode } = useContext(AppContext)

  return (
    <Switch
      onCheckedChange={toggleComicSansMode}
    />
  )
}
