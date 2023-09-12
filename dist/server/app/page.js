(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 4660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3482);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6901);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(892);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2722);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4453)), "/home/vishal/portfolio/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6633)), "/home/vishal/portfolio/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 829, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/vishal/portfolio/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 6751:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7282))

/***/ }),

/***/ 7282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./scss/components/About.module.scss
var About_module = __webpack_require__(5107);
var About_module_default = /*#__PURE__*/__webpack_require__.n(About_module);
;// CONCATENATED MODULE: ./components/About.tsx


const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (About_module_default()).header,
                children: "About"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (About_module_default()).secondaryText,
                children: [
                    "I'm a final year Computer Science undergraduate, possesses an impressive knack for crafting ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (About_module_default()).highlight,
                        children: "functional "
                    }),
                    "and",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (About_module_default()).highlight,
                        children: " user-friendly websites"
                    }),
                    " and ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (About_module_default()).highlight,
                        children: "web applications"
                    }),
                    " with simple yet",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (About_module_default()).highlight,
                        children: " captivating designs"
                    }),
                    ".",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "When I'm not at the working, I'm on my cycle, or poping heads with my mouse."
                ]
            })
        ]
    });
};
/* harmony default export */ const components_About = (About); // const AboutContainer = styled.div``;

// EXTERNAL MODULE: ./scss/components/Education.module.scss
var Education_module = __webpack_require__(6336);
var Education_module_default = /*#__PURE__*/__webpack_require__.n(Education_module);
;// CONCATENATED MODULE: ./components/Education.tsx


const Education = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Education_module_default()).header,
                children: "Education"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("table", {
                className: (Education_module_default()).table,
                cellSpacing: "0",
                cellPadding: "0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Education_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Education_module_default()).data,
                                        children: "2020-present"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Education_module_default()).data,
                                        children: [
                                            "Techno International New Town",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "B.Tech in Computer Science & Engineering"
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Education_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Education_module_default()).data,
                                        children: "2018-2020"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Education_module_default()).data,
                                        children: [
                                            "Maria's Day School",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Higher Secondary & Secondary"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Education = (Education); // const EducationContainer = styled.div``;

// EXTERNAL MODULE: ./scss/components/Skills.module.scss
var Skills_module = __webpack_require__(8956);
var Skills_module_default = /*#__PURE__*/__webpack_require__.n(Skills_module);
;// CONCATENATED MODULE: ./components/Skills.tsx


const Skills = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Skills_module_default()).header,
                children: "Skills"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("table", {
                className: (Skills_module_default()).table,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Skills_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "Programming Languages"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Skills_module_default()).data,
                                        children: [
                                            "C",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " C++",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " Java"
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Skills_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "Web Development"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Skills_module_default()).data,
                                        children: [
                                            "HTML",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " CSS",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " Javascript",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " ReactJs",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " NextJs",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " NodeJs"
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Skills_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "Mobile App Development"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "ReactNative"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Skills_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "Tech Stack"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "MERN"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Skills_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "Version Control System"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "Git"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (Skills_module_default()).label,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Skills_module_default()).data,
                                        children: "Others"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Skills_module_default()).data,
                                        children: [
                                            "Data Structures and Algorithms",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "MySQL",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Linux"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Skills = (Skills);

// EXTERNAL MODULE: ./data/Projects.ts + 1 modules
var Projects = __webpack_require__(8671);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/link.js
var next_link = __webpack_require__(3727);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./scss/components/FeaturedProjects.module.scss
var FeaturedProjects_module = __webpack_require__(3462);
var FeaturedProjects_module_default = /*#__PURE__*/__webpack_require__.n(FeaturedProjects_module);
// EXTERNAL MODULE: ./components/Project.tsx + 2 modules
var Project = __webpack_require__(551);
;// CONCATENATED MODULE: ./components/FeaturedProjects.tsx





const FeaturedProjects = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (FeaturedProjects_module_default()).featuredProjectsContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FeaturedProjects_module_default()).header,
                children: "Featured Projects"
            }),
            Projects/* PROJECTS */.F.map((project, idx)=>project.isFeatured && /*#__PURE__*/ jsx_runtime_.jsx(Project/* default */.Z, {
                    project: project
                }, idx)),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (FeaturedProjects_module_default()).projectsLink,
                href: "/projects",
                children: "All Projects"
            })
        ]
    });
};
/* harmony default export */ const components_FeaturedProjects = (FeaturedProjects); // const FeaturedProjectsContainer = styled.div`
 //   display: flex;
 //   flex-direction: column;
 //   gap: 3rem;
 // `;
 // const AllLink = styled(Link)`
 //   font-size: 1.5rem;
 //   color: var(--primary);
 //   transition: 0.2s all;
 //   font-weight: 600;
 //   letter-spacing: 0.5rem;
 //   &:hover {
 //     color: var(--text);
 //     text-decoration: underline;
 //   }
 // `;

// EXTERNAL MODULE: ./scss/components/Footer.module.scss
var Footer_module = __webpack_require__(9736);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).footerContainer,
        children: [
            "Loosely designed in ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Footer_module_default()).highlight,
                children: "Figma"
            }),
            " and coded in ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Footer_module_default()).highlight,
                children: "Visual Studio Code"
            }),
            " by yours truly. Built with ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Footer_module_default()).highlight,
                children: "ReactJs"
            }),
            " and ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Footer_module_default()).highlight,
                children: "styled-components"
            }),
            ", deployed with",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Footer_module_default()).highlight,
                children: "Vercel"
            }),
            ". All text is set in the ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Footer_module_default()).highlight,
                children: "Victor Mono"
            }),
            " typeface."
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer); // const FooterContainer = styled.div`
 //   font-size: 1.25rem;
 //   color: var(--primary);
 // `;

// EXTERNAL MODULE: ./scss/components/Info.module.scss
var Info_module = __webpack_require__(9802);
var Info_module_default = /*#__PURE__*/__webpack_require__.n(Info_module);
;// CONCATENATED MODULE: ./components/Info.tsx







const Info = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Info_module_default()).infoContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_FeaturedProjects, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Info = (Info); // const InfoContainer = styled.div`
 //   flex: 1;
 //   display: flex;
 //   flex-direction: column;
 //   gap: 20rem;
 //   padding: 10rem 0;
 //   @media (max-width: 1024px) {
 //     gap: 10rem;
 //   }
 // `;

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(1495);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/si/index.esm.js
var si_index_esm = __webpack_require__(6443);
// EXTERNAL MODULE: ./scss/components/Icons.module.scss
var Icons_module = __webpack_require__(4202);
var Icons_module_default = /*#__PURE__*/__webpack_require__.n(Icons_module);
// EXTERNAL MODULE: ./scss/abstracts/_variables.module.scss
var _variables_module = __webpack_require__(6706);
var _variables_module_default = /*#__PURE__*/__webpack_require__.n(_variables_module);
;// CONCATENATED MODULE: ./components/Icons.tsx






const Icon = ()=>{
    const [isHoveredLinkedin, setIsHoveredLinkedin] = (0,react_.useState)(false);
    const [isHoveredGithub, setIsHoveredGithub] = (0,react_.useState)(false);
    const [isHoveredLeetcode, setIsHoveredLeetcode] = (0,react_.useState)(false);
    const handleMouseEnter = (icon)=>{
        if (icon === "github") setIsHoveredGithub(true);
        else if (icon === "linkedin") setIsHoveredLinkedin(true);
        else setIsHoveredLeetcode(true);
    };
    const handleMouseLeave = (icon)=>{
        if (icon === "github") setIsHoveredGithub(false);
        else if (icon === "linkedin") setIsHoveredLinkedin(false);
        else setIsHoveredLeetcode(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Icons_module_default()).iconsContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                "aria-label": "LinkedIn",
                href: "https://www.linkedin.com/in/vishal-kumar-sharma-955aa0201/",
                target: "_blank",
                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaLinkedin */.ltd, {
                    size: 35,
                    style: {
                        transition: "all .2s",
                        cursor: "pointer",
                        fill: isHoveredLinkedin ? (_variables_module_default()).text : (_variables_module_default()).primary
                    },
                    onMouseEnter: ()=>handleMouseEnter("linkedin"),
                    onMouseLeave: ()=>handleMouseLeave("linkedin")
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                "aria-label": "Github",
                href: "https://github.com/vishalkrsharma",
                target: "_blank",
                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaGithub */.hJX, {
                    size: 35,
                    style: {
                        transition: "all .2s",
                        cursor: "pointer",
                        fill: isHoveredGithub ? (_variables_module_default()).text : (_variables_module_default()).primary
                    },
                    onMouseEnter: ()=>handleMouseEnter("github"),
                    onMouseLeave: ()=>handleMouseLeave("github")
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                "aria-label": "LeetCode",
                href: "https://leetcode.com/vishalkrsharma/",
                target: "_black",
                children: /*#__PURE__*/ jsx_runtime_.jsx(si_index_esm/* SiLeetcode */.LRI, {
                    size: 35,
                    style: {
                        transition: "all .2s",
                        cursor: "pointer",
                        fill: isHoveredLeetcode ? (_variables_module_default()).text : (_variables_module_default()).primary
                    },
                    onMouseEnter: ()=>handleMouseEnter("leetcode"),
                    onMouseLeave: ()=>handleMouseLeave("leetcode")
                })
            })
        ]
    });
};
/* harmony default export */ const Icons = (Icon); // const IconsContainer = styled.div`
 //   display: flex;
 //   justify-content: flex-start;
 //   align-items: stretch;
 //   gap: 1.5rem;
 //   /* @media (max-width: 1024px) {
 //     margin-top: 2rem;
 //   } */
 // `;

// EXTERNAL MODULE: ./scss/components/Intro.module.scss
var Intro_module = __webpack_require__(4805);
var Intro_module_default = /*#__PURE__*/__webpack_require__.n(Intro_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/navigation.js
var navigation = __webpack_require__(2436);
// EXTERNAL MODULE: ./scss/components/NavButton.module.scss
var NavButton_module = __webpack_require__(5482);
var NavButton_module_default = /*#__PURE__*/__webpack_require__.n(NavButton_module);
;// CONCATENATED MODULE: ./components/NavButton.tsx



const NavButton = ({ children, $isActive, ariaLabel, newTab, href })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: `${(NavButton_module_default()).navButtonContainer} ${$isActive && (NavButton_module_default()).active}`,
        "aria-label": ariaLabel,
        target: newTab ? "_blank" : "",
        href: href,
        children: children
    });
};
/* harmony default export */ const components_NavButton = (NavButton);
 // const NavButtonContainer = styled(Link)<NavButtonContainerProps>`
 //   display: block;
 //   padding: 0.5rem 2rem;
 //   background-color: ${(props) => (props.$isActive ? 'var(--text)' : 'var(--primary)')};
 //   color: var(--background);
 //   font-size: 1.5rem;
 //   font-weight: 600;
 //   transition: all 0.2s;
 //   border-radius: var(--borRad);
 //   @media (pointer: fine) {
 //     cursor: pointer;
 //     &:hover {
 //       background-color: var(--text);
 //     }
 //   }
 // `;

;// CONCATENATED MODULE: ./components/Intro.tsx






const Intro = ()=>{
    const [isActive, setIsActive] = (0,react_.useState)("about");
    const pathname = (0,navigation.usePathname)();
    const handleScroll = ()=>{
        let pos = window.scrollY;
        if (0 <= pos && pos < 440) {
            setIsActive("about");
        } else if (440 <= pos && pos < 841) {
            setIsActive("education");
        } else if (841 <= pos && pos < 1553) {
            setIsActive("skills");
        } else if (1553 <= pos && pos < 4000) {
            setIsActive("projects");
        }
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Intro_module_default()).introContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Intro_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Intro_module_default()).header__name,
                        children: "Vishal Kumar Sharma"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Intro_module_default()).header__primary,
                        children: "Web Developer & Designer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Intro_module_default()).tag,
                        children: "Crafting digital wonders through the fusion of code and creativity."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Intro_module_default()).nav,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(Intro_module_default()).nav__link} ${isActive === "about" && (Intro_module_default()).active}`,
                        onClick: ()=>{
                            setIsActive("about");
                            window.scroll({
                                top: 0,
                                behavior: "smooth"
                            });
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(Intro_module_default()).nav__link__line} ${isActive === "about" && (Intro_module_default()).active}`
                            }),
                            "About"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(Intro_module_default()).nav__link} ${isActive === "education" && (Intro_module_default()).active}`,
                        onClick: ()=>{
                            setIsActive("education");
                            window.scroll({
                                top: 440,
                                behavior: "smooth"
                            });
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(Intro_module_default()).nav__link__line} ${isActive === "education" && (Intro_module_default()).active}`
                            }),
                            "Education"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(Intro_module_default()).nav__link} ${isActive === "skills" && (Intro_module_default()).active}`,
                        onClick: ()=>{
                            setIsActive("skills");
                            window.scroll({
                                top: 841,
                                behavior: "smooth"
                            });
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(Intro_module_default()).nav__link__line} ${isActive === "skills" && (Intro_module_default()).active}`
                            }),
                            "Skills"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(Intro_module_default()).nav__link} ${isActive === "projects" && (Intro_module_default()).active}`,
                        onClick: ()=>{
                            setIsActive("projects");
                            window.scroll({
                                top: 1553,
                                behavior: "smooth"
                            });
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(Intro_module_default()).nav__link__line} ${isActive === "projects" && (Intro_module_default()).active}`
                            }),
                            "Projects"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Intro_module_default()).iconsButtonsContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Intro_module_default()).navButtons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_NavButton, {
                                $isActive: pathname === "/",
                                ariaLabel: "Home",
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_NavButton, {
                                $isActive: false,
                                ariaLabel: "Resume",
                                href: "/Resume - Vishal Kumar Sharma.pdf",
                                newTab: true,
                                children: "Resume"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Icons, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Intro = (Intro); // const IntroContainer = styled.div``;
 // const HeaderContainer = styled.div``;
 // const Header = styled.div``;
 // const Tag = styled(SecondaryText)`
 //   @media (min-width: 1024px) {
 //     width: 80%;
 //   }
 // `;
 // const Nav = styled.nav`
 //   display: flex;
 //   flex-direction: column;
 //   justify-content: space-between;
 //   align-items: flex-start;
 //   gap: 1rem;
 //   @media (max-width: 1024px) {
 //     display: none;
 //   }
 // `;
 // const NavLink = styled.div<NavLinkProps>`
 //   cursor: pointer;
 //   display: block;
 //   font-size: 1.5rem;
 //   color: var(--primary);
 //   transition: all 0.2s;
 //   font-weight: 600;
 //   color: ${(props) => (props.$isActive ? 'var(--text)' : 'var(--primary)')};
 //   .line {
 //     background-color: ${(props) => (props.$isActive ? 'var(--text)' : 'var(--primary)')};
 //     width: ${(props) => (props.$isActive ? '8rem' : '5rem')};
 //   }
 //   &:hover {
 //     color: var(--text);
 //     .line {
 //       width: 8rem;
 //       background-color: var(--text);
 //     }
 //   }
 // `;
 // const Line = styled.div`
 //   margin-bottom: 0.7rem;
 //   margin-right: 1rem;
 //   display: inline-block;
 //   height: 0.1rem;
 //   width: 5rem;
 //   background-color: var(--primary);
 //   transition: all 0.2s;
 // `;
 // const IconsButtonsContainer = styled.div`
 //   display: flex;
 //   flex-direction: column;
 //   gap: 1rem;
 // `;
 // const NavButtonsContainer = styled.div`
 //   display: flex;
 //   gap: 1rem;
 //   margin-bottom: 1rem;
 // `;

// EXTERNAL MODULE: ./scss/pages/HomePage.module.scss
var HomePage_module = __webpack_require__(5422);
var HomePage_module_default = /*#__PURE__*/__webpack_require__.n(HomePage_module);
;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const HomePage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (HomePage_module_default()).homePageContainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Intro, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Info, {})
            ]
        })
    });
};
/* harmony default export */ const page = (HomePage);


/***/ }),

/***/ 5107:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"header": "About_header__9YisY",
	"secondaryText": "About_secondaryText__VdFLK",
	"highlight": "About_highlight__JIz5B"
};


/***/ }),

/***/ 6336:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"header": "Education_header__etB_k",
	"table": "Education_table__rJl9r",
	"label": "Education_label__DPfb7",
	"data": "Education_data__gWHxF"
};


/***/ }),

/***/ 3462:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"featuredProjectsContainer": "FeaturedProjects_featuredProjectsContainer__NCDSX",
	"header": "FeaturedProjects_header__qaOQd",
	"projectsLink": "FeaturedProjects_projectsLink___JzXL"
};


/***/ }),

/***/ 9736:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"footerContainer": "Footer_footerContainer__GIbwG",
	"highlight": "Footer_highlight__rddRW"
};


/***/ }),

/***/ 4202:
/***/ ((module) => {

// Exports
module.exports = {
	"iconsContainer": "Icons_iconsContainer__Aa2wL"
};


/***/ }),

/***/ 9802:
/***/ ((module) => {

// Exports
module.exports = {
	"infoContainer": "Info_infoContainer__otqB_"
};


/***/ }),

/***/ 4805:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"introContainer": "Intro_introContainer__lHt1T",
	"header": "Intro_header__ZxL8U",
	"header__name": "Intro_header__name__pT8mC",
	"header__primary": "Intro_header__primary__Yk5iO",
	"tag": "Intro_tag__I2b2r",
	"iconsButtonsContainer": "Intro_iconsButtonsContainer__NQxjm",
	"navButtons": "Intro_navButtons__DBZhG",
	"nav": "Intro_nav__BQqCi",
	"nav__link": "Intro_nav__link__XT4_T",
	"active": "Intro_active__rM47k",
	"nav__link__line": "Intro_nav__link__line__iTcGs"
};


/***/ }),

/***/ 5482:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"navButtonContainer": "NavButton_navButtonContainer__fVFrI",
	"active": "NavButton_active__CtDvL"
};


/***/ }),

/***/ 8956:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"header": "Skills_header__Te5Ub",
	"table": "Skills_table__cvpnn",
	"label": "Skills_label__JEUY4",
	"data": "Skills_data__BWKCA"
};


/***/ }),

/***/ 5422:
/***/ ((module) => {

// Exports
module.exports = {
	"homePageContainer": "HomePage_homePageContainer__x6U_2"
};


/***/ }),

/***/ 4453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6930);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/vishal/portfolio/app/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [718,339,194], () => (__webpack_exec__(4660)));
module.exports = __webpack_exports__;

})();