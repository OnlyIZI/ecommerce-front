"use client"

import {
    Input,
    InputContainer,
    InputContent,
    InputRoot,
} from "@/components/input"
import { Eye } from "@/icons/eye"
import { EyeSlash } from "@/icons/eyeSlash"
import { SyntheticEvent, useState } from "react"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/lib/api"
import { useForm } from "react-hook-form"

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
})

type ISchema = z.infer<typeof schema>

const handleLogin = async (data: ISchema) => {
    const response = await api.post("/user/login", {
        data,
    })

    return await response.data
}

export const LoginForm = () => {
    const { register, handleSubmit } = useForm({
        mode: "all",
        resolver: zodResolver(schema),
    })
    const [show, setShow] = useState(true)

    function handleClick(e: SyntheticEvent) {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleLogin)}
        >
            <InputRoot>
                <InputContainer>
                    <Input placeholder="Email" {...register("email")} />
                </InputContainer>
            </InputRoot>
            <InputRoot>
                <InputContainer>
                    <Input
                        type={`${show ? "password" : "text"}`}
                        placeholder="Senha"
                        {...register("password")}
                    />
                    <InputContent>
                        <button
                            className="flex items-center justify-center"
                            onClick={handleClick}
                        >
                            {show ? (
                                <Eye width={22} height={22} />
                            ) : (
                                <EyeSlash width={22} height={22} />
                            )}
                        </button>
                    </InputContent>
                </InputContainer>
            </InputRoot>
            <button type="submit">Enviar</button>
        </form>
    )
}
