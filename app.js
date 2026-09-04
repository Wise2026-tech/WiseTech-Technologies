document.addEventListener("DOMContentLoaded", () => {

  /* ==================================================
     CURRENT YEAR
  ================================================== */

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  /* ==================================================
     PAGE LOADER
  ================================================== */

  const pageLoader = document.getElementById("pageLoader");

  if (pageLoader) {

    setTimeout(() => {

      pageLoader.animate(
        [
          {
            opacity: 1,
            transform: "translateY(0)"
          },
          {
            opacity: 0,
            transform: "translateY(-30px)"
          }
        ],
        {
          duration: 650,
          easing: "cubic-bezier(.16,1,.3,1)",
          fill: "forwards"
        }
      );

      setTimeout(() => {
        pageLoader.style.display = "none";
      }, 650);

    }, 1150);

  }


  /* ==================================================
     HERO INTRO
  ================================================== */

  const heroLines =
    document.querySelectorAll(".hero-line");

  heroLines.forEach((line, index) => {

    line.animate(
      [
        {
          opacity: 0,
          transform: "translateY(60px)"
        },
        {
          opacity: 1,
          transform: "translateY(0)"
        }
      ],
      {
        duration: 900,
        delay: 1300 + index * 130,
        easing: "cubic-bezier(.16,1,.3,1)",
        fill: "both"
      }
    );

  });


  const heroFade =
    document.querySelectorAll(".hero-fade");

  heroFade.forEach((item, index) => {

    item.animate(
      [
        {
          opacity: 0,
          transform: "translateY(25px)"
        },
        {
          opacity: 1,
          transform: "translateY(0)"
        }
      ],
      {
        duration: 750,
        delay: 1550 + index * 100,
        easing: "cubic-bezier(.16,1,.3,1)",
        fill: "both"
      }
    );

  });


  const heroImageWrap =
    document.querySelector(".hero-image-wrap");

  if (heroImageWrap) {

    heroImageWrap.animate(
      [
        {
          opacity: 0,
          transform: "translateY(50px) scale(.96)"
        },
        {
          opacity: 1,
          transform: "translateY(0) scale(1)"
        }
      ],
      {
        duration: 1100,
        delay: 1450,
        easing: "cubic-bezier(.16,1,.3,1)",
        fill: "both"
      }
    );

  }


  /* ==================================================
     HEADER SCROLL
  ================================================== */

  const header =
    document.getElementById("siteHeader");

  const updateHeader = () => {

    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  };

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  /* ==================================================
     MOBILE MENU
  ================================================== */

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const mobileLinks =
    document.querySelectorAll(".mobile-link, .mobile-project-btn");

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      mobileMenu.classList.toggle("active");

      document.body.classList.toggle("menu-open");

    });


    mobileLinks.forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

      });

    });

  }


  /* ==================================================
     GENERAL REVEALS
  ================================================== */

  const revealElements =
    document.querySelectorAll(".reveal");

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          entry.target.animate(
            [
              {
                opacity: 0,
                transform: "translateY(35px)"
              },
              {
                opacity: 1,
                transform: "translateY(0)"
              }
            ],
            {
              duration: 800,
              easing: "cubic-bezier(.16,1,.3,1)",
              fill: "both"
            }
          );

          revealObserver.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {

    element.style.opacity = "0";

    revealObserver.observe(element);

  });


  /* ==================================================
     SERVICE CONTENT ANIMATION
  ================================================== */

  const serviceCopies =
    document.querySelectorAll(".service-copy");

  const serviceObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          const children =
            entry.target.children;

          Array.from(children).forEach(
            (child, index) => {

              child.animate(
                [
                  {
                    opacity: 0,
                    transform: "translateY(25px)"
                  },
                  {
                    opacity: 1,
                    transform: "translateY(0)"
                  }
                ],
                {
                  duration: 700,
                  delay: index * 90,
                  easing: "cubic-bezier(.16,1,.3,1)",
                  fill: "both"
                }
              );

            }
          );

          serviceObserver.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.2
      }
    );


  serviceCopies.forEach(copy => {

    serviceObserver.observe(copy);

  });


  /* ==================================================
     SERVICE IMAGE HOVER
  ================================================== */

  document
    .querySelectorAll(".service-image")
    .forEach(wrapper => {

      const image =
        wrapper.querySelector("img");

      if (!image) return;

      wrapper.addEventListener(
        "mouseenter",
        () => {

          image.style.transform =
            "scale(1.045)";

        }
      );

      wrapper.addEventListener(
        "mouseleave",
        () => {

          image.style.transform =
            "scale(1)";

        }
      );

    });


  /* ==================================================
     FLOATING HERO CARDS
  ================================================== */

  const floatingOne =
    document.querySelector(".floating-card-one");

  const floatingTwo =
    document.querySelector(".floating-card-two");

  if (floatingOne) {

    floatingOne.animate(
      [
        {
          transform: "translateY(0)"
        },
        {
          transform: "translateY(-12px)"
        },
        {
          transform: "translateY(0)"
        }
      ],
      {
        duration: 4200,
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );

  }


  if (floatingTwo) {

    floatingTwo.animate(
      [
        {
          transform: "translateY(0)"
        },
        {
          transform: "translateY(10px)"
        },
        {
          transform: "translateY(0)"
        }
      ],
      {
        duration: 4900,
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );

  }


  /* ==================================================
     BUTTON ARROWS
  ================================================== */

  document
    .querySelectorAll(
      ".btn, .text-link, .price-button, .portfolio-live-button"
    )
    .forEach(button => {

      const arrow =
        button.querySelector("span");

      if (!arrow) return;

      button.addEventListener(
        "mouseenter",
        () => {

          arrow.animate(
            [
              {
                transform:
                  "translate(0,0)"
              },
              {
                transform:
                  "translate(4px,-4px)"
              }
            ],
            {
              duration: 250,
              fill: "forwards"
            }
          );

        }
      );

      button.addEventListener(
        "mouseleave",
        () => {

          arrow.animate(
            [
              {
                transform:
                  "translate(4px,-4px)"
              },
              {
                transform:
                  "translate(0,0)"
              }
            ],
            {
              duration: 250,
              fill: "forwards"
            }
          );

        }
      );

    });


  /* ==================================================
     PRICING BUTTON -> FORM
  ================================================== */

  const websiteType =
    document.getElementById("websiteType");

  const pricingButtons =
    document.querySelectorAll(
      ".price-button[data-service]"
    );

  pricingButtons.forEach(button => {

    button.addEventListener("click", () => {

      const service =
        button.dataset.service;

      setTimeout(() => {

        if (!websiteType) return;

        const options =
          Array.from(websiteType.options);

        const matchingOption =
          options.find(
            option =>
              option.value === service
          );

        if (matchingOption) {

          websiteType.value = service;

        }

      }, 400);

    });

  });


  /* ==================================================
     WEBSITE REQUEST FORM
  ================================================== */

  const websiteRequestForm =
    document.getElementById(
      "websiteRequestForm"
    );

  if (websiteRequestForm) {

    websiteRequestForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const clientName =
          document
            .getElementById("clientName")
            .value
            .trim();


        const clientPhone =
          document
            .getElementById("clientPhone")
            .value
            .trim();


        const businessName =
          document
            .getElementById("businessName")
            .value
            .trim();


        const selectedWebsite =
          document
            .getElementById("websiteType")
            .value;


        const budget =
          document
            .getElementById("budget")
            .value;


        const deadline =
          document
            .getElementById("deadline")
            .value;


        const projectDetails =
          document
            .getElementById("projectDetails")
            .value
            .trim();


        const formattedDeadline =
          deadline
            ? new Date(
                deadline + "T00:00:00"
              ).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }
              )
            : "Not specified";


        const message =
`Hello WISETECH Technologies,

I would like to request a website.

*NEW WEBSITE REQUEST*

Name: ${clientName}
Phone / WhatsApp: ${clientPhone}
Business / Brand: ${businessName || "Not specified"}
Website Type: ${selectedWebsite}
Budget: ${budget}
Preferred Deadline: ${formattedDeadline}

Project Details:
${projectDetails}

Please let me know the next steps.`;


        const whatsappNumber =
          "233542665822";


        const whatsappURL =
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* ==================================================
     SMOOTH INTERNAL LINKS
  ================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetID =
            link.getAttribute("href");

          if (
            !targetID ||
            targetID === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(targetID);

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

});