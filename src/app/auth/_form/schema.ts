import z from "zod"

export const schema = z.object({
    email: z.string().email("Email invalid."),
    password: z
        .string()
        .min(6, "Your password must have at least 6 characters."),
})

export type ISchema = z.infer<typeof schema>
