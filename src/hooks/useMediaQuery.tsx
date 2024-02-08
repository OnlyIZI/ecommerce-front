import { useEffect, useState } from "react"

export const UseMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(false)
    useEffect(() => {
        const matchQueryList = window.matchMedia(query)

        matchQueryList.addEventListener<"change">("change", () => {
            setMatches(matchQueryList.matches)
        })

        return () => {
            matchQueryList.removeEventListener("change", () => {
                setMatches(matchQueryList.matches)
            })
        }
    }, [query])

    return matches
}
