import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Facebook, Instagram, X } from "lucide-react";
import img3 from '../assets/contact1.jpg'

const Contact = () => {
  return (
    <div className="bg-[#f8f4ed] px-6 py-10 md:px-20">
      <h1 className="text-3xl font-semibold text-center mb-2">Let's Chat</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We love hearing from you and our team can help answer questions and provide styling advice,
        so if you have any questions for us, we're here and ready to help in any way we can.
      </p>

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <img
          src={img3}
          alt="Contact Table"
          className="rounded-lg w-full object-cover"
        />

        {/* Contact Details */}
        <div className="flex flex-col justify-center gap-4 text-gray-800">
          <div className="flex gap-3 items-start">
            <MapPin className="mt-1" />
            <div>
              <p className="text-sm uppercase text-gray-500">Location</p>
              <p className="font-medium">Near kutub sher thana, Saharanpur 247001</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Mail className="mt-1" />
            <div>
              <p className="text-sm uppercase text-gray-500">E-Mail</p>
              <p className="font-medium">georgia.young@example.com</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Phone className="mt-1" />
            <div>
              <p className="text-sm uppercase text-gray-500">Contact</p>
              <p className="font-medium">+91 6398 424 742</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <X className="cursor-pointer w-6 h-6" />
            <Instagram className="cursor-pointer w-6 h-6" />
            <Facebook className="cursor-pointer w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Contact" />
            <Input placeholder="E-mail" />
          </div>
          <Textarea placeholder="Message" className="min-h-[120px]" />
          <Button type="submit" className="bg-[#5b3a2f] hover:bg-[#472a23] mx-auto block px-10">
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
