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
            // Add other pages under this category
          ],
        },
        {
          type: 'doc',
          label: 'Transportation',
          id: 'sector-transportation',
        },
        {
          type: 'doc',
          label: 'Buildings',
          id: 'sector-buildings',
        },
        {
          type: 'doc',
          label: 'Land Sinks',
          id: 'sector-land-sinks',
        },
        {
          type: 'doc',
          label: 'Coastal and Ocean Sinks',
          id: 'sector-coastal-and-ocean-sinks',
        },
        {
          type: 'doc',
          label: 'Engineered Sinks',
          id: 'sector-engineered-sinks',
        },
        {
          type: 'doc',
          label: 'Health and Education',
          id: 'sector-health-and-education',
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
      label: '👩🏽‍🚀 Job seekers',
      id: 'jobseekers',
    },
    {
      type: 'doc',
      label: '⚡️ Startups',
      id: 'startups',
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
