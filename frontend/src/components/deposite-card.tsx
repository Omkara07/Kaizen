export function DepositCard() {
    return (
        <div className="w-full rounded-3xl bg-gradient-to-br from-amber-100 via-orange-200 to-amber-200 p-8 shadow-lg">
            <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    Have you or a loved one been affected by Mesothelioma?
                </h2>

                <div className="space-y-4 text-white/90">
                    <p className="text-sm lg:text-base leading-relaxed">
                        As a victim, you've earned the RIGHT to seek fair and just settlement. Don't let this company walk away.
                    </p>

                    <p className="text-sm lg:text-base flex flex-col leading-relaxed">
                        <p>• Secondary Asbestos exposure is common</p>
                        <p>• Mesothelioma delays are more frequent in women</p>
                        <p>• Veterans have a significantly higher risk</p>
                    </p>
                </div>
            </div>
        </div>
    )
}