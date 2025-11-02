// --- Helper Function ---
// Yeh function chapter names ki list lega aur video/note objects bana dega
const createCourseContent = (chapters, subjectKey, useWorkingVideos = false) => {
  const workingVideos = [
    { id: "vid_phy_1", title: "Force and Laws of Motion", youtubeId: "uOz2jyshMO8" },
    { id: "vid_phy_2", title: "Work and Energy", youtubeId: "bGFE2Z-VVM8" },
    { id: "vid_phy_3", title: "Sound", youtubeId: "UpXKKEbCByA" }
  ];

  let videos;
  if (useWorkingVideos) {
    // Asli, working videos ko pehle rakho
    videos = [
      ...workingVideos,
      ...chapters.slice(0, 12).map((chapter, index) => ({ // Baaki 12 dummy videos
        id: `vid_${subjectKey}_${index + 4}`,
        title: chapter,
        youtubeId: 'dummy_video_id' // Placeholder
      }))
    ];
  } else {
    // Sirf dummy videos
    videos = chapters.map((chapter, index) => ({
      id: `vid_${subjectKey}_${index + 1}`,
      title: chapter,
      youtubeId: 'dummy_video_id' // Placeholder
    }));
  }
  
  const notes = chapters.map((chapter, index) => ({
    id: `note_${subjectKey}_${index + 1}`,
    title: `${chapter} Notes`,
    content: `This is the detailed note content for ${chapter}.`,
    pdfPath: '/pdfs/dummy.pdf' // --- NAYA ADDITION ---
  }));

  // Dummy quiz/test data
  const quiz = [
    { q: `What is ${chapters[0]}?`, options: ["A", "B", "C", "D"], answer: "A" },
    { q: `Explain ${chapters[1]}?`, options: ["A", "B", "C", "D"], answer: "B" }
  ];
  const test = [
    { q: `Final test on ${subjectKey}`, options: ["X", "Y", "Z"], answer: "Z" }
  ];

  return { videos, notes, quiz, test };
};

// --- Syllabi (Google Search se) ---
const class9PhysicsChapters = ["Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound", "Floatation", "Units and Measurements", "Kinematics", "Waves", "Thermodynamics"];
const class9ChemChapters = ["Matter in Our Surroundings", "Is Matter Around Us Pure", "Atoms and Molecules", "Structure of the Atom", "Chemical Reactions", "Periodic Classification"];
const class9MathsChapters = ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables", "Euclid's Geometry", "Lines and Angles", "Triangles", "Quadrilaterals", "Circles", "Heron's Formula", "Surface Areas and Volumes", "Statistics", "Probability"];
const class9EngChapters = ["The Fun They Had", "The Sound of Music", "The Little Girl", "A Truly Beautiful Mind", "A Photograph (Poem)", "The Voice of the Rain (Poem)", "Childhood (Poem)"];

const class10ScienceChapters = ["Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-metals", "Carbon and Its Compounds", "Life Processes", "Control and Coordination", "How Do Organisms Reproduce?", "Heredity and Evolution", "Light – Reflection and Refraction", "The Human Eye", "Electricity", "Magnetic Effects of Electric Current", "Our Environment"];
const class10MathsChapters = ["Real Numbers", "Polynomials", "Pair of Linear Equations", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Applications of Trigonometry", "Circles", "Constructions", "Areas Related to Circles", "Surface Areas and Volumes", "Statistics", "Probability"];
const class10SSTChapters = ["The Rise of Nationalism in Europe", "Nationalism in India", "Resources and Development", "Water Resources", "Agriculture", "Power Sharing", "Federalism", "Democracy and Diversity", "Development", "Sectors of the Indian Economy", "Money and Credit"];
const class10HindiChapters = ["Surdas ke Pad", "Tulsidas - Ram-Lakshman-Parashuram Samvad", "Netaji ka Chashma", "Bal Gobin Bhagat", "Lakhnavi Andaaz", "Mata ka Aanchal", "Kritika", "Sanchayan"];
const class10EngChapters = ["A Letter to God", "Nelson Mandela: Long Walk to Freedom", "Two Stories About Flying", "From the Diary of Anne Frank", "Glimpses of India", "Madam Rides the Bus", "Dust of Snow (Poem)", "Fire and Ice (Poem)", "A Tiger in the Zoo (Poem)"];

const class11PhysicsChapters = ["Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "System of Particles (Rotational Motion)", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"];
const class11ChemChapters = ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "The s-Block Elements", "The p-Block Elements", "Organic Chemistry - Basic Principles", "Hydrocarbons", "Environmental Chemistry"];
const class11MathsChapters = ["Sets", "Relations and Functions", "Trigonometric Functions", "Principle of Mathematical Induction", "Complex Numbers", "Linear Inequalities", "Permutations and Combinations", "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections", "Introduction to 3D Geometry", "Limits and Derivatives", "Statistics", "Probability"];
const class11EngChapters = ["The Portrait of a Lady", "We're Not Afraid to Die...", "Discovering Tut", "The Ailing Planet", "A Photograph (Poem)", "The Voice of the Rain (Poem)", "Childhood (Poem)"];

const class12PhysicsChapters = ["Electric Charges and Fields", "Electrostatic Potential", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics", "Wave Optics", "Dual Nature of Radiation", "Atoms", "Nuclei", "Semiconductor Electronics"];
const class12ChemChapters = ["The Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "p-Block Elements", "d- and f-Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones", "Amines", "Biomolecules", "Polymers"];
const class12MathsChapters = ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Continuity and Differentiability", "Application of Derivatives", "Integrals", "Application of Integrals", "Differential Equations", "Vector Algebra", "Three Dimensional Geometry", "Linear Programming", "Probability"];

const jeePhysicsTopics = ["Kinematics", "Laws of Motion", "Work, Energy & Power", "Rotational Motion", "Gravitation", "Properties of Solids & Liquids", "Thermodynamics", "Electrostatics", "Current Electricity", "Magnetic Effects of Current", "Electromagnetic Induction & AC", "Optics", "Modern Physics", "Semiconductors"];
const jeeChemTopics = ["Basic Concepts (Mole)", "Atomic Structure", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox & Electrochemistry", "Chemical Kinetics", "s-Block, p-Block, d-Block", "Coordination Compounds", "GOC", "Hydrocarbons", "Alcohols, Phenols, Ethers", "Aldehydes & Ketones", "Amines", "Biomolecules"];
const jeeMathsTopics = ["Sets, Relations & Functions", "Complex Numbers", "Quadratic Equations", "Matrices & Determinants", "Permutations & Combinations", "Binomial Theorem", "Sequences & Series", "Limits, Continuity & Differentiability", "Integral Calculus", "Differential Equations", "Coordinate Geometry (Straight Lines, Circles)", "Conic Sections", "Vector Algebra", "3D Geometry", "Probability & Statistics", "Trigonometry"];

const neetBiologyTopics = ["Diversity in Living World", "Structural Organisation", "Cell Structure and Function", "Plant Physiology", "Human Physiology", "Reproduction", "Genetics and Evolution", "Biology and Human Welfare", "Biotechnology", "Ecology and Environment"];

const gateCSTopics = ["Digital Logic", "Computer Organization & Architecture", "Programming & Data Structures", "Algorithms", "Theory of Computation", "Compiler Design", "Operating System", "Databases (DBMS)", "Computer Networks", "Engineering Mathematics"];
const gateMechTopics = ["Engineering Mechanics", "Mechanics of Materials", "Theory of Machines", "Vibrations", "Machine Design", "Fluid Mechanics", "Heat-Transfer", "Thermodynamics", "Manufacturing", "Industrial Engineering"];
const gateCivilTopics = ["Engineering Mechanics", "Solid Mechanics", "Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics", "Water Resources Engineering", "Environmental Engineering", "Transportation Engineering", "Surveying"];
const gateEETopics = ["Electric Circuits", "Electromagnetic Fields", "Signals and Systems", "Electrical Machines", "Power Systems", "Control Systems", "Electrical Measurements", "Analog and Digital Electronics", "Power Electronics"];
const gateECETopics = ["Networks, Signals and Systems", "Electronic Devices", "Analog Circuits", "Digital Circuits", "Control Systems", "Communications", "Electromagnetics"];
const gateChemEngTopics = ["Process Calculations", "Thermodynamics", "Fluid Mechanics", "Heat Transfer", "Mass Transfer", "Chemical Reaction Engineering", "Process Control", "Plant Design", "Chemical Technology"];

const techCppTopics = ["Basics: Syntax, Variables, I/O", "Data Types & Operators", "Control Flow: if, else, switch", "Loops: for, while, do-while", "Functions", "Arrays and Strings", "Pointers and References", "Object-Oriented Programming (OOP)", "Classes and Objects", "Constructors and Destructors", "Inheritance", "Polymorphism (Virtual Functions)", "STL: Vectors, Maps", "File Handling"];
const techJavaTopics = ["Introduction to Java", "Data Types, Variables, Operators", "Control Flow: if, else, switch", "Loops: for, while, do-while", "Methods (Functions)", "Object-Oriented Programming (OOP)", "Classes and Objects", "Constructors", "Inheritance", "Polymorphism & Abstraction", "Exception Handling", "Java Collections Framework", "Threads (Multithreading)", "File I/O"];
const techJSTopics = ["JavaScript Basics: Variables, Data Types", "Operators", "Functions", "Control Flow (if, else, loops)", "DOM Manipulation", "Events", "ES6+ Features (Arrow Functions, let/const)", "Asynchronous JS: Callbacks, Promises", "Async/Await", "Fetch API / AJAX", "OOP in JS (Prototypes/Classes)"];
const techPythonTopics = ["Python Basics: Syntax, Variables, I/O", "Data Types: Numbers, Strings", "Data Structures: Lists, Tuples, Dictionaries", "Operators", "Control Flow: if, elif, else", "Loops: for, while", "Functions", "Modules and Packages", "File Handling", "Exception Handling", "Object-Oriented Programming (OOP)", "Intro to Libraries (Numpy/Pandas)"];
const techWebDevTopics = ["HTML5: Structure and Semantics", "CSS3: Box Model, Flexbox, Grid", "Responsive Design (Media Queries)", "JavaScript Basics & DOM", "Async JS & APIs", "Version Control (Git)", "Node.js & Express.js (Backend)", "Databases (MongoDB/SQL)", "React.js (Frontend)", "Authentication (JWT)", "Deployment (Netlify/Vercel)"];

// --- Final Data Object ---
export const courseData = {
  "9th": {
    physics: {
      title: "Physics - Class 9",
      ...createCourseContent(class9PhysicsChapters, "9th_phy", true) // TRUE = Use working videos
    },
    chemistry: {
      title: "Chemistry - Class 9",
      ...createCourseContent(class9ChemChapters, "9th_chem")
    },
    maths: {
      title: "Maths - Class 9",
      ...createCourseContent(class9MathsChapters, "9th_maths")
    },
    english: {
      title: "English - Class 9",
      ...createCourseContent(class9EngChapters, "9th_eng")
    }
  },
  "10th": {
    english: {
      title: "English - Class 10",
      ...createCourseContent(class10EngChapters, "10th_eng")
    },
    hindi: {
      title: "Hindi - Class 10",
      ...createCourseContent(class10HindiChapters, "10th_hindi")
    },
    maths: {
      title: "Maths - Class 10",
      ...createCourseContent(class10MathsChapters, "10th_maths")
    },
    'social study': {
      title: "Social Study - Class 10",
      ...createCourseContent(class10SSTChapters, "10th_sst")
    },
    science: {
      title: "Science - Class 10",
      ...createCourseContent(class10ScienceChapters, "10th_science")
    }
  },
  "11th": {
    physics: {
      title: "Physics - Class 11",
      ...createCourseContent(class11PhysicsChapters, "11th_phy", true) // TRUE = Use working videos
    },
    chemistry: {
      title: "Chemistry - Class 11",
      ...createCourseContent(class11ChemChapters, "11th_chem")
    },
    maths: {
      title: "Maths - Class 11",
      ...createCourseContent(class11MathsChapters, "11th_maths")
    },
    english: {
      title: "English - Class 11",
      ...createCourseContent(class11EngChapters, "11th_eng")
    }
  },
  "12th": {
    english: {
      title: "English - Class 12",
      ...createCourseContent(class11EngChapters, "12th_eng") // Reusing 11th Eng for demo
    },
    chemistry: {
      title: "Chemistry - Class 12",
      ...createCourseContent(class12ChemChapters, "12th_chem")
    },
    physics: {
      title: "Physics - Class 12",
      ...createCourseContent(class12PhysicsChapters, "12th_phy")
    },
    maths: {
      title: "Maths - Class 12",
      ...createCourseContent(class12MathsChapters, "12th_maths")
    }
  },
  "jee": {
    physics: {
      title: "JEE Physics",
      ...createCourseContent(jeePhysicsTopics, "jee_phy")
    },
    chemistry: {
      title: "JEE Chemistry",
      ...createCourseContent(jeeChemTopics, "jee_chem")
    },
    maths: {
      title: "JEE Maths",
      ...createCourseContent(jeeMathsTopics, "jee_maths")
    }
  },
  "neet": {
    physics: {
      title: "NEET Physics",
      ...createCourseContent(jeePhysicsTopics, "neet_phy") // Reusing JEE Physics
    },
    chemistry: {
      title: "NEET Chemistry",
      ...createCourseContent(jeeChemTopics, "neet_chem") // Reusing JEE Chem
    },
    biology: {
      title: "NEET Biology",
      ...createCourseContent(neetBiologyTopics, "neet_bio")
    }
  },
  "gate": {
    civil: {
      title: "GATE Civil",
      ...createCourseContent(gateCivilTopics, "gate_civil")
    },
    mechanical: {
      title: "GATE Mechanical",
      ...createCourseContent(gateMechTopics, "gate_mech")
    },
    electrical: {
      title: "GATE Electrical",
      ...createCourseContent(gateEETopics, "gate_ee")
    },
    'computer science': {
      title: "GATE CS",
      ...createCourseContent(gateCSTopics, "gate_cs")
    },
    ece: {
      title: "GATE ECE",
      ...createCourseContent(gateECETopics, "gate_ece")
    },
    chemical: {
      title: "GATE Chemical",
      ...createCourseContent(gateChemEngTopics, "gate_chem")
    }
  },
  "tech": {
    'c++': {
      title: "C++ Programming",
      ...createCourseContent(techCppTopics, "tech_cpp")
    },
    java: {
      title: "Java Programming",
      ...createCourseContent(techJavaTopics, "tech_java")
    },
    javascript: {
      title: "JavaScript",
      ...createCourseContent(techJSTopics, "tech_js")
    },
    python: {
      title: "Python Programming",
      ...createCourseContent(techPythonTopics, "tech_py")
    },
    'web development': {
      title: "Web Development",
      ...createCourseContent(techWebDevTopics, "tech_web")
    }
  }
};
