import { Button } from "@/components/ui/button"
import { Bitcoin, Heart, Mail } from "lucide-react"

export function JoinRevolutionSection() {
  return (
    <section className="container py-16" id={"take-the-next-step"}>
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Take the Next Step</h2>
    <p className="text-lg text-gray-600">
      Future-proof your organization's crypto strategy. 
    </p>
    <p className="text-lg text-gray-600 mb-8">
     Partner with SOLON CHARITY to transform donations into <strong>enduring engines of impact</strong>.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a 
        href="https://calendly.com/solonimpact/30min" 
        className="bg-[#0A4B3C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0E5F4A] hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        Schedule a Consultation
      </a>
      
      <a 
        href="mailto:team@soloncharity.com" 
        className="bg-[#DCFF7D] text-[#0A4B3C] border-2 border-[#0A4B3C] px-8 py-3 rounded-lg font-semibold hover:bg-[#E5FF9A] hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        Send us a message
      </a>
    </div>
  </div>
</section>
  )
}

