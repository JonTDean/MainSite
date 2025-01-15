"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import ContactTypeField from "@/components/contact/ContactTypeField"
import ContactDetailsFields from "@/components/contact/ContactDetailsFields"
import MessageField from "@/components/contact/MessageField"

const formSchema = z.object({
  contactType: z.enum(["academic", "work", "personal", "media", "other"]),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal('')),
  phoneCountry: z.string().default("+1"),
  phone: z.string().optional().or(z.literal('')),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactType: "personal",
      name: "",
      email: "",
      phoneCountry: "+1",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission here
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <ContactTypeField form={form} />
        <ContactDetailsFields form={form} />
        <MessageField form={form} />
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  )
}