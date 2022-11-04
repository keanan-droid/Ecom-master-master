import React from "react";
import { Banner } from "../Components/Banner";
import { Nav } from "../Components/Nav";
import { Slider } from "../Components/Slider";
import { Lastslider } from "../Components/Lastslider";
import { Footer } from "../Components/Footer";
import "../Stylesheet/Pages/Home.scss";
import pillow from "../images/image6.jpeg";

export const Home = () => {
  const mainBanner = [
    {
      img: "/Assets/image1.jpeg",
      url: "/women",
      width: "49.7%",
    },
    {
      img: "/Assets/image2.jpeg",
      url: "/men",
      width: "49.7%",
    },
  ];

  const sliderData = [
    {
      img: "/Assets/sliderimage1.jpg",
      name: "Jersey tank topp with brocode DG logo",
      url: "",
      price: "710",
    },
    {
      img: "/Assets/sliderimage2.jpg",
      name: "Camouflage-print nylon jacket",
      url: "",
      price: "1.875",
    },
    {
      img: "/Assets/sliderimage3.jpg",
      name: "Champagne Glass in Murano Glass",
      url: "",
      price: "390",
    },
    {
      img: "/Assets/sliderimage4.jpg",
      name: "Velvet Cushion medium",
      url: "",
      price: "565",
    },
    {
      img: "/Assets/Sliderimage5.jpg",
      name: "Baseball-cap with branded plate",
      url: "",
      price: "300",
    },
    {
      img: "/Assets/Sliderimage6.jpg",
      name: "Large Devotion shoulder bag in braided nappa leather",
      url: "",
      price: "3.325",
    },
    {
      img: "/Assets/Sliderimage7.jpg",
      name: "Garden-print poplin top",
      url: "",
      price: "620",
    },
    {
      img: "/Assets/Sliderimage8.jpg",
      name: "Limited Edition Valentine's Day Portofino Sneakers",
      url: "",
      price: "720",
    },
    {
      img: "/Assets/Sliderimage9.jpg",
      name: "Limited Edition Valentine's Day Portofino Sneakers",
      url: "",
      price: "720",
    },
    {
      img: "/Assets/Sliderimage10.jpg",
      name: "Cotton T-shirt with metallic DG logo and patch",
      url: "",
      price: "510",
    },
  ];

  const sliderData2 = [
    {
      img: "/Assets/sliderimage11.jpg",
      name: "Silk Twill Cushion small",
      url: "",
      price: "460",
    },
    {
      img: "/Assets/sliderimage12.jpg",
      name: "Set 22 Porcelain Dinner Plates",
      url: "",
      price: "400",
    },
    {
      img: "/Assets/sliderimage13.jpg",
      name: "Hand-Blown Murano White Wine Glass",
      url: "",
      price: "390",
    },
    {
      img: "/Assets/sliderimage14.jpg",
      name: "Duchesse Cotton Cushion Medium",
      url: "",
      price: "565",
    },
  ];

  const sliderData3 = [
    {
      img: "/Assets/image8.jpeg",
      title: "Fashion shows",
      url: "",
      heading: "Men's Fall Winter 22",
      heading2: "Fashion Show",
      button: "Discover more",
    },
    {
      img: "/Assets/image12.jpeg",
      title: "Events",
      url: "",
      heading: "Expo 2020 Dubai",
      heading2: "",
      button: "Discover more",
    },
    {
      img: "/Assets/image10.jpeg",
      title: "Fashion shows",
      url: "",
      heading: "Women's Spring Summer",
      heading2: "22 Fashion Show",
      button: "Discover more",
    },
    {
      img: "/Assets/image11.jpeg",
      title: "Advertising Campaign",
      url: "",
      heading: "FW21 ADV Children's",
      heading2: "Campaign",
      button: "Discover more",
    },
  ];

  const secondBanner = [
    {
      img: "/Assets/image3.jpeg",
      url: "/shoes",
      width: "49.7%",
    },
    {
      img: "/Assets/image4.jpeg",
      url: "/jewlery",
      width: "49.7%",
    },
  ];

  const thirdBanner = [
    {
      img: "/Assets/image5.jpeg",
      url: "/shoes",
      width: "100%",
    },
  ];

  const fivethBanner = [
    {
      img: "/Assets/image7.jpeg",
      url: "/accessories",
      width: "100%",
    },
  ];

  return (
    <>
      <Nav />
      <div className="homeBanner">
        <div className="hommeBannerWrapper">
          <Banner
            className="banner_1"
            images={mainBanner}
            height="1000px"
            width="100%"
          />
          <div className="homeBannerInfo">
            <div className="homeBannerInfoWomen">
              <h3>Women's New In: Renaissance</h3>
              <div>
                <p>Shop the look</p>
                <p>Discover more</p>
              </div>
            </div>
            <div className="homeBannerInfoMen">
              <h3>Mens's New In: Reborn to live</h3>
              <div>
                <p>Shop the look</p>
                <p>Discover more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sliderBanner">
        <div className="sliderBannerWrapper">
          <h1>Highlights</h1>
          <Slider data={sliderData} />
        </div>
      </div>
      <div className="secondBanner">
        <div className="secondBannerWrapper">
          <Banner images={secondBanner} height="1000px" width="100%" />
          <div className="secondBannerInfo">
            <div className="secondBannerInfoValentines">
              <h3>The new #DGLimited for Valentine's Day</h3>
              <div>
                <p>Shop Women</p>
                <p>Shop Men</p>
              </div>
            </div>
            <div className="secondBannerInfoGift">
              <h3>The perfect Gift Guide: the iconic items and new arrivals</h3>
              <div>
                <p>Discover more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdBanner">
        <div className="thirdBannerWrapper">
          <Banner images={thirdBanner} height="620px" width="100%" />
          <div className="thirdBannerInfo">
            <div className="thirdBannerInfoConfigurator">
              <h3>The new #DGYOURSELF configurator</h3>
              <p>Personalize now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bannerCollection">
        <div className="bannerCollectionWrapper">
          <img className="banner" src={pillow} alt="pillow" />
          <div className="bannerCollectionInfo">
            <div className="bannerCollectionInfoCollection">
              <h3>Dolce&Gabbana Casa</h3>
              <p>The collection is available exclusively online</p>
              <div>
                <p>Shop now</p>
              </div>
            </div>
            <Slider data={sliderData2} />
          </div>
        </div>
      </div>
      <div className="lowerBanner_collection">
        <div className="fivethBanner">
          <h3>Virtual Boutique Experience</h3>
          <p>
            Explore the Dolce&Gabbana boutiques and book appointment for a
            unique shopping experience
          </p>
          <div>
            <p>Discover more</p>
          </div>
        </div>
        <Banner
          className="banner"
          images={fivethBanner}
          height="400px"
          width="850px"
        />
      </div>
      <div className="lowerSlider">
        <div className="sliderBar">
          <h1>World of Dolce&Gabbana</h1>
          <ul className="secondaryNav">
            <li className="secondaryNavItem">
              <p>View all</p>
            </li>
            <li className="secondaryNavItem">
              <p>Events</p>
            </li>
            <li className="secondaryNavItem">
              <p>Bontiques</p>
            </li>
            <li className="secondaryNavItem">
              <p>Advertising Campaign</p>
            </li>
            <li className="secondaryNavItem">
              <p>Fashion shows</p>
            </li>
            <li className="secondaryNavItem">
              <p>Beauty</p>
            </li>
            <li className="secondaryNavItem">
              <p>Special projects</p>
            </li>
          </ul>
        </div>
        <div className="lastSlider">
          <Lastslider data={sliderData3} />
          <p>Discover more</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
