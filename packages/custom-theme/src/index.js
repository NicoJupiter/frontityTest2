import Root from "./theme-files";
import SliderBlock from "./theme-files/blocks/SliderBlock";
import ImageBlock from "./theme-files/blocks/ImageBlock";
import TextBlock from "./theme-files/blocks/TextBlock";

const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "menus/v1/menus/:id",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "/menus/v1/menus/"+params.id,
    });

    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items,
      isMenu: true
    });
  }
};

/*
const customPostHandler = {

  name: "customPostHandler",
  pattern: "wp/v2/:slug",

  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "/wp/v2/"+params.slug,
    });

    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items,
      isCustomType: true
    });
  }

};*/


export default {
  name: "custom-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      typeWidget: 'Elementor',
      isElementor : true,
      isAcf : false,
      componentsArray : {
        SliderBlock: SliderBlock,
        ImageBlock: ImageBlock,
        TextBlock : TextBlock
      }
    }
  },
  actions: {
    theme: {
      beforeSSR: ({ actions }) => async () => {
        await actions.source.fetch("menus/v1/menus/2");
        await actions.source.fetch("menus/v1/menus/3");
      }
    }
  },
  libraries: {
    source: {
      handlers: [menuHandler]
    }
  }
};
