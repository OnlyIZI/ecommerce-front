"use client"

import {
    Input,
    InputContainer,
    InputContent,
    InputRoot,
} from "@/components/input"
import { Bell } from "@/icons/bell"
import { Eye } from "@/icons/eye"
import { EyeSlash } from "@/icons/eyeSlash"
import { SyntheticEvent, useState } from "react"

export const RegisterForm = () => {
    const [show, setShow] = useState(true)

    function handleClick(e: SyntheticEvent) {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <form className="flex flex-col gap-3">
            <InputRoot>
                <InputContainer>
                    <InputContent>
                        <Bell width={16} height={16} />
                    </InputContent>
                    <Input placeholder="Email" />
                </InputContainer>
            </InputRoot>
            <InputRoot>
                <InputContainer>
                    <Input
                        type={`${show ? "password" : "text"}`}
                        placeholder="Senha"
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
        </form>
    )
}
