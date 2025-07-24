import { FreeReviewCard } from "./review-card"
import { DepositCard } from "./deposite-card"
import { ClaimForm } from "./claim-form"

export function LegalLandingPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-photo/farmers-shaking-hands-agriculture_864588-20558.jpg')",
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 container mx-auto px-4 py-4 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
                    <div className="flex flex-col md:w-1/2 h-full gap-6">
                        {/* Free Review Card */}
                        <div className="flex-1 h-[70%]">
                            <FreeReviewCard />
                        </div>
                        {/* Deposit Card */}
                        <div className="flex-1 h-[30%]">
                            <DepositCard />
                        </div>
                    </div>

                    {/* Claim Form */}
                    <div className="flex-1 lg:flex-[1.2]">
                        <ClaimForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
