export const SKILLS = [
  {
    title: "Frontend",
    icon: "/assets/images/programmer_11184385.png", // Corrected path
    skills: [
      { skill: "HTML5", percentage: "88%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "95%" }, // Fixed the key name from 'skills' to 'skill'
      { skill: "JavaScript", percentage: "75%" }, // Fixed typo
      { skill: "React.js", percentage: "89%" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/images/html_14661237.png", // Corrected path
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "60%" },
      { skill: "MySQL", percentage: "85%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/setting_6467523.png", // Corrected path
    skills: [
      { skill: "Git & GitHub", percentage: "75%" },
      { skill: "Visual Studio Code", percentage: "85%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "/assets/images/thinking_15543231.png", // Corrected path
    skills: [
      { skill: "Problem Solving", percentage: "88%" },
      { skill: "Collaboration", percentage: "75%" }, // Fixed typo
      { skill: "Attention to Detail", percentage: "88%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Hotoronics Trading App",
    date: "July 2024 - August 2024",
    responsibilities: [
      "E-commerce Platform: Developed a robust platform for selling electronic products with user-friendly navigation and efficient administrative capabilities.", 
      "Admin Management: Enabled comprehensive management of product listings, allowing admins to easily update pricing, descriptions, and images through an intuitive dashboard.",
      "Order Tracking: Enhanced customer experience with an order tracking feature, allowing users to monitor their purchases and receive automated email notifications about order status.",
      "Technology Stack: Utilized React.js for frontend development, Node.js and Express.js for building a RESTful API, and MySQL for data storage, along with Bootstrap for styling."
    ],
  },
  {
    title: "Employee Management System",
    date: "june 2024",
    responsibilities: [
      " CRUD Functionality: The application supports creating, reading, updating, and deleting employee records, enabling full control over employee data management.", 
      "Dynamic Routing: Implemented with React Router DOM, allowing smooth navigation between different sections such as employee lists, forms, and details pages.",
      "User-Friendly Interface: The application is designed to provide a clean and intuitive experience for managing employee data, making it easy to use for administrators.",
      "Batch Processing: Allows users to perform batch updates or deletions, streamlining the management of multiple products simultaneously and improving efficiency."
    ],
  },
  {
    title:"Inventory Shoping Applications",
    date:"Augest  2024",
    responsibilities: [
      " User Authentication: Allows users to register and log in with different roles (admin, staff), ensuring secure access and permissions.", 
      "Product Management: Enables adding, editing, and deleting products, categorizing them, and uploading images for better visual representation.",
      "Stock Tracking: Monitors inventory levels, tracks product movement (inbound and outbound), and sets alerts for low stock to ensure timely replenishment.",
      "Reporting and Analytics: Generates reports on inventory status, sales performance, and product turnover rates, with options to export data in various formats (CSV, PDF).",
    ],    
  },
  {
    title:"Responsive Template Creation",
    date:"May 2019 - August 2019",
    responsibilities: [
      " Responsive Design: Developed a fully responsive web template that adjusts seamlessly across various devices, ensuring an optimal user experience.", 
      "Navbar and Footer: Designed and implemented a functional navigation bar and footer, enhancing site navigation and accessibility.",
      "Container Implementation: Utilized various containers to organize content effectively, improving the layout and readability of the webpage.",
       "Technologies Used: Leveraged HTML, CSS, Bootstrap, and JavaScript to build the template, showcasing proficiency in modern front-end development practices.",
    ],
  },
];
