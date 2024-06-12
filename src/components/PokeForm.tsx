"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import posthog from "posthog-js"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
 
const FormSchema = z.object({
  type: z.enum(["bulbasaur", "charmander", "squirtle"], {
    required_error: "You need to select a notification type.",
  }),
})
 
export function PokeForm() {

  const [pokechoice, setPokechoice] = useState("")
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data.type)
    posthog.capture('pokemon selection', {pokemon: data.type})
    toast({
      title: "You submitted the following values:",
      description: (
        <p>nice</p>
      ),
    })
    setPokechoice(data.type)
  }

  if (pokechoice == "bulbasaur") {
    return <p>Wrong! Charmander beats Bulbasaur, duh! :-P</p>
  } else if (pokechoice == "charmander") {
    return <p>Wrong! Squirtle beats Charmander, duh! :-P</p>
  } else if (pokechoice == "squirtle") {
    return <p>Wrong! Bulbasaur beats Squirtle, duh!:-P</p>
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>What&apos;s the best starter Pokemon?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="charmander" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Charmander
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="bulbasaur" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Bulbasaur
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="squirtle" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Squirtle
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
