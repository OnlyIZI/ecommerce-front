import { RegisterForm } from "./_form/index"

export default function Register() {
    return (
        <section className="flex flex-col gap-3 rounded-md bg-background px-20 py-8">
            <h1>Register</h1>
            <RegisterForm />
        </section>
    )
}
