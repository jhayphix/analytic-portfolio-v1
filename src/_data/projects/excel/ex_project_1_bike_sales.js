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
      story_info: [
        // 1
        {
          text: "5.1 Targeted Marketing Strategies",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Utilize Gender-Specific Campaigns:",
          style: ["__header_3 __para"],
        },
        {
          text: "Design marketing campaigns that resonate with both genders, addressing income-related disparities and appealing to the unique preferences of male and female consumers.",
          style: ["__text __para_2"],
        },

        // 2
        {
          text: "5.2 Commute-Friendly Products",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Develop Short-Distance Commuting Bicycles:",
          style: ["__header_3 __para"],
        },
        {
          text: "Recognizing the inverse relationship between commute distance and bike purchases, focus on developing and promoting bicycles tailored for short-distance urban commuting.",
          style: ["__text __para_2"],
        },

        // 3
        {
          text: "5.3 Age-Tailored Promotions",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Target Middle-Aged and Older Demographics:",
          style: ["__header_3 __para"],
        },
        {
          text: "Direct marketing efforts towards the middle-aged and older age groups, emphasizing the benefits of biking for health, leisure, and sustainable transportation.",
          style: ["__text __para_2"],
        },

        // 4
        {
          text: "5.4 Marital Status-Centric Approaches",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Segmented Campaigns for Marital Status Categories:",
          style: ["__header_3 __para"],
        },
        {
          text: "Implement segmented campaigns based on marital status, acknowledging the differing preferences and needs of singles, married individuals, and those with children.",
          style: ["__text __para_2"],
        },

        // 5
        {
          text: "5.5 Regional Customization",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Adapt Promotions to Regional Characteristics:",
          style: ["__header_3 __para"],
        },
        {
          text: "Tailor marketing activities to suit regional nuances, considering cultural and geographical differences to enhance resonance with diverse audiences.",
          style: ["__text __para_2"],
        },

        // 6
        {
          text: "5.6 Educational Engagement ",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Leverage Educational Backgrounds in Marketing:",
          style: ["__header_3 __para"],
        },
        {
          text: "Craft marketing messages that align with the preferences and values of different educational groups, promoting the benefits of biking based on varying educational levels.",
          style: ["__text __para_2"],
        },

        // 7
        {
          text: "5.7 Occupation-Targeted Initiatives",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Customize Strategies for Occupational Groups:",
          style: ["__header_3 __para"],
        },
        {
          text: "Develop targeted initiatives catering to the preferences and lifestyles of different occupational segments, recognizing the influence of occupation on bike purchasing decisions.",
          style: ["__text __para_2"],
        },

        // 8
        {
          text: "5.8 Inclusive Advertising",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Promote Inclusivity in Marketing Materials:",
          style: ["__header_3 __para"],
        },
        {
          text: "Ensure that marketing materials represent a diverse range of individuals to appeal to a broader audience, fostering inclusivity and resonating with a diverse consumer base.",
          style: ["__text __para_2"],
        },

        // 9
        {
          text: "5.9 Pricing and Financing Options:",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Explore Flexible Payment Plans:",
          style: ["__header_3 __para"],
        },
        {
          text: "Introduce financing options or flexible payment plans to make bikes more accessible, addressing potential financial barriers for consumers with varying income levels.",
          style: ["__text __para_2"],
        },

        // 10
        {
          text: "5.10 Continuous Monitoring and Adaptation",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Regularly Assess Market Dynamics:",
          style: ["__header_3 __para"],
        },
        {
          text: "Continuously monitor market trends, consumer preferences, and demographic shifts. Adapt marketing strategies accordingly to stay aligned with evolving consumer needs.",
          style: ["__text __para_2"],
        },

        // 11
        {
          text: "5.11 Collaborate with Local Communities",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Engage in Community Collaborations:",
          style: ["__header_3 __para"],
        },
        {
          text: "Foster partnerships with local communities and organizations to strengthen brand presence and engage with potential customers in a meaningful way.",
          style: ["__text __para_2"],
        },
      ],
    },

    // Limitations
    {
      story_nav: "Limitations",
      story_info: [
        // 1
        {
          text: "6.1 Sample Size and Representativeness",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Sample size: ",
          style: ["__header_3 __para"],
        },
        {
          text: "The dataset consists of 1026 records, which may not fully capture the diversity of the population. Findings should be interpreted with consideration for the sample size.",
          style: ["__text __para_2"],
        },

        // 2
        {
          text: "6.2 Data Quality",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Missing Data: ",
          style: ["__header_3 __para"],
        },
        {
          text: "Despite efforts to clean and preprocess the data, there may be instances of missing or incomplete information, potentially impacting the accuracy of certain analyses.",
          style: ["__text __para_2"],
        },

        // 3
        {
          text: "Generalizability",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Limited Generalizability:",
          style: ["__header_3 __para"],
        },
        {
          text: "The findings are based on a specific dataset and may not be entirely generalizable to broader populations or different geographic regions.",
          style: ["__text __para_2"],
        },

        // 4
        {
          text: "6.4 Income Reporting",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Income Precision: ",
          style: ["__header_3 __para"],
        },
        {
          text: "The accuracy of income data relies on self-reporting, and participants may provide rounded or estimated figures, leading to potential inaccuracies.",
          style: ["__text __para_2"],
        },

        // 5
        {
          text: "6.5 Age Grouping",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Age Grouping Simplifications:",
          style: ["__header_3 __para"],
        },
        {
          text: "The categorization of age groups (adolescent, middle age, old) may oversimplify the diversity within each group, potentially masking nuanced age-related patterns.",
          style: ["__text __para_2"],
        },

        // 6
        {
          text: "6.6 Unobserved Variables",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Unobserved Factors: ",
          style: ["__header_3 __para"],
        },
        {
          text: "The dataset may lack certain variables that could contribute to a more comprehensive understanding of bike purchasing behavior, such as personal preferences, lifestyle choices, or cultural influences.",
          style: ["__text __para_2"],
        },

        // 7
        {
          text: "6.7 Correlation vs. Causation",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Correlation Inference:",
          style: ["__header_3 __para"],
        },
        {
          text: "While correlations have been identified, causation cannot be conclusively established. Other unobserved factors may contribute to the relationships observed in the data.",
          style: ["__text __para_2"],
        },

        // 8
        {
          text: "6.8 Time Sensitivity",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Temporal Factors:",
          style: ["__header_3 __para"],
        },
        {
          text: "The dataset is a snapshot at a specific point in time. Changes in consumer preferences, market dynamics, or socioeconomic conditions over time are not accounted for in this analysis.",
          style: ["__text __para_2"],
        },

        // 9
        {
          text: "6.9 External Influences",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "External Factors: ",
          style: ["__header_3 __para"],
        },
        {
          text: "External events or influences, such as economic changes, public health crises, or technological advancements, may have effects on bike purchases that are not captured in the dataset.",
          style: ["__text __para_2"],
        },

        // 10
        {
          text: "6.10 Occupation Complexity",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Occupation Classification: ",
          style: ["__header_3 __para"],
        },
        {
          text: "The categorization of occupations may oversimplify the diverse nature of employment roles, potentially masking variations within occupational groups.",
          style: ["__text __para_2"],
        },

        // 11
        {
          text: "6.11 Self-Reported Data",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Reliance on Self-Reporting:",
          style: ["__header_3 __para"],
        },
        {
          text: "Certain variables, such as education and income, are based on participants' self-reporting, introducing the possibility of reporting biases.",
          style: ["__text __para_2"],
        },

        // 12
        {
          text: "6.12 Limited Context",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Contextual Limitations: ",
          style: ["__header_3 __para"],
        },
        {
          text: "The dataset may lack detailed contextual information that could provide deeper insights into the motivations and decision-making processes of individuals regarding bike purchases.",
          style: ["__text __para_2"],
        },

        // 13
        {
          text: "6.13 Evolving Market Dynamics",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "Market Dynamics:",
          style: ["__header_3 __para"],
        },
        {
          text: "The recommendations are based on current observations, and market dynamics are subject to change. Regular reassessment and adaptation of strategies are crucial in a dynamic market environment.",
          style: ["__text __para_2"],
        },
      ],
    },

    // Conclusion
    {
      story_nav: "Conclusion",
      story_info: [],
    },
  ],
};

export default ex_project_1_bike_sales;
