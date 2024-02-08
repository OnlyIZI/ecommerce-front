import { LoginForm } from "../_form/loginForm"

export default function Login() {
    return (
        <section className="flex flex-col gap-3 rounded-md bg-background px-20 py-8">
            <h1>Login</h1>
            <LoginForm />
        </section>
    )
}
