exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 4301:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5109, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2920, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9129, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4308, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9937, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4798, 23))

/***/ }),

/***/ 1179:
/***/ (() => {



/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Project)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./scss/components/Project.module.scss
var Project_module = __webpack_require__(1784);
var Project_module_default = /*#__PURE__*/__webpack_require__.n(Project_module);
// EXTERNAL MODULE: ./scss/components/Tag.module.scss
var Tag_module = __webpack_require__(3311);
var Tag_module_default = /*#__PURE__*/__webpack_require__.n(Tag_module);
;// CONCATENATED MODULE: ./components/Tag.tsx


const Tag = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Tag_module_default()).tagContainer,
        children: children
    });
};
/* harmony default export */ const components_Tag = (Tag); // const TagContainer = styled.div`
 //   background-color: var(--primary);
 //   color: var(--background);
 //   padding: 0.25rem 0.75rem;
 //   border-radius: var(--borRad);
 //   font-size: 1.25rem;
 //   font-weight: 700;
 // `;

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(1495);
// EXTERNAL MODULE: ./scss/components/HyperLink.module.scss
var HyperLink_module = __webpack_require__(9182);
var HyperLink_module_default = /*#__PURE__*/__webpack_require__.n(HyperLink_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/link.js
var next_link = __webpack_require__(3727);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./scss/abstracts/_variables.module.scss
var _variables_module = __webpack_require__(6706);
var _variables_module_default = /*#__PURE__*/__webpack_require__.n(_variables_module);
;// CONCATENATED MODULE: ./components/HyperLink.tsx






const HyperLink = ({ children, link, gh })=>{
    const [isHovered, setIsHovered] = (0,react_.useState)(false);
    const handleMouseEnter = ()=>{
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        className: (HyperLink_module_default()).hyperLinkContainer,
        href: link,
        target: "_blank",
        children: [
            gh ? /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaGithub */.hJX, {
                size: 15,
                style: {
                    transition: "all .2s",
                    cursor: "pointer",
                    fill: isHovered ? (_variables_module_default()).text : (_variables_module_default()).primary
                },
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave
            }) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaLink */.gjK, {
                size: 15,
                style: {
                    transition: "all .2s",
                    cursor: "pointer",
                    fill: isHovered ? (_variables_module_default()).text : (_variables_module_default()).primary
                },
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave
            }),
            children
        ]
    });
};
/* harmony default export */ const components_HyperLink = (HyperLink); // const HyperLinkContainer = styled.a`
 //   margin: 1rem 0;
 //   display: flex;
 //   justify-content: flex-start;
 //   align-items: center;
 //   gap: 1rem;
 //   cursor: pointer;
 //   font-size: 1.5rem;
 //   &:hover {
 //     * {
 //       fill: var(--text);
 //       transition: all 0.2s;
 //     }
 //   }
 // `;

;// CONCATENATED MODULE: ./components/Project.tsx




const Project = ({ project })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Project_module_default()).project,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Project_module_default()).project__name,
                style: {
                    fontSize: "1.75rem"
                },
                children: project.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Project_module_default()).project__info,
                children: project.info
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Project_module_default()).project__tags,
                children: project.techTags.map((tag, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Tag, {
                        children: tag
                    }, idx))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Project_module_default()).linksContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HyperLink, {
                        link: project.projectLink,
                        gh: false,
                        children: "Project"
                    }),
                    project.githubLinks.length === 1 ? /*#__PURE__*/ jsx_runtime_.jsx(components_HyperLink, {
                        link: project.githubLinks[0],
                        gh: true,
                        children: "Github"
                    }) : project.githubLinks.map((link, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(components_HyperLink, {
                            link: link,
                            gh: true,
                            children: idx === 0 ? "Client" : "Server"
                        }, idx))
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Project = (Project);


/***/ }),

/***/ 8671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ PROJECTS)
});

;// CONCATENATED MODULE: ./models/Project.ts
class Project {
    constructor(title, info, projectLink, githubLinks, techTags, isFeatured){
        this.title = title;
        this.info = info;
        this.projectLink = projectLink;
        this.githubLinks = githubLinks;
        this.techTags = techTags;
        this.isFeatured = isFeatured;
    }
}
/* harmony default export */ const models_Project = (Project);

;// CONCATENATED MODULE: ./data/Projects.ts

const PROJECTS = [
    new models_Project("Moonquake Visualized", "It is a group project for the Nasa SpaceApps Challenge 2022 hackathon. In this project, we made a 3D simulation of the Moon and rendered the all the quakes recorded by the Apollo Lander.", "https://moonquake-visualized.vercel.app/", [
        "https://github.com/vishalkrsharma/moonquake-visualized"
    ], [
        "NextJs",
        "styled-components"
    ], true),
    new models_Project("TaskMate", "It is a task management web app which can be used to manage tasks.", "https://tm-client-black.vercel.app/", [
        "https://github.com/vishalkrsharma/tm-client",
        "https://github.com/vishalkrsharma/tm-server"
    ], [
        "MongoDB",
        "ExpressJs",
        "ReactJs",
        "NodeJs"
    ], true),
    new models_Project("Ecommerce Website (Front)", "Part of Ecommerce Website from where customers can buy products.", "https://ecommerce-front-mu-inky.vercel.app", [
        "https://github.com/vishalkrsharma/ecommerce-front"
    ], [
        "NextJs",
        "styled-components"
    ], true),
    new models_Project("Ecommerce Website (Admin)", "Part of Ecommerce Website from where admins can add products.", "https://ecommerce-admin-nu.vercel.app/", [
        "https://github.com/vishalkrsharma/ecommerce-admin"
    ], [
        "NextJs",
        "TailwindCSS"
    ], true),
    new models_Project("Portfolio Website", "It is a simple portfolio website.", "https://vishalkrsharma.vercel.app/", [
        "https://github.com/vishalkrsharma/portfolio"
    ], [
        "ReactJs",
        "styles-components",
        "TypeScript"
    ], true),
    new models_Project("Rick Roll Player", "This project is a RICK ROLL player.", "https://rick-roll-player.vercel.app/", [
        "https://github.com/vishalkrsharma/rick-roll-player"
    ], [
        "HTML",
        "CSS",
        "Javascript"
    ], false),
    new models_Project("Guess The Number", "This is a simple game in which the player need to guess a number (Between 1 and 20). Press the button Again! to play again.", "https://vishalkrsharma.github.io/guess-the-number/", [
        "https://github.com/vishalkrsharma/guess-the-number"
    ], [
        "HTML",
        "CSS",
        "Javascript"
    ], false),
    new models_Project("Calendar", "A Simple Calendar built using HTML, CSS and Javascript.", "https://github.com/vishalkrsharma/calendar", [
        "https://vishalkrsharma.github.io/calendar/"
    ], [
        "HTML",
        "CSS",
        "Javascript"
    ], false)
];


/***/ }),

/***/ 6706:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274"
};


/***/ }),

/***/ 9182:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"hyperLinkContainer": "HyperLink_hyperLinkContainer__5eQjW"
};


/***/ }),

/***/ 1784:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"project__name": "Project_project__name__OHDXr",
	"project__info": "Project_project__info__lelEE",
	"project__tags": "Project_project__tags__7nQbe",
	"tagContainer": "Project_tagContainer__GMtO3",
	"linksContainer": "Project_linksContainer___eBaA"
};


/***/ }),

/***/ 3311:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "#fafafa",
	"background": "#1a1919",
	"primary": "#858683",
	"secondary": "#0d0d0d",
	"accent": "#737274",
	"tagContainer": "Tag_tagContainer__dSmL3"
};


/***/ }),

/***/ 6633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3794);
/* harmony import */ var _scss_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_globals_scss__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Vishal Kumar Sharma",
    description: "Explore Vishal Kumar Sharma's portfolio repository, showcasing a collection of projects and achievements.",
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 3794:
/***/ (() => {



/***/ })

};
;