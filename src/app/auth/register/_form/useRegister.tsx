import { registerSchemaProps, schema } from "@/app/auth/register/_form/schema"
import { useUser } from "@/context/useUser"
import { api } from "@/lib/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

export const UseRegister = () => {
    const login = useUser((state) => state.login)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        criteriaMode: "all",
        resolver: zodResolver(schema),
    })

    const handleRegister = async (data: registerSchemaProps) => {
        const { confirmPassword, ...user } = data

        const response = await api.post("/user/register", {
            user,
        })

        if (response.status == 201) {
            const response = await api.get("/user/get")
            login(response.data)
            router.push("/")
        }

        reset()
    }

    return {
        register,
        handleRegister,
        handleSubmit,
        errors,
    }
}
