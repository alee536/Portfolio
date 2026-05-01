window.baseProjectData = {
    visionai: {
        title: 'VisionAI - Real-time Object Detection',
        description: 'Advanced computer vision application with machine learning capabilities',
        image: './Assets/VisionAI-obj.png',
        gallery: ['./Assets/VisionAI-obj.png', './Assets/VisionAI.png'],
        status: 'Completed',
        duration: '3 Months',
        teamSize: '4 Members',
        role: 'Full Stack Developer',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Flask', 'Python', 'YOLO', 'OpenCV'],
        overview: `VisionAI is a cutting-edge web application that leverages YOLO (You Only Look Once) deep learning model 
                  to perform real-time object detection. The application features an intuitive web interface built with 
                  Flask and provides adjustable accuracy rates to suit different use cases. This project demonstrates 
                  the practical implementation of computer vision technology in web applications, making advanced AI 
                  capabilities accessible through a user-friendly interface.`,
        features: [
            { icon: 'fas fa-camera', title: 'Real-time Detection', desc: 'Live object detection from webcam feed' },
            { icon: 'fas fa-sliders-h', title: 'Adjustable Accuracy', desc: 'Customizable detection threshold' },
            { icon: 'fas fa-upload', title: 'Image Upload', desc: 'Process static images' },
            { icon: 'fas fa-mobile-alt', title: 'Responsive Design', desc: 'Works on all devices' }
        ],
        implementation: `
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-lg mb-2">Backend Architecture</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Built with Flask framework providing RESTful API endpoints for image processing and model inference.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>YOLO model integration for object detection</li>
                        <li>OpenCV for image processing</li>
                        <li>Real-time video streaming capabilities</li>
                        <li>Error handling and validation</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-2">Frontend Development</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Modern, responsive interface using HTML5, CSS3, and JavaScript with Tailwind CSS for styling.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Interactive controls for accuracy adjustment</li>
                        <li>Real-time video preview</li>
                        <li>Drag-and-drop file upload</li>
                        <li>Loading states and progress indicators</li>
                    </ul>
                </div>
            </div>
        `,
        github: 'https://github.com/ali0454hassan/VisionAi',
        demo: '#',
        skills: ['HTML', 'CSS', 'Tailwind', 'JS', 'Flask']
    },
    weather: {
        title: 'Weather App - Real-time Weather Forecast',
        description: 'A comprehensive weather application with location search and predictions',
        image: './Assets/weather-app.png',
        gallery: ['./Assets/weather-app.png', './Assets/1723393989632.jpg', './Assets/walling-UP7JSnodG2M-unsplash.jpg'],
        status: 'Completed',
        duration: '2 Months',
        teamSize: '1 Member',
        role: 'Frontend Developer',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API', 'Bootstrap'],
        overview: `A responsive weather application that provides real-time weather information and 5-day forecasts. 
                  Features location search, current conditions, and beautiful weather visualizations. Built with 
                  vanilla JavaScript and integrates with OpenWeatherMap API for accurate weather data.`,
        features: [
            { icon: 'fas fa-search', title: 'Location Search', desc: 'Search weather by city name' },
            { icon: 'fas fa-cloud-sun', title: '5-Day Forecast', desc: 'Extended weather predictions' },
            { icon: 'fas fa-thermometer-half', title: 'Detailed Info', desc: 'Temperature, humidity, wind speed' },
            { icon: 'fas fa-mobile-alt', title: 'Mobile Friendly', desc: 'Responsive design for all devices' }
        ],
        implementation: `
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-lg mb-2">API Integration</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Integrated OpenWeatherMap API for real-time weather data and forecasts.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Current weather conditions</li>
                        <li>5-day weather forecast</li>
                        <li>Geolocation support</li>
                        <li>Error handling for API failures</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-2">User Interface</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Clean, intuitive interface with weather icons and smooth animations.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Weather condition icons</li>
                        <li>Temperature charts</li>
                        <li>Search functionality</li>
                        <li>Loading animations</li>
                    </ul>
                </div>
            </div>
        `,
        github: '#',
        demo: 'https://ali0454hassan.github.io/weather/',
        skills: ['HTML', 'CSS', 'JavaScript', 'API']
    },
    // ali light
    alilight: {
        title: 'Ali Light Decoration',
        description: 'Business website showcasing event lighting services, gallery, and enquiry/booking forms',
        image: './Assets/ali-light h.png',
        gallery: ['./Assets/Ali-light h.png', './Assets/Ali-light-c.png', './Assets/Ali-light-f.png', './Assets/Ali-light-g.png', './Assets/Ali-light-w.png'],
        status: 'Completed',
        duration: '1 Week',
        teamSize: '1 Member',
        role: 'Full Stack Developer',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Django'],
        overview: `A dynamic business website built with Django and Bootstrap to showcase Ali Light Decoration's services, portfolio gallery, and a contact/enquiry flow for bookings. The site focuses on a clear service catalog, visual gallery, and an easy-to-use inquiry form for customers.`,
        features: [
            { icon: 'fas fa-images', title: 'Service Gallery', desc: 'High-quality portfolio of past events and lighting setups' },
            { icon: 'fas fa-calendar-check', title: 'Booking / Enquiry Form', desc: 'Customers can request quotes and schedule services' },
            { icon: 'fas fa-info-circle', title: 'Service Catalog', desc: 'List of services with details and pricing information' },
            { icon: 'fas fa-mobile-alt', title: 'Responsive Design', desc: 'Works well on mobile and desktop devices' }
        ],
        implementation: `
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-lg mb-2">Frontend</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Built with Bootstrap and custom JavaScript for interactive gallery, responsive layouts, and client-side form validation.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Bootstrap templates and components for quick, consistent UI</li>
                        <li>Lazy-loaded gallery images for performance</li>
                        <li>Accessible enquiry and contact forms</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-2">Backend</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Django-based backend managing services, gallery images, and enquiries through the admin interface. Uses a lightweight database (SQLite/Postgres) depending on deployment.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Django models for Services, Galleries, and Enquiries</li>
                        <li>Django Admin for content management</li>
                        <li>Email notifications for new enquiries</li>
                    </ul>
                </div>
            </div>
        `,
        github: '#',
        demo: '#',
        skills: ['HTML', 'CSS', 'Bootstrap', 'Django']
    },


    fitness: {
        title: 'Fitness Tracker - Workout Progress App',
        description: 'A comprehensive fitness tracking application with charts',
        image: './Assets/fitness-app.webp',
        gallery: ['./Assets/fitness-app.webp', './Assets/fitness.gif'],
        status: 'Work in Progress',
        duration: '4 Months',
        teamSize: '2 Members',
        role: 'Full Stack Developer',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Node.js', 'MongoDB'],
        overview: `A comprehensive fitness tracking application that helps users monitor their workout progress, 
                  set goals, and visualize their fitness journey. Features workout logging, progress charts, 
                  and goal tracking with an intuitive dashboard.`,
        features: [
            { icon: 'fas fa-chart-line', title: 'Progress Charts', desc: 'Visual progress tracking' },
            { icon: 'fas fa-dumbbell', title: 'Workout Logging', desc: 'Log exercises and sets' },
            { icon: 'fas fa-target', title: 'Goal Setting', desc: 'Set and track fitness goals' },
            { icon: 'fas fa-calendar', title: 'Workout Calendar', desc: 'Schedule and plan workouts' }
        ],
        implementation: `
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-lg mb-2">Data Visualization</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Interactive charts and graphs for tracking fitness progress over time.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Chart.js for progress visualization</li>
                        <li>Weight tracking graphs</li>
                        <li>Workout frequency charts</li>
                        <li>Goal achievement metrics</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-2">Backend Services</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Node.js backend with MongoDB for data persistence and user management.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>User authentication system</li>
                        <li>Workout data storage</li>
                        <li>Progress calculation algorithms</li>
                        <li>RESTful API endpoints</li>
                    </ul>
                </div>
            </div>
        `,
        github: '#',
        demo: '#',
        skills: ['HTML', 'CSS', 'JavaScript', 'Chart.js']
    },
    ecommerce: {
        title: 'E-commerce Website - Online Store',
        description: 'Full-featured online store with shopping cart',
        image: './Assets/igor-miske-JVSgcV8_vb4-unsplash.jpg',
        gallery: ['./Assets/igor-miske-JVSgcV8_vb4-unsplash.jpg', './Assets/scott-graham-5fNmWej4tAA-unsplash.jpg', './Assets/walling-UP7JSnodG2M-unsplash.jpg'],
        status: 'Work in Progress',
        duration: '6 Months',
        teamSize: '3 Members',
        role: 'Full Stack Developer',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Stripe'],
        overview: `A full-featured e-commerce platform with product catalog, shopping cart, user authentication, 
                  and secure payment processing. Built with React frontend and Node.js backend, featuring 
                  modern design and smooth user experience.`,
        features: [
            { icon: 'fas fa-shopping-cart', title: 'Shopping Cart', desc: 'Add, remove, and manage items' },
            { icon: 'fas fa-credit-card', title: 'Secure Payments', desc: 'Stripe payment integration' },
            { icon: 'fas fa-user', title: 'User Accounts', desc: 'Registration and profile management' },
            { icon: 'fas fa-search', title: 'Product Search', desc: 'Advanced search and filtering' }
        ],
        implementation: `
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-lg mb-2">Frontend Development</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Modern React application with responsive design and smooth user interactions.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>React with hooks for state management</li>
                        <li>Responsive product catalog</li>
                        <li>Shopping cart functionality</li>
                        <li>User authentication forms</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-2">Backend Architecture</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">
                        Robust Node.js backend with MongoDB database and secure payment processing.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>RESTful API with Express.js</li>
                        <li>MongoDB for data storage</li>
                        <li>Stripe payment integration</li>
                        <li>JWT authentication</li>
                    </ul>
                </div>
            </div>
        `,
        github: '#',
        demo: '#',
        skills: ['HTML', 'CSS', 'JavaScript', 'React']
    }
};

window.getStoredProjects = function () {
    try {
        return JSON.parse(localStorage.getItem('portfolio-custom-projects') || '{}');
    } catch (error) {
        return {};
    }
};

window.getAllProjects = function () {
    return {
        ...window.baseProjectData,
        ...window.getStoredProjects()
    };
};

window.saveCustomProject = function (project) {
    const storedProjects = window.getStoredProjects();
    storedProjects[project.id] = project;
    localStorage.setItem('portfolio-custom-projects', JSON.stringify(storedProjects));
    window.projectData = window.getAllProjects();
};

window.deleteCustomProject = function (projectId) {
    const storedProjects = window.getStoredProjects();
    delete storedProjects[projectId];
    localStorage.setItem('portfolio-custom-projects', JSON.stringify(storedProjects));
    window.projectData = window.getAllProjects();
};

window.resetCustomProjects = function () {
    localStorage.removeItem('portfolio-custom-projects');
    window.projectData = window.getAllProjects();
};

window.projectData = window.getAllProjects();