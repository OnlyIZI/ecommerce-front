export const UserAvatar = () => {

    
    return (
        <section className="flex cursor-pointer items-center gap-2 p-2 hover:bg-border/10">
            <div className="h-8 w-8 overflow-hidden rounded-full">
                <img
                    src="https://w7.pngwing.com/pngs/796/876/png-transparent-avatar-boy-cheerful-mark-avatar-vol-2-icon.png"
                    alt="Avatar image"
                    className="object-cover"
                />
            </div>
            <h3>Guilherme G S</h3>
        </section>
    )
}
