import z from "zod"

export const schema = z
    .object({
        name: z.string().min(3, "Your name must have at least 3 characters."),
        email: z.string().email("Email invalid."),
        password: z
            .string()
            .min(6, "Your password must have at least 6 characters."),
        confirmPassword: z.string().min(6, "Your password has to be equal."),
    })
    .refine(
        (data) => {
            return data.password === data.confirmPassword
        },
        {
            message: "Your password has to be equal.",
            path: ["confirmPassword"],
        }
    )

export type registerSchemaProps = z.infer<typeof schema>
