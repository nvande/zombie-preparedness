import images from "../src/ImageData";

const siteData = {
    "alert": {
        "heading": "Zombie Preparedness Alert in effect: ",
        "content": [
            "[Ready emergency supplies](/zombie-preparedness/#/preparedness101#EmergencySupplies)",
            "[Prepare emergency plan](/zombie-preparedness/#/preparedness101#EmergencyPlan)"
        ]
    },
    "title": "US Department of Supernatural Defense",
    "logo": images.siteLogo,
    "sections": [
        {
            "label": "Home",
            "link": "/zombie-preparedness"
        },
        {
            "label": "Zombie Preparedness 101",
            "link": "/zombie-preparedness/#/preparedness101"
        },
        {
            "label": "Task Force Sign-up",
            "link": "/zombie-preparedness/#/signup"
        }
    ],
    "primaryLinks:": [
        {
            "label": "Home",
            "href": "/zombie-preparedness"
        },
        {
            "label": "Zombie Preparedness 101",
            "href": "/zombie-preparedness/#/preparedness101"
        },
        {
            "label": "Task Force Sign-up",
            "href": "/zombie-preparedness/#/signup"
        }
    ],
    "socialLinks": [
      {
        "label": "Facebook",
        "href": "https://facebook.com/zombiepreparedness",
        "icon": images.icon.facebook
      },
      {
        "label": "X",
        "href": "https://twitter.com/zombieprep101",
        "icon": images.icon.x
      },
      {
        "label": "YouTube",
        "href": "https://youtube.com/zombiepreparednesschannel",
        "icon": images.icon.youtube
      },
      {
        "label": "Instagram",
        "href": "https://instagram.com/zombie_preparedness",
        "icon": images.icon.instagram
      },
      {
        "label": "RSS Feed",
        "href": "https://zombiepreparedness.org/rss",
        "icon": images.icon.rss_feed
      }
    ],
    "contactData": {
        "title": "USDSD Contact Center",
        "contactLinks": [
            {
                "label": "(666) 555 - 1968",
                "href": "tel:666-555-1968"
            },
            {
                "label": "help@usdsd.gov",
                "href": "mailto: help@usdsd.gov"
            }
        ]
    },
    "attributions": [
        "Icons from [Freepik](https://www.flaticon.com/authors/freepik), [Smashicons](https://www.flaticon.com/authors/smashicons), and [Stockio](https://www.flaticon.com/authors/stockio) on [Flaticon.com](https://www.flaticon.com)",
        "Hero images from [Lisa Fotios](https://www.pexels.com/@fotios-photos/), [Thijs van der Weide](https://www.pexels.com/@thijsvdw/collections/), and [Javier Leal](https://www.pexels.com/@javier-leal-47825573/) on [Pexels.com](https://www.pexels.com/)"
    ],
    "disclaimer": "This site is based on ficticious information and is for demonstration purposes only."
  }
  
export default siteData;
