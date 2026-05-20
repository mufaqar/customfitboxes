import Image from 'next/image'
import { PortableText } from '@portabletext/react'

const ScrollContent = ({ content }: { content?: any }) => {
  return (
    <section className='py-16'>
      <div className='container mx-auto flex md:flex-row flex-col-reverse gap-10 items-center'>
        <div className='md:w-2/3 w-full'>
          <div className='scrollDiv overflow-y-auto pl-3 md:pl-5 h-[480px]'>
            <div className='scrollContent'>
              {content?.contentDetails ? (
                <PortableText value={content.contentDetails} />
              ) : (
                <>
                  <h2>
                    Create Custom Boxes That Elevate Your Brand
                  </h2>
                  <p>
                    Looking for the perfect packaging to showcase your brand? At Custom Fit Boxes, we provide tailor-made packaging solutions designed to meet your unique product needs. We offer the ideal packaging solutions regardless of whether you need minimalistic or premium designs.
                  </p>
                  <h2>
                    Why Are Custom Boxes Essential for Product Marketing?
                  </h2>
                  <p>
                    Using custom packaging designs helps your business stand out and gives your products a unique edge in the market. Custom-printed boxes attract shoppers because they look appealing, making people more likely to buy your products. When customers like what they see, they share their positive experiences with others, helping spread the word about your brand. This natural promotion can boost your brand's reputation and value in the market. There is a wide range of custom printing services to make your packaging look great. Advanced printing machines are used to turn your ideas into reality and ensure your orders are delivered quickly. With high-quality machines, your custom boxes will look exactly how you envision them.

                  </p>
                  <p>
                    By buying custom boxes wholesale, you can save money and invest in other parts of your business. Attractive packaging catches customers' attention in stores, leading to more loyal customers and higher sales.
                  </p>
                  <h2>
                    Our Seamless Custom Packaging Process
                  </h2>
                  <p>
                    The packaging process at Custom-Fit Boxes allows customers to create fully customized retail boxes that specifically suit their industry requirements in four easy steps.
                  </p>
                  <ul>
                    <li>
                      <span>Consultation:</span>
                      Share your packaging vision and requirements.
                    </li>
                    <li>
                      <span>Design:</span> Our experts craft unique, high-quality designs tailored to your brand.
                    </li>
                    <li>
                      <span>Production:</span> We manufacture your custom boxes with precision and quality.
                    </li>
                    <li>
                      <span>Delivery:</span> Fast and secure shipping, ensuring your packaging arrives on time.
                    </li>
                  </ul>
                  <h2>
                    Industry-Specific Custom Packaging Solutions
                  </h2>
                  <p>
                    Custom boxes are created for a wide range of industries. Customized packaging solutions to meet the specific needs of each sector are offered. This flexibility extends across industries, enabling businesses to choose from various packaging types:
                  </p>
                  <ul>
                    <li><a href="/category/cbd-boxes">Custom CBD Packaging</a></li>
                    <li><a href="/category/cosmetics-boxes">Cosmetic Packaging Boxes</a></li>
                    <li><a href="/category/mailer-boxes">Mailer Boxes</a></li>
                    <li><a href="/category/food-boxes">Food Boxes</a></li>
                    <li><a href="/category/soap-boxes">Soap Boxes</a></li>
                    <li><a href="/category/bakery-boxes">Bakery Boxes</a></li>
                    <li><a href="/category/apparel-boxes">Apparel Boxes</a></li>
                    <li><a href="/category/gift-boxes">Gift Boxes</a></li>
                    <li><a href="/category/rigid-boxes">Rigid Boxes</a></li>
                    <li><a href="/category/candle-boxes">Candle Boxes</a></li>
                  </ul>

                  <h2>
                    Advanced Printing Methods for High-Impact Packaging
                  </h2>
                  <h3>
                    Digital Printing
                  </h3>
                  <p>
                    Digital printing delivers impressive quality output for products with minor—to medium-scale manufacturing demands, resulting in detailed and intensely colored finished prints.
                  </p>
                  <h3>
                    Flexographic Printing
                  </h3>
                  <p>
                    Customers who need large quantities of custom boxes should choose this economical printing approach. Businesses seeking mass production of custom packaging boxes featuring solid colors and simple designs should use this method.
                  </p>
                  <h3>
                    Offset Printing
                  </h3>
                  <p>
                    Large printing sets can rely on offset printing to produce precise and uniform results throughout their total quantity. This printing method ensures accurate color output and crisp line quality, which is essential for maintaining high design standards for custom-printed boxes.
                  </p>
                  <h3>
                    Screen Printing
                  </h3>
                  <p>
                    The process's main application is showing off dynamic colors in custom boxes with logos while offering top visibility on both cardboard structures and solid boxes.
                  </p>

                  <h2>
                    Printing Color Models for Custom Boxes
                  </h2>
                  <h3>
                    CMYK Printing
                  </h3>
                  <p>
                    The CMYK printing model generates various colors by combining four printing inks: cyan, Magenta, Yellow, and Black. The technique is extensively utilized for complete color output and achieves color mixing through subtraction.
                  </p>
                  <h3>
                    PMS (Pantone Matching System)
                  </h3>
                  <p>
                    PMS is a standardized color-matching system that distributes unique codes to particular colors to achieve consistent reproduction between different media. Its primary application is branding, where it helps businesses maintain color consistency across multiple platforms.
                  </p>

                  <h2>
                    Premium Finishing Techniques for Custom Boxes
                  </h2>
                  <p>
                    Standout packaging plays an essential role for clients. The company maintains manufacturing and design capabilities, consistently creating innovative custom packages that build strong brand identities. Sustainability is achieved by implementing environmentally friendly materials and eco-friendly production methods while maintaining excellent performance. Premium finishes serve aesthetic and protective purposes, combining art with functionality so that each box performs efficiently based on form and function.
                  </p>
                  <h3>
                    UV Printing
                  </h3>
                  <p>
                    This method suits the production of logo-bearing custom boxes and custom print boxes when high-quality, durable finishes like gloss or matte surfaces are desired.
                  </p>
                  <h3>
                    Embossing & Debossing
                  </h3>
                  <p>
                    Embossing and debossing techniques acquire a luxurious appearance by adding raised or recessed designs. The texture adds depth, making your branding approachable through touch and more visually appealing.
                  </p>
                  <h3>
                    Foil Stamping
                  </h3>
                  <p>
                    Custom boxes acquire an elegant and sophisticated appearance when you incorporate foil stamping as an enhancement. The foil stamping process creates metallic reflective finishes, making custom boxes, logos, and accents more noticeable.
                  </p>
                  <h3>
                    Litho Lamination
                  </h3>
                  <p>
                    Premium quality printing through lamination offers luxury packaging, which helps preserve vibrant print designs, especially when you want to package high-end products.
                  </p>
                  <h3>
                    Varnishing
                  </h3>
                  <p>
                    Varnishing applied to custom boxes improves both appearance and operational capabilities. This finishing process also creates glossy, matte, or satin finishes by applying protective coatings to printed surfaces.
                  </p>
                  <h3>
                    Glossy Lamination
                  </h3>
                  <p>
                    Gloss is the best choice if you want to see a shiny, reflective finish that enhances colors and details.
                  </p>
                  <h3>
                    Soft-touch Lamination
                  </h3>
                  <p>
                    Soft touch lamination offers a velvety, tactile feel while maintaining a matte look.
                  </p>
                  <h3>
                    Spot UV Finish
                  </h3>
                  <p>
                    A glossy coating is applied to specific areas for contrast and emphasis.
                  </p>
                  <h3>
                    AQ Coating
                  </h3>
                  <p>
                    An aqueous coating for a smooth, satin-like finish that is eco-friendly.
                  </p>
                  <h3>
                    Matte Lamination
                  </h3>
                  <p>
                    Provides a smooth, non-reflective finish with a soft touch.
                  </p>
                  <h2>
                    Popular Custom Packaging Styles
                  </h2>
                  <p>
                    Custom packaging boxes allow businesses to select from various possible dimensions and designs for product packaging into aesthetic representations that match their brand identity.
                  </p>
                  <ul>
                    <li>
                      <span>Gable Boxes:</span>
                      Easy-to-carry boxes with a handle, ideal for gift packaging or food products.
                    </li>
                    <li>
                      <span>Window Die-Cut Boxes:</span> Feature a transparent window to showcase the product inside.
                    </li>
                    <li>
                      <span>Sleeve Boxes:</span> A box with a sliding sleeve offering a premium unboxing experience.
                    </li>
                    <li>
                      <span>Seal End Auto Bottom:</span> Automatically secured at the base, providing easy assembly.
                    </li>
                    <li>
                      <span>Entire Flap Auto Bottom:</span> Similar to the Seal End Auto Bottom, with added stability.
                    </li>
                    <li>
                      <span>Auto Bottom with Display Lid:</span> Features a secure bottom with an easy-to-open lid for display.
                    </li>
                    <li>
                      <span>Double Wall Tuck Top:</span> Provides extra protection and a secure tuck flap closure.
                    </li>
                    <li>
                      <span>Roll End Tuck Top:</span> Features a tuck top and roll end for secure, compact packaging.
                    </li>
                    <li>
                      <span>Tuck End Auto Bottom:</span> Combines a tuck end and auto bottom for secure closure and quick assembly.
                    </li>
                    <li>
                      <span>Straight Tuck Boxes:</span> Simple design with straight tuck flaps for easy closure and packaging.
                    </li>
                  </ul>

                  <h2>
                    Luxury Add-Ons to Elevate Your Packaging
                  </h2>
                  <p>
                    Finishing coats improve the appearance and longevity of custom packaging boxes, creating a sense of luxury.
                  </p>
                  <ul>
                    <li>
                      <span>Silver Foiling:</span>
                      Adds metallic silver accents for a refined, high-end look.
                    </li>
                    <li>
                      <span>Gold Foiling:</span> Provides a luxurious, shiny gold finish for elegant packaging.
                    </li>
                    <li>
                      <span>Metallic Foiling:</span> Adds a reflective, metallic finish in various colors for a premium feel.
                    </li>
                    <li>
                      <span>Ribbons Pasting:</span> Adds decorative ribbons for an upscale presentation.
                    </li>
                    <li>
                      <span>Other Artistic Works:</span> Includes custom artwork, patterns, and designs to personalize packaging further.
                    </li>
                  </ul>

                  <h2>
                    About Custom Fit Boxes – Your Trusted Packaging Partner
                  </h2>
                  <p>
                    Custom Fit Boxes designs distinctive packaging that initially showcases your items while reflecting your brand values to create lasting customer impressions. The company is a leading packaging solutions provider, aiming to turn brand visions into designs. We combine design innovation with modern technology to construct memorable custom packaging solutions.
                  </p>
                  <p>
                    Our company provides complete customization tools and advanced printing methods, including offset, ital, and rotogravure techniques, to help your products dominate competitive markets today.
                  </p>
                  <p>
                    We take pride in our sustainable packaging solutions, which provide high-quality resilience and environmentally friendly packaging. Our team's bespoke packaging delivers brand representation through expert detail work and superior manufacturing methods.
                  </p>
                  <p>
                    Our organization focuses on customers to provide the exact packaging solutions required for your business. Our company's sustainable practices, innovative solutions, and exceptional customer service help you successfully highlight your product in the market.
                  </p>

                  <h2>
                    Why Choose Custom Fit Boxes?
                  </h2>
                  <p>
                    We help you attract your target audience and achieve your business goals through our custom packaging.
                  </p>
                  <h3>
                    Tailored Packaging Solutions
                  </h3>
                  <p>
                    Our business provides a comprehensive selection of boxes we create according to your requirements. We offer all types of custom boxes, including product-specific versions, printed options, and personalized packaging solutions with branding features. Custom packaging can also lead to customer retention and increased sales. Custom boxes provide a vital long-term business investment that drives companies' success and growth.
                  </p>
                  <h3>
                    Eco-Friendly and Sustainable Packaging
                  </h3>
                  <p>
                    Using Eco-friendly packaging materials in custom product boxes allows your brand to give out a meaningful message and create a difference. Green packaging from our services safeguards merchandise as it supports environmental preservation.
                  </p>
                  <h3>
                    High-Quality Logo Printing
                  </h3>
                  <p>
                    Customize your boxes by choosing our logo print option and get your company's logo printed on your custom-made boxes. We use the latest printing techniques to emboss your company logo on your custom boxes, which helps with brand recognition.
                  </p>
                  <h3>
                    Endless Customization
                  </h3>
                  <p>
                    Our company's wholesale custom box offerings include unlimited customization possibilities. Your product success depends directly on the custom boxes you utilize as marketing instruments. Our wholesale custom boxes establish instant visual appeal, which drives product purchases through personalized finishing choices and well-designed features. Add distinctive finishing touches together with unique features to develop wholesale logo boxes that can make your brand more recognizable.
                  </p>
                  <h3>
                    Wholesale Pricing
                  </h3>
                  <p>
                    Our business provides affordable custom boxes with excellent quality standards. We offer custom boxes at wholesale rates to deliver packaging solutions that satisfy every client's needs.
                  </p>
                  <h3>
                    Free Design Support
                  </h3>
                  <p>
                    Our company stands ready to produce custom-printed boxes that precisely fit your product. You can utilize our free design support to convert your plans into beautiful market-ready designs.
                  </p>
                  <h3>
                    Fast & Free Delivery
                  </h3>
                  <p>
                    Our company completely covers the shipping expenses. We deliver custom boxes and custom packaging boxes without any charges and expedite their delivery so you receive your products on schedule.
                  </p>
                  <h3>
                    24/7 Customer Support
                  </h3>
                  <p>
                    Our team provides round-the-clock customer support to help customers with their custom box requirements and other packaging solution queries. Custom-fit boxes create an ideal custom package of custom packaging boxes that will fulfill all your business requirements and exceed your expectations.
                  </p>
                  <h2>
                    Request a Quote Today!
                  </h2>
                  <p>
                    Check out our wide range of products and services and request a quote for what meets your requirements. Our experts will help you create the perfect custom boxes for your brand.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='md:w-1/3 w-full'>
          <div className='h-[480px] rounded-md overflow-hidden'>
            {content?.contentImage?.image ? (
              <Image src={content.contentImage.image} alt={content.contentImage.alt || 'content'} width={504} height={504} className='w-full object-cover object-center scale-105' />
            ) : (
              <Image src="/images/contenimg.png" alt='contenimg' width={504} height={504} className='w-full object-cover object-center scale-105' />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollContent
