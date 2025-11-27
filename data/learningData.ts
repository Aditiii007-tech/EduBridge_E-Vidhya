
import { Subject, Doubt } from '../types';

export const mockSubjects: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    icon: 'math', 
    color: 'bg-blue-100 text-blue-700',
    trans: {
      name: 'Ganit'
    },
    chapters: [
      {
        id: 'm1',
        title: '1. Real Numbers',
        trans: {
          title: '1. Vaastavik Sankhyaayein'
        },
        isDownloaded: true,
        isCompleted: true,
        isLocked: false,
        lastStudied: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
        quizScore: 85,
        summary: `
          <p><strong>Euclid’s Division Lemma:</strong> For any two positive integers <em>a</em> and <em>b</em>, there exist unique integers <em>q</em> and <em>r</em> such that:</p>
          <p class="text-center font-mono my-2 bg-slate-100 p-2 rounded">a = bq + r, where 0 ≤ r < b</p>
          <p>This is basically used to find HCF. For example, to find HCF of 45 and 10, we keep dividing until remainder is 0.</p>
          <br/>
          <h4 class="font-bold text-indigo-700">Key Points:</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>Fundamental Theorem of Arithmetic states every composite number can be expressed as a product of primes.</li>
            <li>√2, √3, etc. are irrational numbers.</li>
          </ul>
        `,
        quiz: [
          {
            id: 'q1',
            question: "HCF of 135 and 225 is?",
            options: ["35", "45", "55", "65"],
            correctAnswer: 1,
            explanation: "Using Euclid's algorithm: 225 = 135×1 + 90; 135 = 90×1 + 45; 90 = 45×2 + 0. Since divisor is 45, HCF is 45.",
            trans: {
              question: "135 aur 225 ka HCF kya hai?",
              explanation: "Euclid algorithm ka upyog karein: 225 = 135×1 + 90... ant mein 45 bachta hai."
            }
          },
          {
            id: 'q2',
            question: "Is √5 an irrational number?",
            options: ["Yes", "No", "Maybe", "None of these"],
            correctAnswer: 0,
            explanation: "Yes, square roots of non-perfect squares are always irrational.",
            trans: {
              question: "Kya √5 ek aparimey sankhya (irrational) hai?",
              options: ["Haan", "Nahi", "Shayad", "Inmein se koi nahi"],
              explanation: "Haan, non-perfect squares ka root hamesha irrational hota hai."
            }
          }
        ]
      },
      {
        id: 'm2',
        title: '2. Polynomials',
        trans: { title: '2. Bahupad' },
        isDownloaded: false,
        isCompleted: false,
        isLocked: true, 
        lastStudied: 0,
        quizScore: 0,
        summary: "Polynomials are algebraic expressions that consist of variables and coefficients...",
        quiz: []
      }
    ]
  },
  {
    id: 'sci',
    name: 'Science',
    icon: 'science', 
    color: 'bg-green-100 text-green-700',
    trans: { name: 'Vigyan' },
    chapters: [
      {
        id: 's1',
        title: '6. Life Processes',
        trans: { title: '6. Jaiv Prakram' },
        isDownloaded: true,
        isCompleted: false,
        isLocked: false,
        lastStudied: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
        quizScore: 40, // Low score, should trigger revision
        summary: `
          <p><strong>Nutrition:</strong> The process of taking in food and using it for growth, metabolism, and repair.</p>
          <p class="mt-2"><strong>Photosynthesis Equation:</strong></p>
          <p class="font-mono bg-green-50 p-2 rounded text-xs md:text-sm">6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O</p>
          <br/>
          <h4 class="font-bold text-green-700">Types of Nutrition:</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Autotrophic:</strong> Making own food (e.g., Plants).</li>
            <li><strong>Heterotrophic:</strong> Depending on others (e.g., Humans, Animals).</li>
          </ul>
        `,
        quiz: [
          {
            id: 'sq1',
            question: "Which pigment is necessary for photosynthesis?",
            options: ["Hemoglobin", "Chlorophyll", "Mitochondria", "Xylem"],
            correctAnswer: 1,
            explanation: "Chlorophyll is the green pigment in leaves that captures sunlight energy.",
            trans: {
              question: "Prakash-sanshleshan (Photosynthesis) ke liye kaunsa pigment zaroori hai?",
              explanation: "Chlorophyll wo hara pigment hai jo sunlight ko pakadta hai."
            }
          },
          {
            id: 'sq2',
            question: "Xylem in plants is responsible for?",
            options: ["Transport of water", "Transport of food", "Transport of amino acids", "Transport of oxygen"],
            correctAnswer: 0,
            explanation: "Xylem transports water (Jal), Phloem transports food (Phal).",
            trans: {
              question: "Paudhon mein Xylem ka kya kaam hai?",
              options: ["Jal ka parivahan", "Bhojan ka parivahan", "Amino acid ka parivahan", "Oxygen ka parivahan"],
              explanation: "Xylem jal (water) transport karta hai, Phloem phal (food) transport karta hai."
            }
          }
        ]
      }
    ]
  },
  {
    id: 'eng',
    name: 'English',
    icon: 'english', 
    color: 'bg-purple-100 text-purple-700',
    trans: { name: 'Angrezi' },
    chapters: [
      {
        id: 'e1',
        title: 'A Letter to God',
        trans: { title: 'A Letter to God (Bhagwan ko Patra)' },
        isDownloaded: true,
        isCompleted: false,
        isLocked: false,
        lastStudied: Date.now() - 4 * 24 * 60 * 60 * 1000, 
        quizScore: 90,
        summary: `
          <p><strong>Summary:</strong> Lencho, a hard-working farmer, writes a letter to God asking for 100 pesos.</p>
        `,
        quiz: [
          {
            id: 'eq1',
            question: "Why did Lencho need money?",
            options: ["To buy a tractor", "To save his family from hunger", "To buy new land", "To go to the city"],
            correctAnswer: 1,
            explanation: "His corn field was destroyed by hailstones.",
            trans: {
              question: "Lencho ko paison ki zaroorat kyu thi?",
              options: ["Tractor khareedne ke liye", "Parivaar ko bhookh se bachane ke liye", "Zameen khareedne ke liye", "Shahar jaane ke liye"],
              explanation: "Uski fasal barbaar ho gayi thi."
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hist',
    name: 'History',
    icon: 'history', 
    color: 'bg-orange-100 text-orange-700',
    trans: { name: 'Itihaas' },
    chapters: [
      {
        id: 'h1',
        title: 'The Rise of Nationalism in Europe',
        trans: { title: 'Europe mein Rashtravad ka Uday' },
        isDownloaded: false,
        isCompleted: false,
        isLocked: false,
        lastStudied: 0,
        quizScore: 0,
        summary: "This chapter deals with the French Revolution...",
        quiz: []
      }
    ]
  }
];

export const mockDoubts: Doubt[] = [
  {
    id: 'd1',
    studentId: 'student_01',
    subjectId: 'math',
    text: "Sir, Euclid division lemma ka remainder negative ho sakta hai kya?",
    timestamp: Date.now() - 2 * 60 * 60 * 1000,
    status: 'pending_sync'
  },
  {
    id: 'd2',
    studentId: 'student_01',
    subjectId: 'sci',
    text: "Xylem aur Phloem mein difference diagram ke saath samjha dijiye.",
    timestamp: Date.now() - 24 * 60 * 60 * 1000,
    status: 'resolved',
    reply: "Xylem water transport karta hai (upwards), Phloem food transport karta hai (both ways)."
  }
];
