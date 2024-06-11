import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
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
import { RadioGroupForm } from "@/components/RadioForm"


export const metadata: Metadata = {
  title: 'Why PostHog?',
  description:
    'Why PostHog?',
}

export default function PostHog() {
  return (
    <Container className="mt-16 sm:mt-32">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Analytics
          </h1>
          <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            Here's the fun part: putting PostHog to use! This'll be a work in progress, as I learn to utilize more PostHog features.
          </p>
          <h2 className="mt-6 text-2xl font-bold">
            Playground
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Let's add some elements we can track. Please interact with them to populate the dashboards!
            </p>
            <p>
              Starting with a serious question. 
            </p>
            <RadioGroupForm />
            <Dialog>
              <DialogTrigger asChild>
                <Button>This button rocks - click this</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>You won $1000 PolBucks!</DialogTitle>
                  <DialogDescription>
                    Submit your SSN to redeem (please don't)
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <InputOTP maxLength={7}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                        <InputOTPSlot index={6} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Submit
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <h2 className="mt-6 text-2xl font-bold">
            Playground
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <iframe width="100%" height="400" frameborder="0" allowfullscreen src="https://us.posthog.com/embedded/tybMtzfZqafFNvdLaSPO88Ee7UTcZQ"></iframe>
            </div>
        </div>
    </Container>
  )
}

