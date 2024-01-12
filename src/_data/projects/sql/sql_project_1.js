// Imports
// import DefDashboardImg1 from "@assets/images/projects/default_dashboard/dashboard_img_1.png";
// import DefDashboardImg2 from "@assets/images/projects/default_dashboard/dashboard_img_2.png";

// Excel data base
const sql_project_1 = {
  id: 3,
  name: "Air Bnb project",
  category: "sql",
  type: "Client",
  // project_img: DefDashboardImg1,
  // dashboard_img: DefDashboardImg2,

  story: [
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
    {
      story_nav: "Data Exploration",
      story_info: [
        {
          text: "2.1 Overview of the Dataset",
          style: ["__header_2 __color_accent"],
        },
        {
          text: "The dataset comprises a total of 1026 records, each representing a unique individual. The key variables and their types are as follows:",
          style: ["__text"],
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
          style: ["__text __mb_0 __para __list_style_circle"],
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
    {
      story_nav: "Insight",
      story_info: [
        {
          text: "Insight: Through Data",
          style: ["__header_1 __color_accent"],
        },
        {
          text: "In a rapidly evolving business landscape, data has become a priceless asset, offering a wealth of information waiting to be tapped. The power of data analytics lies in its ability to transform raw data into actionable insights, empowering businesses to make informed decisions, optimize processes, and drive growth. ",
          style: ["__text"],
        },
        {
          text: "Welcome to our data analytics project, where we embark on a journey of discovery and analysis. In this endeavor, we harness the potential of data to uncover hidden patterns, trends, and opportunities. By leveraging state-of-the-art techniques and tools, we aim to answer critical questions, solve complex problems, and gain a competitive edge in the modern data-driven world.",
          style: ["__text"],
        },
        {
          text: "This project represents a commitment to excellence in data analysis. We'll explore various aspects of data, from data collection and cleaning to advanced predictive modeling and visualization. Through rigorous analysis and interpretation, we'll bring clarity to the chaos of information, making it easier for you to chart a course toward success. ",
          style: ["__text"],
        },
        {
          text: "Together, we will navigate the vast data landscape, transforming numbers and statistics into actionable strategies. Our goal is to provide you with valuable insights that inform your decision-making process, driving your business forward. Join us as we explore the power of data analytics and embrace a future where data is not just a resource but a catalyst for growth and innovation.",
          style: ["__text"],
        },
        {
          text: "Let's begin the journey of unlocking insights through data analytics.",
          style: ["__text"],
        },
      ],
    },
  ],
};

export default sql_project_1;
