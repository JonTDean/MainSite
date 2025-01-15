import ContactForm from '@/components/contact/ContactForm'

export default function Page() {
    return (
        <div className="container flex flex-col items-center py-12">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
                <ContactForm />
            </div>
        </div>
    );
}