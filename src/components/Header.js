import React from "react";
import Link from "next/link";
import logo from "../../public/images/VisonLogo.svg";
import Image from "next/image";

function Header() {
  const menuToggle = () => {
    document.body.classList.toggle("menu-toggle");
  };
  return (
    <>
      <header className="header-box">
        <Link href="/" className="logo-box">
          <img src={"/images/VisonLogo.svg"} alt="logo" />
          {/* <Image src={logo} width={100} height={56} /> */}
        </Link>
        <div className="d-flex align-items-center ms-auto">
          <nav className="nav-box">
            <Link href="/features" className="nav-url">
              Features
            </Link>
            <Link href="/pricing" className="nav-url">
              Pricing
            </Link>
            {/* <Link href="/blog" className="nav-url">
              Blog
            </Link> */}
            <Link href="/contact-us" className="nav-url">
              Contact Sales
            </Link>
          </nav>
          <div className="nav-actions">
            <a
              href="#"
              className="btn login"
              onClick={() => {
                // need to open in a new window
                window.open(process.env.NEXT_PUBLIC_USER_URL, "_blank");
              }}
            >
              Login
            </a>
            <a
              href="#"
              className="btn try"
              onClick={() => {
                // need to open in a new window
                window.open(
                  process.env.NEXT_PUBLIC_USER_URL + "/signup",
                  "_blank"
                );
              }}
            >
              Try For Free
            </a>
            <button type="button" className="btn" onClick={() => menuToggle()}>
              <svg className="icon menubtn">
                <use href="#icon_menu"></use>
              </svg>
              <svg className="icon closebtn">
                <use href="#icon_close"></use>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
