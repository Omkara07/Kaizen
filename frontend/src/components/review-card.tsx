import { Phone, Mail, ChevronRight } from "lucide-react"

export function FreeReviewCard() {
    return (
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700 text-white shadow-2xl">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 backdrop-blur-sm"></div>

            {/* Main content */}
            <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Top section with title */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold leading-tight tracking-wide">
                        Free
                        <br />
                        Case
                        <br />
                        Review
                    </h1>
                </div>

                {/* Bottom section with contact info and button */}
                <div className="space-y-6">
                    {/* Contact information */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <Phone className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium">1-800-XXX-XXXX</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium">info@lawfirm.com</span>
                        </div>
                    </div>

                    {/* Contact us button */}
                    <div className="flex justify-end">
                        <button className="bg-amber-600/90 hover:bg-amber-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-all duration-200 shadow-lg backdrop-blur-sm">
                            Contact us
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Watermark text */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-amber-200/60 text-xs font-medium tracking-widest">
                ONLY $600 LEFT
            </div>
        </div>
    )
}