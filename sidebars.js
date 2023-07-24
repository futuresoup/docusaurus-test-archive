/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docSidebar: [
    {
      type: 'category',
      label: '🏁 Quick Start',
      items: ['intro', 'about', 'contribute'],
    },
    {
      type: 'doc',
      label: '👩🏽‍🚀 Job seekers',
      id: 'jobseekers',
    },
    {
      type: 'category',
      label: '✅ Climate Solutions',
      items: [
        {
          type: 'link',
          label: 'Intro to the Solutions Framework',
          href: '/solutions',
        },       
        {
          type: 'category',
          label: 'Electricity',
          items: [
            {
              type: 'doc',
              label: 'Electricity Overview', // Labeled as "Electricity Overview"
              id: 'sector-electricity', // ID of the overview .md file
            },
            'solution-biomass-power',
            'solution-building-automation-systems',
            'solution-building-retrofitting',
            'solution-concentrated-solar-power',
            'solution-distributed-energy-storage',
            'solution-distributed-solar-photovoltaics',
            'solution-district-heating',
            'solution-dynamic-glass',
            'solution-geothermal-power',
            'solution-green-and-cool-roofs',
            'solution-grid-flexibility',
            'solution-high-efficiency-heat-pumps',
            'solution-high-performance-glass',
            'solution-insulation',
            'solution-landfill-methane-capture',
            'solution-led-lighting',
            'solution-low-flow-fixtures',
            'solution-methane-digesters',
            'solution-micro-wind-turbines',
            'solution-microgrids',
            'solution-net-zero-buildings',
            'solution-nuclear-power',
            'solution-ocean-power',
            'solution-offshore-wind-turbines',
            'solution-onshore-wind-turbines',
            'solution-small-hydropower',
            'solution-smart-thermostats',
            'solution-solar-hot-water',
            'solution-utility-scale-energy-storage',
            'solution-utility-scale-solar-photovoltaics',
            'solution-waste-to-energy',
            'solution-water-distribution-efficiency',
          ],
        },
        {
          type: 'category',
          label: 'Industry',
          items: [
            {
              type: 'doc',
              label: 'Electricity Overview', // Labeled as "Electricity Overview"
              id: 'sector-industry', // ID of the overview .md file
            },
            'solution-alternative-cement',
            'solution-alternative-refrigerants',
            'solution-bioplastics',
            'solution-composting',
            'solution-landfill-methane-capture',
            'solution-methane-digesters',
            'solution-recycled-metals',
            'solution-recycled-paper',
            'solution-recycled-plastics',
            'solution-recycling',
            'solution-reduced-plastics',
            'solution-refrigerant-management',
            'solution-waste-to-energy',
          ],
        },
        {
          type: 'category',
          label: 'Food, Agriculture, and Land Use',
          items: [
            'solution-coastal-wetland-protection',
            'solution-conservation-agriculture',
            'solution-farm-irrigation-efficiency',
            'solution-forest-protection',
            'solution-grassland-protection',
            'solution-improved-aquaculture',
            'solution-improved-cattle-feed',
            'solution-improved-fisheries',
            'solution-improved-manure-management',
            'solution-improved-rice-production',
            'solution-indigenous-peoples-forest-tenure',
            'solution-nutrient-management',
            'solution-peatland-protection-and-rewetting',
            'solution-plant-rich-diets',
            'solution-reduced-food-waste',
            'solution-regenerative-annual-cropping',
            'solution-seafloor-protection',
            'solution-sustainable-intensification-for-smallholders',
            'solution-system-of-rice-intensification',
          ],
        },
        {
          type: 'category',
          label: 'Transportation',
          items: [
            'solution-bicycle-infrastructure',
            'solution-carpooling',
            'solution-efficient-aviation',
            'solution-efficient-ocean-shipping',
            'solution-efficient-trucks',
            'solution-electric-bicycles',
            'solution-electric-cars',
            'solution-electric-trains',
            'solution-high-speed-rail',
            'solution-hybrid-cars',
            'solution-public-transit',
            'solution-telepresence',
            'solution-walkable-cities',
            // Add other transportation pages here
          ],
        },
        {
          type: 'category',
          label: 'Buildings',
          items: [
            'solution-alternative-refrigerants',
            'solution-biogas-for-cooking',
            'solution-building-automation-systems',
            'solution-building-retrofitting',
            'solution-clean-cooking',
            'solution-district-heating',
            'solution-dynamic-glass',
            'solution-green-and-cool-roofs',
            'solution-high-efficiency-heat-pumps',
            'solution-high-performance-glass',
            'solution-insulation',
            'solution-low-flow-fixtures',
            'solution-net-zero-buildings',
            'solution-refrigerant-management',
            'solution-smart-thermostats',
            'solution-solar-hot-water',
            // Add other buildings pages here
          ],
        },
        {
          type: 'category',
          label: 'Land Sinks',
          items: [
            'solution-abandoned-farmland-restoration',
            'solution-bamboo-production',
            'solution-conservation-agriculture',
            'solution-forest-protection',
            'solution-grassland-protection',
            'solution-improved-rice-production',
            'solution-indigenous-peoples-forest-tenure',
            'solution-managed-grazing',
            'solution-multistrata-agroforestry',
            'solution-peatland-protection-and-rewetting',
            'solution-perennial-biomass-production',
            'solution-perennial-staple-crops',
            'solution-plant-rich-diets',
            'solution-reduced-food-waste',
            'solution-regenerative-annual-cropping',
            'solution-silvopasture',
            'solution-sustainable-intensification-for-smallholders',
            'solution-system-of-rice-intensification',
            'solution-temperate-forest-restoration',
            'solution-tree-intercropping',
            'solution-tree-plantations-on-degraded-land',
            'solution-tropical-forest-restoration',
            // Add other land sinks pages here
          ],
        },
        {
          type: 'category',
          label: 'Coastal and Ocean Sinks',
          items: [
            'solution-coastal-wetland-protection',
            'solution-coastal-wetland-restoration',
            'solution-improved-fisheries',
            'solution-macroalgae-protection-and-restoration',
            'solution-seaweed-farming',
            // Add other coastal and ocean sinks pages here
          ],
        },
        {
          type: 'category',
          label: 'Engineered Sinks',
          items: ['solution-biochar-production'],
        },
        {
          type: 'category',
          label: 'Health and Education',
          items: ['solution-family-planning-and-education'],
        },
        {
          type: 'doc',
          label: 'Climate Adaptation',
          id: 'sector-climate-adaptation',
        },
        {
          type: 'doc',
          label: 'Research and Education',
          id: 'sector-research-and-education',
        },
        {
          type: 'doc',
          label: 'Media and Journalism',
          id: 'sector-media-and-journalism',
        },
        {
          type: 'doc',
          label: 'Advocacy or Policy',
          id: 'sector-advocacy-or-policy',
        },
      ],
    },
    {
      type: 'doc',
      label: '⚡️ Founders',
      id: 'founders',
    },
    {
      type: 'doc',
      label: '🌍 Resources',
      id: 'resources',
    },
    {
      type: 'link',
      label: '🗞️ News',
      href: '/blog',
    },
  ],
};


// By default, Docusaurus generates a sidebar from the docs folder structure
// docSidebar: [
//   {
//     type: "category",
//     label: "Docs",
//     items: ["intro", "about", "jobseeker", "startup"],
//   },
// {
//   type: "link",
//   label: "Blog",
//   href: "/blog",
// },
// { type: "autogenerated", dirName: "." },
// ],
