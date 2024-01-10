// Imports
import BikeSalesImg from "@assets/images/projects/excel/ex_bike_sales_img.png";
/*

*/

// Excel data base
const ex_project_1_bike_sales = {
  id: 1,
  name: "Bike sales",
  project_img: BikeSalesImg,
  category: "excel",
  type: "Personal",
  // dashboard_img: TableauCovidImg,
  iframe_height: "600",
  iframe_width: "100%",
  iframe_url:
    "https://onedrive.live.com/view?id=82C5119070277DD2!319&resid=82C5119070277DD2!319&authkey=!AJuUvQdG2rtVBec&wdo=2&cid=82c5119070277dd2",
  iframe_src:
    "https://onedrive.live.com/embed?resid=82C5119070277DD2%21319&authkey=%21AJuUvQdG2rtVBec&em=2&AllowTyping=True&ActiveCell='Dashboard'!A1&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True",

  story: [
    // Introduction
    {
      story_nav: "Introduction",
      story_info: [
        {
          text: "Exploring the Dynamics of Bike Purchases",
          style: ["__header __color_accent"],
        },
        {
          text: "In the bustling realm of consumer choices, the decision to purchase a bicycle is influenced by a myriad of factors that extend beyond mere personal preference. In a quest to decode the intricate tapestry of consumer behavior, we delve into a comprehensive dataset encompassing diverse demographic attributes. The dataset, replete with information on marital status, gender, income, children, education, occupation, commute distance, region, and age, presents an invaluable opportunity to discern patterns and draw insights into the factors that sway an individual towards acquiring a bike.",
          style: ["__text"],
        },
        {
          text: "This project embarks on an analytical journey to uncover the nuanced relationships between these demographic variables and the pivotal decision of purchasing a bike. By scrutinizing the dataset with a keen eye for correlations, we aim to discern the factors that play a significant role in influencing a person's choice to embrace the world of biking.",
          style: ["__text"],
        },
        {
          text: "As we navigate through the sea of data, our goal is to not only identify key trends but also to shed light on the underlying motivations that drive individuals to invest in a bicycle. Whether it's the allure of an active lifestyle, the practical considerations of commuting, or the influence of socioeconomic factors, our analysis aims to unravel the intricate web of connections that characterize the decision-making process leading to a bike purchase.",
          style: ["__text"],
        },
        {
          text: "Join us on this exploratory voyage as we sift through the data, decode the subtleties, and illuminate the factors that shape the path towards embracing two-wheeled adventures. The insights gleaned from this analysis promise not only to inform marketing strategies but also to contribute to a deeper understanding of the intricate dance between demographics and consumer choices in the realm of cycling.",
          style: ["__text"],
        },
      ],
    },

    // Data exploration
    {
      story_nav: "Data Exploration",
      story_info: [
        {
          text: "2.1 Overview of the Dataset",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "The dataset comprises a total of 1026 records, each representing a unique individual. The key variables and their types are as follows:",
          style: ["__text __text_short"],
        },
        {
          text: [
            "Marital Status: Categorical",
            "Gender: Categorical",
            "Income: Continuous",
            "Children: Categorical",
            "Education: Categorical",
            "Occupation: Categorical",
            "Commute Distance: Categorical",
            "Region: Categorical",
            "Age: Continuous",
            "Purchased Bike: Categorical (Target Variable)",
          ],
          style: ["__text  __para __list_style_circle"],
          type: "list",
        },
        {
          text: "2.2 Initial Observations",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Income Disparities by Gender:",
          style: ["__header_3 __para"],
        },
        {
          text: "Initial observations reveal a notable difference in average income between males and females. On average, males exhibit a higher income, with an average income of $60,124, compared to females with an average income of $55,774. This insight prompts further investigation into potential factors contributing to this gender-based income gap.",
          style: ["__text __para_2"],
        },
        {
          text: "Commute Distance and Bike Purchases:",
          style: ["__header_3 __para"],
        },
        {
          text: "There is a discernible trend indicating that as commute distance increases, the likelihood of individuals purchasing a bike decreases. This suggests a potential inverse relationship between commute distance and the propensity to buy a bike. Further analysis is warranted to explore the dynamics of this relationship and its implications.",
          style: ["__text __para_2"],
        },
        {
          text: "Age-Related Patterns:",
          style: ["__header_3 __para"],
        },
        {
          text: "Analysis of age groups highlights distinct preferences for bike purchases. The middle-age demographic emerges as the primary group inclined towards acquiring bikes, followed by the older age group. Conversely, adolescents appear to exhibit lower interest in bike purchases. Understanding the preferences of different age segments can inform targeted marketing strategies and product positioning.",
          style: ["__text __para_2"],
        },
        {
          text: "2.3 Data Quality and Preprocessing",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "As part of the data exploration process, steps were taken to ensure data quality and accuracy. Any missing or inconsistent values were addressed through appropriate data cleaning procedures.",
          style: ["__text __para_2"],
        },
      ],
    },

    // Descriptive statistics
    {
      story_nav: "Descriptive Statistics",
      story_info: [
        {
          text: "3.1 Summary Statistics:",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "The following summary statistics provide a snapshot of key variables in the dataset:",
          style: ["__text __text_short __para"],
        },
        {
          text: "Income:",
          style: ["__header_3 __para_2"],
        },
        {
          text: [
            "Mean Income (Overall): $58,849",
            "Mean Income (Females): $55,774",
            "Mean Income (Males): $60,124",
            "Median Income: $57,000",
            "Standard Deviation: $19,236",
          ],
          style: ["__text  __para_3"],
          type: "list",
        },
        {
          text: "Commute Distance:",
          style: ["__header_3 __para_2"],
        },
        {
          text: [
            "Mean Commute Distance: Moderate",
            "Median Commute Distance: Short",
          ],
          style: ["__text  __para_3"],
          type: "list",
        },
      ],
    },

    // Key Findings
    {
      story_nav: "Key Findings",
      story_info: [
        {
          text: "4.1 Income Disparities",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "Males exhibit a higher average income ($60,124) compared to females ($55,774).",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: " Income disparities may play a role in influencing purchasing behavior, and targeted marketing strategies may need to consider gender-specific income dynamics.",
          style: "__text __text_short __para_2",
        },

        // 2
        {
          text: "4.2 Commute Distance Dynamics:",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "There is an inverse relationship between commute distance and bike purchases.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Individuals with shorter commutes are more inclined to purchase bikes, suggesting a potential market for urban or short-distance commuting bicycles.",
          style: "__text __text_short __para_2",
        },

        // 3
        {
          text: "4.3 Age-Related Preferences",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "Middle-aged individuals are the primary demographic for bike purchases, followed by older adults.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Tailoring marketing efforts to the preferences and lifestyle of middle-aged and older demographics may prove more effective in promoting bike sales.",
          style: "__text __text_short __para_2",
        },

        // 4
        {
          text: "4.4 Marital Status Impact",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: " Marital status does influence bike purchases, with variations observed across categories.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Targeted campaigns may be designed based on marital status, recognizing differing preferences and needs among singles, married individuals, and those with children.settings",
          style: "__text __text_short __para_2",
        },

        // 5
        {
          text: "4.5 Gender-Specific Trends",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "Males are more likely to purchase bikes than females, with a notable income difference.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Crafting marketing messages that resonate with each gender and addressing income-related disparities could enhance outreach and appeal to a broader customer base.",
          style: "__text __text_short __para_2",
        },

        // 6
        {
          text: "4.6 Regional Variances",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "Regional differences impact bike purchasing behavior.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Tailoring promotional activities to specific regions, considering cultural and geographical nuances, may optimize marketing strategies.",
          style: "__text __text_short __para_2",
        },

        // 7
        {
          text: "4.7 Educational Influence:",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "Education levels correlate with bike purchases, indicating potential preferences among different educational groups.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Educational background should be factored into marketing approaches to align with the preferences of distinct educational segments.",
          style: "__text __text_short __para_2",
        },

        // 8
        {
          text: "4.8 Occupation and Bike Preferences",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "Occupation plays a role in bike purchasing decisions.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Understanding the preferences of different occupational groups can inform targeted marketing efforts and product positioning.",
          style: "__text __text_short __para_2",
        },

        // 9
        {
          text: "4.9 Holistic Consumer Profile",
          style: "__header_2 __color_accent",
        },
        {
          text: "Observation:",
          style: "__header_3 __para",
        },
        {
          text: "The ideal bike consumer profile emerges as a middle-aged, urban individual with a shorter commute, potentially male, with a moderate to high income.",
          style: "__text __text_short __para_2",
        },
        {
          text: "Implication:",
          style: "__header_3 __para",
        },
        {
          text: "Combining these insights can guide the development of a comprehensive marketing strategy that resonates with the target demographic.",
          style: "__text __text_short __para_2",
        },
      ],
    },

    // Recommendations
    {
      story_nav: "Recommendations",
      story_info: [],
    },

    // Limitations 8
    {
      story_nav: "Limitations",
      story_info: [],
    },

    // Conclusion 9
    {
      story_nav: "Conclusion",
      story_info: [],
    }
  ],
};

export default ex_project_1_bike_sales;
