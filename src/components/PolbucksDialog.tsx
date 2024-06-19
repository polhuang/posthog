'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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


export function PolbucksDialog() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  if (clicked) {
    return (
      <div className="mt-6 w-[300px]">
      <Card className="mt-6 p-1">
      <CardHeader>
        <CardTitle>THANKS ILL USE UR IDENTITY WELL HEHE</CardTitle>
      </CardHeader>
      </Card>
    </div>
    )
  }
  
  return (
    <div className="mt-12 w-[360px]">
      <Card className="mt-6 p-1">
      <CardHeader>
        <CardTitle>POL&apos;S AMAZING BUTTON</CardTitle>
        <CardDescription>This button is off the charts!!!!! You've got to try it!</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button>THIS BUTTON ROCKS!!! CLICKS THIS!!!</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>YOU WON $1000 PolBucks!</DialogTitle>
              <DialogDescription>
                Submit your SSN to redeem (please don&apos;t)
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
                <Button type="button" variant="secondary" onClick={handleClick}>
                  Submit
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
      </Card>
    </div>
  )
}
