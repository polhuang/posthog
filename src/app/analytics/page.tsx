import { useState } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { ComicSansMode } from '@/components/ComicSansMode'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Container } from '@/components/Container'
import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { PokeForm } from '@/components/PokeForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PolbucksDialog } from '@/components/PolbucksDialog'

export const metadata: Metadata = {
  title: 'PostHog Analytics',
  description:
    'Using PostHog Analytics',
}

const ProductAnalytics = () => {

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Product Analytics</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>

        </p>
  </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}


export default function PostHog() {
  return (
    <Container className="mt-16 sm:mt-32">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Analytics
          </h1>
          <p className="mt-12 space-y-7 text-base">
            Here&apos;s the fun part: putting PostHog to use! This&apos;ll be a work in progress, as I learn to utilize more PostHog features. Let&apos;s add some elements we can track. Please interact with them to populate the dashboards!
          </p>
          <p className="mt-6">
            Let&apos;s start by installing PostHog into our project and pulling in events. After installing the <code>posthog-js</code> package and adding a js snippet to a provider component, we immediately begin ingesting events.
          </p>
          <h2 className="mt-12 text-2xl font-bold">
            Trends
          </h2>
          <p className="mt-6">
            Here&apos;s a basic trend, the pageviews this site has received.
          </p>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <iframe className="h-[300px] w-[80%]" src="https://us.posthog.com/shared/tybMtzfZqafFNvdLaSPO88Ee7UTcZQ"></iframe>
          </div>
          <h2 className="mt-12 text-2xl font-bold">
            Person profiles
          </h2>
          <p className="mt-6 mb-6">
            Let's enable person profiles for all visitors and assign some property to them.
          </p>
          <PokeForm />
          <p className="mt-12">
            After submitting the form, we add a <code>pokemon</code> property with the selected Pokemon. Here&apos;s a bar graph of the results:
            <div className="mt-12">
              <iframe width="100%" height="400" src="https://us.posthog.com/embedded/HiSM7t7baWGr_h4SVdHjqrlL61m58g">
              </iframe>
            </div>
          </p>
          <h2 className="mt-12 text-2xl font-bold">
            Feature flags
          </h2>
          <p className="mt-6">
            We can use feature flags to look at person profiles to enable or disable features. Let&apos; make a switch that turn the website font to Comic Sans.
          </p>
          <ComicSansMode />
          <p className="mt-12">
            After submitting the form, we add a <code>pokemon</code> property with the selected Pokemon. Here&apos;s a bar graph of the results:
            <div className="mt-12">
              <iframe width="100%" height="400" src="https://us.posthog.com/embedded/HiSM7t7baWGr_h4SVdHjqrlL61m58g">
              </iframe>
            </div>
            <p className="mt-12">
              Here, we assign a property to a user when they click the button. By default, it's <code>comicsansmode: "off"</code>. When they click the button, we change it to <code>"on"</code>. We do this with a click handler that asks PostHog for the <code>comicsansmode</code> property, then sets it to the other property. The click handler then makes the equivalent change to a state variable which controls the site font.
            </p>
            <p className="mt-6">
              This is a horrible way to go about it but it demonstrates how quickly PostHog processes events and returns data.
            </p>
          </p>
          <h2 className="mt-12 text-2xl font-bold">
            User paths
          </h2>
          <p className="mt-6">
            Here&apos;s a user path, which isn&apos;t particularly impressive when your website has only a few pages.
          </p>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <iframe className="h-[500px] w-[100%]" src="https://us.posthog.com/shared/dr4wutuYT7pUZCUNMhK-EVGPF9Iwxw"></iframe>
            </div>
          </div>
          <h2 className="mt-12 text-2xl font-bold">
            Funnels
          </h2>
          <p className="mt-6">
            Let&apos;s make a funnel. To do this, we'll create an action that makes sense: resume downloads. So our funnel will show the total number of pageviews, then which of those pageviews led to a resume download.
          </p>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <iframe className="h-[500px] w-[50%]" src="https://us.posthog.com/embedded/PUYFJSB8CZC_NdN7sTQc68AVbBXHUw"></iframe>
            </div>
          <p className="mt-12">
            Now let&apos;s make a funnel based off a multi-event action. But let's make up an element to test on. Let's have our user click a button, fill out a form, and submit it that form.
          </p>
          <PolbucksDialog />
          <p className = "mt-12">
            Let&apos;s take a look at the results, though there won&apos;t be much to see unless other folks click!
          </p>
          
          <div className="mt-12 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <iframe className="h-[500px] w-[70%]" src="https://us.posthog.com/embedded/Oqin0ed0sjyj9_EBmkOP0tMujiqnMg"></iframe>
          </div>
          <p className="mt-12">
            Here&apos;s a retention insight, which shows how many visitors returned over an interval
          </p>
            <div className="mt-12 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <iframe className="h-[700px] w-full" src="https://us.posthog.com/shared/SnEzWZZg71IYsUNwFpXF0SiGeEUnjw"></iframe>
            </div>
          <p className="mt-12">
            A lifecycle insight breaks down new, returning, resurrecting, and dormant users.
          </p>
            <div className="mt-12 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <iframe className="h-[700px] w-full" src="https://us.posthog.com/shared/63tv7WOqOd0WAp59HH8hIiqDARc_6w"></iframe>
            </div>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Starting with a serious question. 
            </p>

            
          </div>
          <h2 className="mt-6 text-2xl font-bold">
            Playground
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <iframe width="100%" height="400" src="https://us.posthog.com/embedded/tybMtzfZqafFNvdLaSPO88Ee7UTcZQ"></iframe>

            </div>
        </div>

    </Container>
  )
}

