export interface ContactFormValues {
    contactType: "academic" | "work" | "personal" | "media" | "other"
    name: string
    email?: string
    phoneCountry: string
    phone?: string
    message: string
}