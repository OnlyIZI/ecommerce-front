import { Input } from "@/components/input"

export const RegisterForm = () => {
    return (
        <form className="flex flex-col gap-3">
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
        </form>
    )
}
