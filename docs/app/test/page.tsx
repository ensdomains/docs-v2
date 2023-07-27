import {Fragment as _Fragment, jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";
import {useMDXComponents as _provideComponents} from "next-mdx-import-source-file";
import {Guides} from '@/components/Guides';
import {Resources} from '@/components/Resources';
import {QuickBannerLink} from '@/components/home/QuickLink';
export const meta = {
  description: 'Learn everything about the Ethereum Name Service (ENS). How to integrate names into your dApp, issue subnames, and so much more!',
  title: 'ENS Documentation',
  showDetailsSection: false,
  contributors: ['lucemans']
};
export const sections = [];
function _createMdxContent(props) {
  const {VideoComponent} = Object.assign({}, _provideComponents(), props.components);
  if (!VideoComponent) _missingMdxReference("VideoComponent", true, "15:1-15:59");
  return _jsxDEV(_Fragment, {
    children: ["\n", "\n", _jsxDEV(VideoComponent, {
      src: "https://v3x.space/ens-docs/intro5"
    }, undefined, false, {
      fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV("div", {
      className: "grid grid-cols-2 gap-x-3 gap-y-3",
      children: [_jsxDEV(QuickBannerLink, {
        title: "Im building a dApp",
        description: "Learn how to integrate ENS into your dApp",
        href: "/web",
        image: "/home/grid_link_1.png"
      }, undefined, false, {
        fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx",
        lineNumber: 18,
        columnNumber: 1
      }, this), _jsxDEV(QuickBannerLink, {
        title: "Im here to learn about resolution",
        description: "Learn how ENS works under the hood, register, renew, resolvers, registries, and much more!",
        href: "/resolution",
        image: "/home/grid_link_2.png"
      }, undefined, false, {
        fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx",
        lineNumber: 25,
        columnNumber: 1
      }, this), _jsxDEV(QuickBannerLink, {
        title: "Im looking for the DAO Governance Docs",
        description: "Everything about the ENS DAO you find here!",
        href: "/dao",
        image: "/home/grid_link_3.png"
      }, undefined, false, {
        fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx",
        lineNumber: 32,
        columnNumber: 1
      }, this), _jsxDEV(QuickBannerLink, {
        title: "Im not a developer how did I get here?",
        description: "The support knowledgebase is a wondeful resource for any questions you might have!",
        href: "https://support.ens.domains/",
        image: "/home/grid_link_4.png"
      }, undefined, false, {
        fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx",
        lineNumber: 39,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx",
      lineNumber: 17,
      columnNumber: 1
    }, this)]
  }, undefined, true, {
    fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx",
    lineNumber: 1,
    columnNumber: 1
  }, this);
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? _jsxDEV(MDXLayout, Object.assign({}, props, {
    children: _jsxDEV(_createMdxContent, props, undefined, false, {
      fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx"
    }, this)
  }), undefined, false, {
    fileName: "/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx"
  }, this) : _createMdxContent(props);
}
export default MDXContent;
function _missingMdxReference(id, component, place) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it." + (place ? "\nIt’s referenced in your code at `" + place + "` in `/home/jakob/dev/v3xlabs/docs-v2/docs/app/page.mdx`" : ""));
}
export const filepath = "/app/page.mdx";
