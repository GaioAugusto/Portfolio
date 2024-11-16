import { FooterViewProps, socialMedia } from "./types";

type ComponentType = React.FC<FooterViewProps>;
export const FooterView: ComponentType = ({ socialLinks, theme }) => {
  // text-gray-300 is good for first classname text
  // for want to chat was using text-gray-400
  return (
    <section id="contact">
      <footer className={`${theme.background} ${theme.text} py-10 id-#contact`}>
        {/* Top Section */}
        <div className="max-w-screen-lg mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Let’s Connect</h2>
          <p className={`${theme.text}`}>
            Want to chat? Reach out at{" "}
            <a
              href="mailto:hello@gaioaugusto.com"
              className="text-blue-500 font-semibold underline hover:text-blue-400"
            >
              gaio.santos@mail.utoronto.ca
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((socialMedia: socialMedia) => (
            <a
              key={socialMedia.name}
              href={socialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.text} hover:text-blue-500 transition-transform duration-300 transform hover:scale-110`}
            >
              <socialMedia.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-600 pt-4">
          <a
            href="/privacy-policy"
            className="hover:text-blue-500 transition-colors duration-200 mx-4"
          >
            Privacy Policy
          </a>
          |
          <a
            href="/terms-of-service"
            className="hover:text-blue-500 transition-colors duration-200 mx-4"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </section>
  );
};
