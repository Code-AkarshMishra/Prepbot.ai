import { useState, useEffect } from 'react';

// --- NEW BADGE LOGIC ---
// Aapke diye gaye badge names
const BADGE_TIERS = [
  "Bronze", "Silver", "Gold", "Platinum", "Diamond", 
  "Crown", "Ace", "Master", "Dominator"
];
// Har 5 level par naya badge
const LEVELS_PER_BADGE = 5; 
const XP_PER_LEVEL = 500; // 500 XP = 1 Level

// Yeh humara default data structure hai
const defaultUserData = {
  overall: { xp: 0, level: 1, title: "Beginner" },
  courses: {
    "9th": { xp: 0, level: 1, badges: [] },
    "10th": { xp: 0, level: 1, badges: [] },
    "11th": { xp: 0, level: 1, badges: [] },
    "12th": { xp: 0, level: 1, badges: [] },
    "jee": { xp: 0, level: 1, badges: [] },
    "neet": { xp: 0, level: 1, badges: [] },
    "gate": { xp: 0, level: 1, badges: [] },
    "tech": { xp: 0, level: 1, badges: [] },
  }
};

export const useUserData = () => {
  const [userData, setUserData] = useState(defaultUserData);

  // Jab component load ho, localStorage se data fetch karo
  useEffect(() => {
    const storedData = localStorage.getItem('prepBotUserData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      localStorage.setItem('prepBotUserData', JSON.stringify(defaultUserData));
    }
  }, []);

  const saveData = (newData) => {
    localStorage.setItem('prepBotUserData', JSON.stringify(newData));
    setUserData(newData);
  };

  // --- UPDATED XP FUNCTION ---
  const addXp = (courseId, amount) => {
    const newData = { ...userData };
    
    // Overall XP/Level update karo
    newData.overall.xp += amount;
    newData.overall.level = Math.floor(newData.overall.xp / XP_PER_LEVEL) + 1;

    // Course-specific XP/Level update karo
    if (newData.courses[courseId]) {
      const course = newData.courses[courseId];
      course.xp += amount;
      const newLevel = Math.floor(course.xp / XP_PER_LEVEL) + 1;
      
      // Agar level badha hai toh check karo
      if (newLevel > course.level) {
        course.level = newLevel;
        
        // Naya Badge Check Karo
        // Example: Level 10 unlock hua (10 / 5 = 2). 
        // Badge array index 1 (Silver) tak ke saare badge mil jayenge.
        const badgeIndex = Math.floor(newLevel / LEVELS_PER_BADGE);
        
        if (badgeIndex > 0) {
          // Naye badge ka naam
          const newBadge = BADGE_TIERS[badgeIndex - 1]; // index 0 se start hota hai
          
          // Agar yeh badge pehle se nahi hai toh add karo
          if (newBadge && !course.badges.includes(newBadge)) {
            // Hum pichhle saare badges bhi add kar dete hain (just in case)
            course.badges = BADGE_TIERS.slice(0, badgeIndex);
          }
        }
      }
    }
    
    saveData(newData);
  };

  return { userData, addXp };
};