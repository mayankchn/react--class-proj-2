
export default function Hero() {
    return (
        <div className="flex flex-col gap-8 mt-7">
            <img src="../../public/grid.png" alt="hero-showcase" className="max-w-sm self-center" />
            <div className="px-7 flex flex-col gap-4 text-base font-light">
                <h1 className="font-semibold text-4xl">Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}