import { create } from "zustand"

interface props {
    status: boolean
    setStatus: () => void
}

export const useAside = create<props>((set) => ({
    status: false,
    setStatus: () => set((state) => ({ status: !state.status })),
}))
