"use client"

import { UseRegister } from "@/app/auth/register/_form/useRegister"
import {
    Input,
    InputContainer,
    InputContent,
    InputRoot,
} from "@/components/input"
import { Eye } from "@/icons/eye"
import { EyeSlash } from "@/icons/eyeSlash"
import { SyntheticEvent, useState } from "react"

export const RegisterForm = () => {
    const [show, setShow] = useState(true)
    const { errors, handleRegister, handleSubmit, register } = UseRegister()

    function handleClick(e: SyntheticEvent) {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-3"
        >
            <InputRoot>
                <InputContainer>
                    <Input placeholder="Nome" {...register("name")} />
                </InputContainer>
            </InputRoot>
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
            <InputRoot>
                <InputContainer>
                    <Input
                        type={`${show ? "password" : "text"}`}
                        placeholder="Confirmar senha"
                        {...register("confirmPassword")}
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
