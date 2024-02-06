import { Input } from "@/components/input"
import { Bell } from "@/icons/bell"
import { Sun } from "@/icons/sun"

export const RegisterForm = () => {
    return (
        <form className="flex flex-col gap-3">
            <Input
                startContent={<Sun width={15} height={15} />}
                placeholder="Email"
            />
            <Input placeholder="Senha" />
        </form>
    )
}
