import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface User {
    name: string
    email: string
    role: string
}

interface actions {
    isAuthenticated: boolean
    user: null | User
    login: (data: User) => void
    logout: () => void
}

export const useUser = create(
    persist<actions>(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (data) => set({ user: data, isAuthenticated: true }),
            logout: () => set({ user: null, isAuthenticated: false }),
        }),
        { name: "user", storage: createJSONStorage(() => sessionStorage) },
    ),
)
