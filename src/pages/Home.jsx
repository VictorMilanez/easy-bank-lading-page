import React from 'react';
import { Menu } from '../components/Menu/Menu';
import { FirstSection } from '../components/Sections/FirstSection';
import { SecondSection } from '../components/Sections/SecondSection';
import introDesktop from "../images/bg-intro-desktop.svg"
import introMobile from "../images/bg-intro-mobile.svg"
import mockups from "../images/image-mockups.png"
import iconBudgeting from "../images/icon-budgeting.svg"
import iconApi from "../images/icon-api.svg"
import iconOnboarding from "../images/icon-onboarding.svg"
import iconOnline from "../images/icon-online.svg"
import articleConfetti from "../images/image-confetti.jpg"
import articleCurrency from "../images/image-currency.jpg"
import articlePlane from "../images/image-plane.jpg"
import articleRestaurant from "../images/image-restaurant.jpg"
import { Articles } from '../components/Articles/Articles';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {

    const menuItems = [
        { label: "Home", link: "#" },
        { label: "About", link: "#" },
        { label: "Contacts", link: "#" },
        { label: "Blog", link: "#" },
        { label: "Carrers", link: "#" }
    ];

    const firstSectionItems = {
        title: "Next generation digital banking",
        text: "Take your financial life online. Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
        images: {
            desktop: introDesktop,
            mobile: introMobile,
            mockup: mockups
        }
    };

    const secondSection = {
        title: "Why choose Easybank?",
        text: "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."
    }

    const secondSectionIconsItems = [
        { title: "Online Banking", text: "Our modern web and mobile applicantions allow you to keep track of your finances wherever you are in the world.", image: iconOnline },
        { title: "Simple Budgeting", text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.", image: iconBudgeting },
        { title: "Fast Onboarding", text: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.", image: iconOnboarding },
        { title: "Open Api", text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.", image: iconApi },
    ]

    const articleTitle = { title: "Latest Articles" }

    const articlesItems = [
        { title: "Receive money in any currency with no fees", text: "The world is getting smaller and we're becoming more mobile. So why should you be torced to only receive money in a single...", credits: "By Claire Robinson", image: articleCurrency },
        { title: "Treat yourself without worrying about money", text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...", credits: "By Wilson Huttson", image: articleRestaurant },
        { title: "Take your Easybank card wherever you go", text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...", credits: "By Wilson Huttson", image: articlePlane },
        { title: "Our invite-only Beta accounts are now live!", text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...", credits: "By Claire Robinson", image: articleConfetti },
    ]

    const footerItems = [
        {text: "About Us", link: "#"},
        {text: "Contact", link: "#"},
        {text: "Blog", link: "#"},
        {text: "Carrers", link: "#"},
        {text: "Support", link: "#"},
        {text: "Privacy Policy", link: "#"}
    ]


    return (
        <>
            <Menu menuItems={menuItems} />
            <FirstSection
                title={firstSectionItems.title}
                text={firstSectionItems.text}
                images={firstSectionItems.images}
            />

            <SecondSection
                title={secondSection.title}
                text={secondSection.text}
                iconsItems={secondSectionIconsItems}
            />

            <Articles
                title={articleTitle.title}
                articleItems={articlesItems}
            />

            <Footer 
                footerItems={footerItems}/>
        </>
    )
}  