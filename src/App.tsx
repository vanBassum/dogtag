import { ProfileCard } from "./components/ProfileCard"

export function App() {
    const urlParams = new URLSearchParams(window.location.search)

    const name = urlParams.get("name") ?? "Anonymous"
    const email = urlParams.get("email") ?? ""
    const phone = urlParams.get("phone") ?? ""
    const whatsapp = urlParams.get("whatsapp") ?? phone
    const country = urlParams.get("country") ?? ""
    const message = urlParams.get("message") ?? "Thanks for finding my luggage! Please contact me below so we can arrange its return."

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <ProfileCard
                    name={name}
                    email={email}
                    phone={phone}
                    whatsapp={whatsapp}
                    country={country}
                    message={message}
                />
            </div>
        </div>
    )
}

export default App
