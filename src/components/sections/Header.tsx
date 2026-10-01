// Conteúdo extraído de https://zig.ai/ e adaptado para a INTUSeg
const html = String.raw`<div class="main-css w-embed"><style>
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    transition: background-color 0.4s;
  }

  .text--grad {
    background: linear-gradient(265.26deg, #08906c 38.04%, #34bf99 94.86%);
    background-clip: text;
    color: transparent;
  }

  .footer_sn-icon rect,
  .footer_sn-icon path {
    transition: fill 0.3s ease;
  }

  .footer_sn-icon:hover rect {
    fill: #ffffff;
  }

  .footer_sn-icon:hover path {
    fill: #08906c;
  }

  .hubspot_form {
    overflow: auto;
  }
</style></div>
<div class="onpage_css w-embed"><style>
  .line {
    overflow: hidden;
  }

  .animate-text_opacity {
    overflow: hidden;
  }

  .animate-text_opacity [aria-hidden='true'] {
    will-change: opacity;
  }

  .impact-item .text--number {
    color: var(--_zig---colors--green-500);
  }
  .impact-item .text--l {
    color: var(--_zig---colors--gray-600);
  }

  @media screen and (min-width: 992px) {
    .impact-item:hover .impact-bg {
      transform: scale(1, 1);
    }
    .impact-item:hover .text--number {
      color: var(--_zig---colors--white);
    }
    .impact-item:hover .text--l {
      color: var(--_zig---colors--green-200);
    }
  }

  @media screen and (max-width: 480px) {
    .splide__pagination {
      position: static;
    }
  }

  .splide__pagination {
    width: auto;
    height: var(--_zig---base-size--44);
    gap: var(--_zig---base-size--12);
    border-radius: var(--_zig---base-size--20);
    justify-content: flex-start;
    align-items: center;
    display: flex;
    position: absolute;
    inset: auto auto 0% 0%;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .splide__pagination__page {
    width: var(--_zig---base-size--42);
    height: 2px;
    border-radius: var(--_zig---base-size--40);
    background-color: #fff3;
    border: none;
    padding: 0;
    cursor: pointer;
    overflow: clip;
    transform: none;
    opacity: 1;
  }

  .splide__pagination__page.is-active {
    background-color: #fff;
    transform: none;
  }

  .splide__sr {
    display: none;
  }

  .trusted-track {
    -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 92%, transparent 100%);
    mask-image: linear-gradient(90deg, #000 0%, #000 92%, transparent 100%);
  }

  @media (max-width: 480px) {
    .trusted-track {
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    }
  }
</style></div>
<div data-modal="cta" class="modal-component">
<div data-modal="close" class="form-modal__bg"></div>
<div class="modal_wrapp">
<div data-modal="close" class="modal__close"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="close--icon"><path d="M21 21L3 3M21.0001 3L3 21.0001" stroke="#15171A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
<div class="hubspot_form w-embed w-script">
<div class="hs-form-frame" data-region="na2" data-form-id="b9003760-92fc-4558-85ce-1668b1feb822" data-portal-id="244756941"></div>
</div>
</div>
</div>
<div data-animation="over-right" class="navbar w-nav" data-wf--navbar--variant="base" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="a7bc8a10-fdd2-7358-97a0-ee55c54de030" role="banner" data-duration="400">
<div class="w-layout-vflex nav_container"><a href="/" aria-current="page" class="nav_logo w-inline-block w--current">
<div class="logo_img is--desk w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 104 30" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M99.9691 21.8315V6.65317H103.536V21.8315H99.9691ZM101.765 4.19934C101.175 4.19934 100.677 3.99696 100.273 3.59221C99.8679 3.17059 99.6655 2.67307 99.6655 2.09967C99.6655 1.49254 99.8679 0.995025 100.273 0.607133C100.694 0.202378 101.192 0 101.765 0C102.372 0 102.87 0.202378 103.258 0.607133C103.662 1.01189 103.865 1.5094 103.865 2.09967C103.865 2.68994 103.662 3.18745 103.258 3.59221C102.853 3.99696 102.355 4.19934 101.765 4.19934Z" fill="#15171A"/>
<path d="M89.4569 22.1351C88.074 22.1351 86.8092 21.7809 85.6624 21.0726C84.5155 20.3643 83.5964 19.4114 82.905 18.214C82.2304 17.0166 81.8931 15.6927 81.8931 14.2423C81.8931 12.792 82.2304 11.4681 82.905 10.2707C83.5964 9.07328 84.5155 8.12042 85.6624 7.41209C86.8092 6.70377 88.074 6.34961 89.4569 6.34961C90.4688 6.34961 91.4048 6.53512 92.2649 6.90615C93.1419 7.26031 93.8924 7.76626 94.5164 8.42398V6.65318H97.6785V21.8315H94.5164V20.0607C93.8924 20.7016 93.1419 21.2075 92.2649 21.5785C91.4048 21.9496 90.4688 22.1351 89.4569 22.1351ZM89.9123 18.9476C90.7555 18.9476 91.5229 18.7368 92.2143 18.3152C92.9227 17.8936 93.4792 17.3286 93.884 16.6203C94.3056 15.912 94.5164 15.1193 94.5164 14.2423C94.5164 13.3822 94.3056 12.598 93.884 11.8897C93.4792 11.1645 92.9311 10.5911 92.2396 10.1695C91.5482 9.74787 90.7724 9.53706 89.9123 9.53706C89.069 9.53706 88.2933 9.74787 87.5849 10.1695C86.8935 10.5911 86.3369 11.1561 85.9153 11.8644C85.5106 12.5727 85.3082 13.3654 85.3082 14.2423C85.3082 15.1025 85.5106 15.8951 85.9153 16.6203C86.3369 17.3286 86.8935 17.8936 87.5849 18.3152C88.2764 18.7368 89.0522 18.9476 89.9123 18.9476Z" fill="#15171A"/>
<path d="M78.9469 22.237C78.2892 22.237 77.7326 22.0093 77.2773 21.554C76.8219 21.0986 76.5942 20.5421 76.5942 19.8844C76.5942 19.2098 76.8219 18.6532 77.2773 18.2148C77.7326 17.7594 78.2892 17.5317 78.9469 17.5317C79.6383 17.5317 80.2033 17.7594 80.6418 18.2148C81.0971 18.6701 81.3248 19.2267 81.3248 19.8844C81.3248 20.5421 81.0971 21.0986 80.6418 21.554C80.2033 22.0093 79.6383 22.237 78.9469 22.237Z" fill="#08906C"/>
<path d="M54.391 21.8315V6.65317H57.9579V21.8315H54.391ZM56.1871 4.19934C55.5968 4.19934 55.0993 3.99696 54.6945 3.59221C54.2898 3.17059 54.0874 2.67307 54.0874 2.09967C54.0874 1.49254 54.2898 0.995025 54.6945 0.607133C55.1162 0.202378 55.6137 0 56.1871 0C56.7942 0 57.2917 0.202378 57.6796 0.607133C58.0844 1.01189 58.2867 1.5094 58.2867 2.09967C58.2867 2.68994 58.0844 3.18745 57.6796 3.59221C57.2749 3.99696 56.7773 4.19934 56.1871 4.19934Z" fill="#15171A"/>
<path d="M36.0283 21.8886L46.5878 9.75916H36.4728V6.75293H53.0576L42.4981 18.8824H52.6632V21.8886H36.0283Z" fill="#15171A"/>
<path d="M66.918 6.34912C67.9297 6.34917 68.8656 6.53479 69.7256 6.90576C70.6024 7.25985 71.3526 7.76582 71.9766 8.42334V6.65283H75.1396V21.9321C75.1396 23.5848 74.7428 25.0016 73.9502 26.1821C73.1745 27.3626 72.1374 28.2652 70.8389 28.8892C69.5404 29.5131 68.1405 29.8247 66.6396 29.8247C65.476 29.8247 64.3879 29.6561 63.376 29.3188C63.1604 29.247 62.9512 29.1678 62.7471 29.0845V25.3354C63.0393 25.5632 63.3579 25.7708 63.7051 25.9546C64.5651 26.4267 65.5435 26.6626 66.6396 26.6626C68.2585 26.6625 69.5485 26.1824 70.5098 25.2212C71.471 24.2768 71.9521 23.0456 71.9521 21.5278V20.0854C71.3282 20.7263 70.5857 21.233 69.7256 21.604C68.8656 21.9581 67.9297 22.1352 66.918 22.1353C65.5351 22.1353 64.2698 21.781 63.123 21.0728C61.9762 20.3644 61.0567 19.4108 60.3652 18.2134C59.6908 17.0161 59.3535 15.6919 59.3535 14.2417C59.3536 12.7915 59.6907 11.4673 60.3652 10.27C61.0567 9.07269 61.9763 8.11991 63.123 7.41162C64.2698 6.70336 65.5351 6.34912 66.918 6.34912ZM67.373 9.53662C66.5299 9.53662 65.7542 9.74788 65.0459 10.1694C64.3545 10.591 63.7976 11.1556 63.376 11.8638C62.9713 12.572 62.7686 13.3649 62.7686 14.2417C62.7686 15.1017 62.9713 15.8945 63.376 16.6196C63.7976 17.328 64.3544 17.8933 65.0459 18.3149C65.7373 18.7365 66.513 18.9478 67.373 18.9478C68.2162 18.9477 68.9834 18.7365 69.6748 18.3149C70.3831 17.8933 70.94 17.328 71.3447 16.6196C71.7662 15.9114 71.9766 15.1185 71.9766 14.2417C71.9765 13.3817 71.7663 12.5974 71.3447 11.8892C70.94 11.1641 70.3916 10.591 69.7002 10.1694C69.0088 9.74784 68.2331 9.53664 67.373 9.53662Z" fill="#15171A"/>
<path d="M14.2806 11.957C14.6801 11.2604 15.7474 11.4881 15.8219 12.2859L16.6163 20.8001C16.6523 21.1854 16.9557 21.4932 17.3436 21.5379L33.6733 23.4184C34.619 23.5273 34.6595 24.8732 33.7221 25.0377L5.49841 29.9867C4.80967 30.1075 4.2904 29.3786 4.6359 28.776L14.2806 11.957Z" fill="#08906C"/>
<path d="M28.906 0.16217C29.5947 0.0414182 30.114 0.770326 29.7685 1.37283L20.1235 18.1919C19.724 18.8885 18.6567 18.6607 18.5822 17.863L17.7881 9.34881C17.7521 8.96346 17.4485 8.65567 17.0605 8.61099L0.73084 6.73021C-0.214806 6.62121 -0.255196 5.27531 0.682314 5.11092L28.906 0.16217Z" fill="#08906C"/>
</svg></div>
</a>
<nav role="navigation" id="w-node-a7bc8a10-fdd2-7358-97a0-ee55c54de034-c54de030" class="nav_links w-nav-menu">
<div class="w-layout-vflex nav_links-content"><a href="/how-it-works" class="navlink w-nav-link">How It Works</a><a href="/enterprise" class="navlink w-nav-link">Enterprise</a><a href="/pricing" class="navlink w-nav-link">Pricing</a><a href="/about" class="navlink w-nav-link">About Zig</a><a href="/blog" class="navlink w-nav-link">Blog</a>
<div class="nav_links-button"><a data-modal-open="" data-wf--button--variant="primary-s" href="http://app.zig.ai/" target="_blank" class="button w-variant-987f400b-b846-238a-7f65-5fa18cfecfa3 w-inline-block">
<div>Login</div>
</a><a data-modal-open="" data-wf--button--variant="secondary-s" href="/book-a-meeting" class="button w-variant-05364811-9faf-2d5c-060a-a42f79515f00 w-inline-block">
<div>Book a demo</div>
</a></div>
</div>
</nav>
<div class="button_navbar btn-bar"><a data-modal-open="" data-wf--button--variant="tertiary-s" href="/book-a-meeting" class="button w-variant-069eda21-72c1-d9fc-63ae-ff327d98e2a0 w-inline-block">
<div>Book a demo</div>
</a><a data-modal-open="" data-wf--button--variant="primary-s" href="http://app.zig.ai/" target="_blank" class="button w-variant-987f400b-b846-238a-7f65-5fa18cfecfa3 w-inline-block">
<div>Login</div>
</a></div>
<div class="menu-button w-nav-button"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="burger_icon is--open"><path d="M4.5 12.75H31.5M4.5 23.25H31.5" stroke="#15171A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="burger_icon is--close"><path d="M27 9L9 27M9 9L27 27" stroke="#15171A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
</div>
<div class="nav_bg"></div>
</div>`;

export function Header() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
