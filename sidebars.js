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
    // {
    //   type: 'category',
    //   label: '🏁 Quick Start',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'intro',
    //       label: 'Intro',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'level-0',
    //       label: 'Level 0',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'level-1',
    //       label: 'Level 1',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'level-2',
    //       label: 'Level 2',
    //     },
    //   ],
    // },
    {
      type: 'doc',
      label: '📓 Intro',
      id: 'intro',
    },
    {
      type: 'doc',
      label: '👩🏽‍🚀 Career Guide',
      id: 'career-guide',
    },
    {
      type: 'category',
      label: '✅ Climate Solutions',
      items: [
        {
          type: 'doc',
          label: '⭐️ What are Climate Solutions?',
          id: 'solutions',
        },
        {
          type: 'category',
          label: 'Electricity',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-electricity',
            },
            {
              type: 'doc',
              label: 'Utility-Scale Energy Storage',
              id: 'solution-utility-scale-energy-storage',
            },
            {
              type: 'doc',
              label: 'Distributed Energy Storage',
              id: 'solution-distributed-energy-storage',
            },
            {
              type: 'doc',
              label: 'Microgrids',
              id: 'solution-microgrids',
            },
            {
              type: 'doc',
              label: 'Grid Flexibility',
              id: 'solution-grid-flexibility',
            },
            ,
            {
              type: 'doc',
              label: 'Net Zero Buildings',
              id: 'solution-net-zero-buildings',
            },
            {
              type: 'doc',
              label: 'Building Retrofitting',
              id: 'solution-building-retrofitting',
            },
            {
              type: 'doc',
              label: 'Micro Wind Turbines',
              id: 'solution-micro-wind-turbines',
            },
            {
              type: 'doc',
              label: 'Dynamic Glass',
              id: 'solution-dynamic-glass',
            },
            {
              type: 'doc',
              label: 'Green and Cool Roofs',
              id: 'solution-green-and-cool-roofs',
            },
            {
              type: 'doc',
              label: 'Water Distribution Efficiency',
              id: 'solution-water-distribution-efficiency',
            },
            {
              type: 'doc',
              label: 'Low-Flow Fixtures',
              id: 'solution-low-flow-fixtures',
            },
            {
              type: 'doc',
              label: 'Ocean Power',
              id: 'solution-ocean-power',
            },
            {
              type: 'doc',
              label: 'Small Hydropower',
              id: 'solution-small-hydropower',
            },
            {
              type: 'doc',
              label: 'Biomass Power',
              id: 'solution-biomass-power',
            },
            {
              type: 'doc',
              label: 'Nuclear Power',
              id: 'solution-nuclear-power',
            },
            {
              type: 'doc',
              label: 'Solar Hot Water',
              id: 'solution-solar-hot-water',
            },
            {
              type: 'doc',
              label: 'Landfill Methane Capture',
              id: 'solution-landfill-methane-capture',
            },
            {
              type: 'doc',
              label: 'High-Efficiency Heat Pumps',
              id: 'solution-high-efficiency-heat-pumps',
            },
            {
              type: 'doc',
              label: 'Methane Digesters',
              id: 'solution-methane-digesters',
            },
            {
              type: 'doc',
              label: 'Geothermal Power',
              id: 'solution-geothermal-power',
            },
            {
              type: 'doc',
              label: 'District Heating',
              id: 'solution-district-heating',
            },
            {
              type: 'doc',
              label: 'Waste to Energy',
              id: 'solution-waste-to-energy',
            },
            {
              type: 'doc',
              label: 'Smart Thermostats',
              id: 'solution-smart-thermostats',
            },
            {
              type: 'doc',
              label: 'High-Performance Glass',
              id: 'solution-high-performance-glass',
            },
            {
              type: 'doc',
              label: 'Building Automation Systems',
              id: 'solution-building-automation-systems',
            },
            {
              type: 'doc',
              label: 'Offshore Wind Turbines',
              id: 'solution-offshore-wind-turbines',
            },
            {
              type: 'doc',
              label: 'LED Lighting',
              id: 'solution-led-lighting',
            },
            {
              type: 'doc',
              label: 'Insulation',
              id: 'solution-insulation',
            },
            {
              type: 'doc',
              label: 'Concentrated Solar Power',
              id: 'solution-concentrated-solar-power',
            },
            {
              type: 'doc',
              label: 'Distributed Solar Photovoltaics',
              id: 'solution-distributed-solar-photovoltaics',
            },
            {
              type: 'doc',
              label: 'Utility-Scale Solar Photovoltaics',
              id: 'solution-utility-scale-solar-photovoltaics',
            },
            {
              type: 'doc',
              label: 'Onshore Wind Turbines',
              id: 'solution-onshore-wind-turbines',
            }
          ],
        },
        {
          type: 'category',
          label: 'Food, Agriculture, and Land Use',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-food-agriculture-and-land-use',
            },
            {
              type: 'doc',
              label: 'Coastal Wetland Protection',
              id: 'solution-coastal-wetland-protection',
            },
            {
              type: 'doc',
              label: 'Conservation Agriculture',
              id: 'solution-conservation-agriculture',
            },
            {
              type: 'doc',
              label: 'Farm Irrigation Efficiency',
              id: 'solution-farm-irrigation-efficiency',
            },
            {
              type: 'doc',
              label: 'Forest Protection',
              id: 'solution-forest-protection',
            },
            {
              type: 'doc',
              label: 'Grassland Protection',
              id: 'solution-grassland-protection',
            },
            {
              type: 'doc',
              label: 'Improved Aquaculture',
              id: 'solution-improved-aquaculture',
            },
            {
              type: 'doc',
              label: 'Improved Cattle Feed',
              id: 'solution-improved-cattle-feed',
            },
            {
              type: 'doc',
              label: 'Improved Fisheries',
              id: 'solution-improved-fisheries',
            },
            {
              type: 'doc',
              label: 'Improved Manure Management',
              id: 'solution-improved-manure-management',
            },
            {
              type: 'doc',
              label: 'Improved Rice Production',
              id: 'solution-improved-rice-production',
            },
            {
              type: 'doc',
              label: 'Indigenous Peoples’ Forest Tenure',
              id: 'solution-indigenous-peoples-forest-tenure',
            },
            {
              type: 'doc',
              label: 'Nutrient Management',
              id: 'solution-nutrient-management',
            },
            {
              type: 'doc',
              label: 'Peatland Protection and Rewetting',
              id: 'solution-peatland-protection-and-rewetting',
            },
            {
              type: 'doc',
              label: 'Plant-Rich Diets',
              id: 'solution-plant-rich-diets',
            },
            {
              type: 'doc',
              label: 'Reduced Food Waste',
              id: 'solution-reduced-food-waste',
            },
            {
              type: 'doc',
              label: 'Regenerative Annual Cropping',
              id: 'solution-regenerative-annual-cropping',
            },
            {
              type: 'doc',
              label: 'Seafloor Protection',
              id: 'solution-seafloor-protection',
            },
            {
              type: 'doc',
              label: 'Sustainable Intensification for Smallholders',
              id: 'solution-sustainable-intensification-for-smallholders',
            },
            {
              type: 'doc',
              label: 'System of Rice Intensification',
              id: 'solution-system-of-rice-intensification',
            }            
          ]
        },
        {
          type: 'category',
          label: 'Industry',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-industry',
            },
            {
              type: 'doc',
              label: 'Recycled Plastics',
              id: 'solution-recycled-plastics',
            },
            {
              type: 'doc',
              label: 'Composting',
              id: 'solution-composting',
            },
            {
              type: 'doc',
              label: 'Bioplastics',
              id: 'solution-bioplastics',
            },
            {
              type: 'doc',
              label: 'Recycled Paper',
              id: 'solution-recycled-paper',
            },
            {
              type: 'doc',
              label: 'Reduced Plastics',
              id: 'solution-reduced-plastics',
            },
            {
              type: 'doc',
              label: 'Landfill Methane Capture',
              id: 'solution-landfill-methane-capture',
            },
            {
              type: 'doc',
              label: 'Recycled Metals',
              id: 'solution-recycled-metals',
            },
            {
              type: 'doc',
              label: 'Methane Digesters',
              id: 'solution-methane-digesters',
            },
            {
              type: 'doc',
              label: 'Waste to Energy',
              id: 'solution-waste-to-energy',
            },
            {
              type: 'doc',
              label: 'Alternative Cement',
              id: 'solution-alternative-cement',
            },
            {
              type: 'doc',
              label: 'Recycling',
              id: 'solution-recycling',
            },
            {
              type: 'doc',
              label: 'Alternative Refrigerants',
              id: 'solution-alternative-refrigerants',
            },
            {
              type: 'doc',
              label: 'Refrigerant Management',
              id: 'solution-refrigerant-management',
            }
            
          ]
        },
        {
          type: 'category',
          label: 'Transportation',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-transportation',
            },
            {
              type: 'doc',
              label: 'Bicycle Infrastructure',
              id: 'solution-bicycle-infrastructure',
            },
            {
              type: 'doc',
              label: 'Efficient Aviation',
              id: 'solution-efficient-aviation',
            },
            {
              type: 'doc',
              label: 'Efficient Ocean Shipping',
              id: 'solution-efficient-ocean-shipping',
            },
            {
              type: 'doc',
              label: 'Efficient Trucks',
              id: 'solution-efficient-trucks',
            },
            {
              type: 'doc',
              label: 'Electric Bicycles',
              id: 'solution-electric-bicycles',
            },
            {
              type: 'doc',
              label: 'Electric Cars',
              id: 'solution-electric-cars',
            },
            {
              type: 'doc',
              label: 'Electric Trains',
              id: 'solution-electric-trains',
            },
            {
              type: 'doc',
              label: 'High-Speed Rail',
              id: 'solution-high-speed-rail',
            },
            {
              type: 'doc',
              label: 'Hybrid Cars',
              id: 'solution-hybrid-cars',
            },
            {
              type: 'doc',
              label: 'Public Transit',
              id: 'solution-public-transit',
            },
            {
              type: 'doc',
              label: 'Telepresence',
              id: 'solution-telepresence',
            },
            {
              type: 'doc',
              label: 'Walkable Cities',
              id: 'solution-walkable-cities',
            },
            {
              type: 'doc',
              label: 'Carpooling',
              id: 'solution-carpooling',
            }            
          ]
        },
        {
          type: 'category',
          label: 'Buildings',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-buildings',
            },
            {
              type: 'doc',
              label: 'Alternative Refrigerants',
              id: 'solution-alternative-refrigerants',
            },
            {
              type: 'doc',
              label: 'Biogas for Cooking',
              id: 'solution-biogas-for-cooking',
            },
            {
              type: 'doc',
              label: 'Building Automation Systems',
              id: 'solution-building-automation-systems',
            },
            {
              type: 'doc',
              label: 'Building Retrofitting',
              id: 'solution-building-retrofitting',
            },
            {
              type: 'doc',
              label: 'Clean Cooking',
              id: 'solution-clean-cooking',
            },
            {
              type: 'doc',
              label: 'District Heating',
              id: 'solution-district-heating',
            },
            {
              type: 'doc',
              label: 'Dynamic Glass',
              id: 'solution-dynamic-glass',
            },
            {
              type: 'doc',
              label: 'Green and Cool Roofs',
              id: 'solution-green-and-cool-roofs',
            },
            {
              type: 'doc',
              label: 'High-Efficiency Heat Pumps',
              id: 'solution-high-efficiency-heat-pumps',
            },
            {
              type: 'doc',
              label: 'High-Performance Glass',
              id: 'solution-high-performance-glass',
            },
            {
              type: 'doc',
              label: 'Insulation',
              id: 'solution-insulation',
            },
            {
              type: 'doc',
              label: 'Low-Flow Fixtures',
              id: 'solution-low-flow-fixtures',
            },
            {
              type: 'doc',
              label: 'Net Zero Buildings',
              id: 'solution-net-zero-buildings',
            },
            {
              type: 'doc',
              label: 'Refrigerant Management',
              id: 'solution-refrigerant-management',
            },
            {
              type: 'doc',
              label: 'Smart Thermostats',
              id: 'solution-smart-thermostats',
            },
            {
              type: 'doc',
              label: 'Solar Hot Water',
              id: 'solution-solar-hot-water',
            }            
          ]
        },
        {
          type: 'category',
          label: 'Land Sinks',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-land-sinks',
            },
            {
              type: 'doc',
              label: 'Abandoned Farmland Restoration',
              id: 'solution-abandoned-farmland-restoration',
            },
            {
              type: 'doc',
              label: 'Bamboo Production',
              id: 'solution-bamboo-production',
            },
            {
              type: 'doc',
              label: 'Conservation Agriculture',
              id: 'solution-conservation-agriculture',
            },
            {
              type: 'doc',
              label: 'Forest Protection',
              id: 'solution-forest-protection',
            },
            {
              type: 'doc',
              label: 'Grassland Protection',
              id: 'solution-grassland-protection',
            },
            {
              type: 'doc',
              label: 'Improved Rice Production',
              id: 'solution-improved-rice-production',
            },
            {
              type: 'doc',
              label: "Indigenous Peoples' Forest Tenure",
              id: 'solution-indigenous-peoples-forest-tenure',
            },
            {
              type: 'doc',
              label: 'Managed Grazing',
              id: 'solution-managed-grazing',
            },
            {
              type: 'doc',
              label: 'Multistrata Agroforestry',
              id: 'solution-multistrata-agroforestry',
            },
            {
              type: 'doc',
              label: 'Peatland Protection and Rewetting',
              id: 'solution-peatland-protection-and-rewetting',
            },
            {
              type: 'doc',
              label: 'Perennial Biomass Production',
              id: 'solution-perennial-biomass-production',
            },
            {
              type: 'doc',
              label: 'Perennial Staple Crops',
              id: 'solution-perennial-staple-crops',
            },
            {
              type: 'doc',
              label: 'Plant-Rich Diets',
              id: 'solution-plant-rich-diets',
            },
            {
              type: 'doc',
              label: 'Reduced Food Waste',
              id: 'solution-reduced-food-waste',
            },
            {
              type: 'doc',
              label: 'Regenerative Annual Cropping',
              id: 'solution-regenerative-annual-cropping',
            },
            {
              type: 'doc',
              label: 'Silvopasture',
              id: 'solution-silvopasture',
            },
            {
              type: 'doc',
              label: 'Sustainable Intensification for Smallholders',
              id: 'solution-sustainable-intensification-for-smallholders',
            },
            {
              type: 'doc',
              label: 'System of Rice Intensification',
              id: 'solution-system-of-rice-intensification',
            },
            {
              type: 'doc',
              label: 'Temperate Forest Restoration',
              id: 'solution-temperate-forest-restoration',
            },
            {
              type: 'doc',
              label: 'Tree Intercropping',
              id: 'solution-tree-intercropping',
            },
            {
              type: 'doc',
              label: 'Tree Plantations (on Degraded Land)',
              id: 'solution-tree-plantations-on-degraded-land',
            },
            {
              type: 'doc',
              label: 'Tropical Forest Restoration',
              id: 'solution-tropical-forest-restoration',
            }            
          ]
        },
        {
          type: 'category',
          label: 'Coastal and Ocean Sinks',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-coastal-and-ocean-sinks',
            },
            {
              type: 'doc',
              label: 'Coastal Wetland Protection',
              id: 'solution-coastal-wetland-protection',
            },
            {
              type: 'doc',
              label: 'Coastal Wetland Restoration',
              id: 'solution-coastal-wetland-restoration',
            },
            {
              type: 'doc',
              label: 'Improved Fisheries',
              id: 'solution-improved-fisheries',
            },
            {
              type: 'doc',
              label: 'Macroalgae Protection and Restoration',
              id: 'solution-macroalgae-protection-and-restoration',
            },
            {
              type: 'doc',
              label: 'Seaweed Farming',
              id: 'solution-seaweed-farming',
            }            
          ]
        },
        {
          type: 'category',
          label: 'Engineered Sinks',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-engineered-sinks',
            },
            {
              type: 'doc',
              label: 'Biochar Production',
              id: 'solution-biochar-production',
            }            
          ]
        },
        {
          type: 'category',
          label: 'Health and Education',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-health-and-education',
            },

          ]
        },
        {
          type: 'category',
          label: 'Climate Adaptation',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-climate-adaptation',
            },
            {
              type: 'doc',
              label: 'New York City - Climate Adaptation',
              id: 'climate-adaptation-new-york-city',
            }            
          ]
        },
        {
          type: 'category',
          label: 'Media and Journalism',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-media-and-journalism',
            },
          ]
        },
        {
          type: 'category',
          label: 'Advocacy or Policy',
          items: [
            {
              type: 'doc',
              label: 'Sector Overview',
              id: 'sector-advocacy-or-policy',
            },
          ]
        },
      ],
    },
    {
      type: 'doc',
      label: '🌍 Resources',
      id: 'resources',
    },
    {
      type: 'link',
      label: '🗞️ Blog',
      href: '/blog',
    },
    {
      type: 'doc',
      label: '🔥 Contribute',
      id: 'contribute',
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
