import { UseFormReturn } from "react-hook-form"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ContactFormValues } from "./index"
import { formatPartialPhoneNumber } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
form: UseFormReturn<ContactFormValues>
}

export default function ContactDetailsFields({ form }: Props) {
    return (
      <>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="phoneCountry"
                  render={({ field: countryField }) => (
                    <Select 
                      value={countryField.value} 
                      onValueChange={countryField.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[110px]">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="+1">USA (+1)</SelectItem>
                        <SelectItem value="+44">UK (+44)</SelectItem>
                        <SelectItem value="+61">AU (+61)</SelectItem>
                        <SelectItem value="+91">IN (+91)</SelectItem>
                        <SelectItem value="+86">CN (+86)</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FormControl>
                  <Input 
                    placeholder="Your phone number" 
                    {...field}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, '')
                      const formattedValue = formatPartialPhoneNumber(digits.slice(0, 10))
                      field.onChange(formattedValue)
                    }}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </>
    )
  } 