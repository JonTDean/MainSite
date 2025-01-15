import { UseFormReturn } from "react-hook-form"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ContactFormValues } from "./index"

interface Props {
  form: UseFormReturn<ContactFormValues>
}

export default function ContactTypeField({ form }: Props) {
    return (
      <FormField
        control={form.control}
        name="contactType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a contact type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="work">Work Related</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    )
  }