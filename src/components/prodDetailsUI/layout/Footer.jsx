import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/child.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <Image
              src="/icons/logo-white.svg"
              alt="Tinytales"
              width={80}
              height={40}
            />
            <p className="text-sm text-gray-200 leading-6 max-w-xs">
              Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae
              ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Let Us Help</h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>My Account</li>
              <li>FAQs</li>
              <li>Categories</li>
              <li>All Products</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>Refund Policy</li>
              <li>About Us</li>
              <li>Cancellation Policy</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Send Email</h4>

            <div className="flex bg-white rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 text-sm text-black outline-none"
              />
              <button className="bg-[#BE968E] px-6 text-sm font-medium">
                Send
              </button>
            </div>

            <div className="mt-4">
              <p className="text-sm mb-2">Follow Us</p>
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/facebook.svg"
                  alt="fb"
                  width={18}
                  height={18}
                />
                <Image
                  src="/icons/twitter.svg"
                  alt="tw"
                  width={18}
                  height={18}
                />
                <Image src="/icons/insta.svg" alt="ig" width={18} height={18} />
                <Image
                  src="/icons/linkedin.svg"
                  alt="in"
                  width={18}
                  height={18}
                />
                <Image
                  src="/icons/whatsapp.svg"
                  alt="wa"
                  width={18}
                  height={18}
                />
                <Image
                  src="/icons/telegram.svg"
                  alt="tg"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
