import { registerSchemaProps, schema } from "@/app/auth/register/_form/schema"
import { api } from "@/lib/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export const UseRegister = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<registerSchemaProps>({
        mode: "onSubmit",
        criteriaMode: "all",
        resolver: zodResolver(schema),
    })

    const handleRegister = async (data: registerSchemaProps) => {
        const { confirmPassword, ...user } = data

        const response = await api.post("/user/register", {
            user,
        })
        console.log(response.status)

        if (response.status == 201) {
            router.push("/")
        }
    }

    return {
        register,
        handleRegister,
        handleSubmit,
        errors,
    }
}
