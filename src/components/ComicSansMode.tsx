'use client'

import { useContext } from 'react'
import { AppContext } from '@/app/providers'
import { Switch } from "@/components/ui/switch"
import { Card, CardHeader, CardContent } from '@/components/ui/card'

export function ComicSansMode() {
  const { toggleComicSansMode } = useContext(AppContext)

  return (
    <div className="mt-12 w-[350px]">
      <Card>
        <CardContent>
          <p className="mt-6">
            Click this to toggle Comic Sans Mode.
          </p>
          <div className="mt-3">
            <Switch
              onCheckedChange={toggleComicSansMode}
            />
          </div>
        </CardContent>
      </Card>
      
    </div>
    
  )
}
