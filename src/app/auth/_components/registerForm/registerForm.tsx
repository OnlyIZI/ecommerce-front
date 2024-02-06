import { Input } from "@/components/input"
import { Bell } from "@/icons/bell"
import { Sun } from "@/icons/sun"

export const RegisterForm = () => {
    return (
        <form className="flex flex-col gap-3">
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
        </form>
    )
}
