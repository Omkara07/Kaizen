import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface FormData {
    fullName: string;
    email: string;
    message: string;
}

export function ClaimForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('https://kaizen-kg1c.onrender.com/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.errors?.[0]?.msg || 'Failed to submit form');
            }

            const result = await response.json();
            setSuccess(result.message || 'Form submitted successfully!');
            setFormData({ fullName: "", email: "", message: "" }); // Reset form
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        }
    };

    return (
        <Card className="h-full bg-slate-700/95 border-0 text-white backdrop-blur-sm">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-center">Claim Form</CardTitle>
            </CardHeader>

            <CardContent className="p-6 lg:p-8 h-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name Field */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-white/90">
                            Full Name *
                        </Label>
                        <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className="bg-transparent border-white/30 border-b-2 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder:text-white/50 focus:border-white/60"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/90">
                            Email ID *
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="bg-transparent border-white/30 border-b-2 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder:text-white/50 focus:border-white/60"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/90">
                            Message *
                        </Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            className="bg-transparent border-white/30 text-white placeholder:text-white/50 min-h-[80px] resize-none"
                            placeholder="Share your message..."
                            rows={10}
                            required
                        />
                    </div>

                    {/* Error/Success Messages */}
                    {error && (
                        <div className="text-red-400 text-sm">{error}</div>
                    )}
                    {success && (
                        <div className="text-green-400 text-sm">{success}</div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4 mb-0 mt-auto">
                        <Button
                            type="submit"
                            className="w-full bg-amber-100 hover:bg-amber-200 text-slate-800 font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                            size="lg"
                        >
                            Submit Form
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}