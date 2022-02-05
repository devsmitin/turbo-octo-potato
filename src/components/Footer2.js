const Footer = () => {
  return (
    <footer className="py-16 text-sm leading-6">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8">
        <div className="flex">
          <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900">Getting Started</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Installation
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Editor Setup
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Using with Preprocessors
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Optimizing for Production
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Browser Support
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Upgrade Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900">Core Concepts</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Utility-First Fundamentals
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Handling Hover, Focus, and Other States
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Responsive Design
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Dark Mode
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Reusing Styles
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Adding Custom Styles
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Functions &amp; Directives
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900">Customization</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Configuration
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Content Configuration
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Theme Configuration
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Customizing Screens
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Customizing Colors
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Customizing Spacing
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Plugins
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Presets
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900">Community</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Discord
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#!">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-10">
          <div className="flex flex-wrap items-baseline lg:justify-center">
            <span className="text-sm font-light text-gray-500">
              {" "}
              Copyright &copy; {new Date().getFullYear()}
              <a
                href="https://devsmit.in/"
                className="mx-2 text-wickedblue hover:text-gray-500"
                rel="noopener noreferrer"
              >
                @devsmitin
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
