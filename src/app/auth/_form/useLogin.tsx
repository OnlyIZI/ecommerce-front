import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ISchema, schema } from "./schema"
import { api } from "@/lib/api"
import { useUser } from "@/context/useUser"
import { useRouter } from "next/navigation"

export const useLogin = () => {
    const login = useUser((state) => state.login)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISchema>({
        mode: "onBlur",
        criteriaMode: "all",
        resolver: zodResolver(schema),
    })

    const handleLogin = async (data: ISchema) => {
        const response = await api.post("/user/login", {
            data,
        })

        if (response.status == 201) {
            login(response.data)
            router.push("/")
        }
    }

    return {
        register,
        handleSubmit,
        handleLogin,
        errors,
    }
}
