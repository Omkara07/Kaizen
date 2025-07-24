import { ChevronRight, Shield, Award, Clock } from "lucide-react"

export function FreeReviewCard() {
    return (
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700 text-white shadow-2xl">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 backdrop-blur-sm"></div>
            {/* Main content container */}
            <div className="relative h-[100%] flex w-full">
                {/* Left side - Translucent overlay card */}
                <div className="flex-1 p-2 flex h-full items-center md:w-full w-1/2">
                    <div className="relative h-full w-full flex items-center">
                        {/* Blurred semicircle background */}
                        <div className="absolute -right-14 top-1/2 transform -translate-y-1/2">
                            <svg
                                width="200"
                                height="200"
                                viewBox="0 0 150 150"
                                className="overflow-visible"
                                style={{ transform: 'rotate(-90deg)' }}
                            >
                                <defs>
                                    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                                    </filter>
                                </defs>
                                <path
                                    d="M 50 100 A 50 50 0 1 1 150 100"
                                    fill="none"
                                    stroke="rgba(0, 0, 0, 0.8)"
                                    strokeWidth="30"
                                    filter="url(#blur)"
                                />
                            </svg>
                        </div>

                        {/* Content card */}
                        <div className="bg-white/10 backdrop-blur-md h-full rounded-2xl p-8 w-full max-w-sm border border-white/20 shadow-xl z-10">
                            <div className="flex flex-col space-y-6 justify-between h-full">
                                <h1 className="md:text-5xl text-3xl font-bold leading-tight">
                                    Free
                                    <br />
                                    Case
                                    <br />
                                    Review
                                </h1>

                                <div className="space-y-3 text-left">
                                    <div className="text-sm font-semibold text-white/90 mb-3">
                                        100% CERTIFIED
                                    </div>

                                    <div className="flex items-center gap-2 text-xs">
                                        <Shield className="w-4 h-4" />
                                        <span>No Win No Fee</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs">
                                        <Award className="w-4 h-4" />
                                        <span>Licensed Attorneys</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs">
                                        <Clock className="w-4 h-4" />
                                        <span>24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right side - Semicircle text and button */}
                <div className="flex-1 py-8 flex flex-col items-start justify-center">
                    {/* Semicircle "ONLY 6 LEFT" text */}
                    <div className="relative mb-20 ">
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 -50 150 150"
                            className="overflow-visible"
                            style={{ transform: 'rotate(90deg)' }}
                        >
                            <defs>
                                <path
                                    id="semicircle"
                                    d="M 50 100 A 50 50 0 1 1 150 100"
                                    fill="none"
                                    stroke="none"
                                    strokeWidth="0"
                                />
                            </defs>
                            <text className="fill-amber-200 text-sm font-bold" style={{ fontSize: '28px', letterSpacing: '0px' }}>
                                <textPath
                                    href="#semicircle"
                                    startOffset="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                >
                                    ONLY 6 LEFT
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Contact us button */}
                    <button className="bg-amber-600/90 hover:bg-amber-600 text-white md:px-8 md:py-4 px-5 py-2 rounded-full flex items-center gap-3 font-medium transition-all duration-200 shadow-lg backdrop-blur-sm text-lg">
                        Contact us
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}