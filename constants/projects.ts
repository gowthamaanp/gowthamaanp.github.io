import { IProject } from "@/interface/projects";
import { colorMap } from "@/utils/colormap";

export const projectsData: IProject[] = [
  {
    tags: ["LLM", "AI Agent", "PAO Loop", "Medical grounding"],
    code: "https://github.com/MiRL-IITM/medpao-agent",
    title: "MedPAO: A Protocol-Driven Agent for Structuring Medical Reports",
    description: [
      "MedPAO is an intelligent agent system designed to process and structure medical radiology reports according to the standardized P.A.B.C.D.E.F protocol for chest x-ray interpretation.",
      "The system extracts medical concepts from free-text radiology reports, maps them to standard medical ontologies, and organizes them into a structured clinical format. <span class='font-medium'>Paper accepted in MICCAI 2025</span>",
    ],
    type: "Research",
    status: "Published",
    date: "2025",
    techStack: ["Python", "PyTorch", "LangChain", "OpenAI GPT", "Medical NLP"],
    features: [
      "Automated extraction of clinical concepts from radiology reports",
      "Mapping to standardized medical ontologies (UMLS, RadLex)",
      "Protocol-driven structuring following P.A.B.C.D.E.F framework",
      "Integration with clinical workflows"
    ],
  },
  {
    tags: ["LLM", "MCP", "RAG", "AI Agent"],
    code: "https://github.com/Gowthamaan-Aerobiosys/cxr_agent",
    title: "CXR Agent- Comprehensive Chest X-Ray Analysis System",
    description: [
      "A state-of-the-art AI system that combines advanced computer vision techniques with agentic Retrieval-Augmented Generation (RAG) for comprehensive chest X-ray analysis.",
      "Integrates multiple AI models and medical knowledge bases to provide detailed diagnostic insights."
    ],
    type: "Research",
    status: "In-Progress",
    date: "2024-2025",
    techStack: ["Python", "PyTorch", "LangChain", "RAG", "Computer Vision", "Medical Imaging"],
    features: [
      "Multi-modal analysis of chest X-ray images",
      "Agentic RAG for retrieving relevant medical knowledge",
      "Integration with medical databases and guidelines",
      "Explainable AI for diagnostic reasoning"
    ],
  },
  {
    tags: ["Segmentation", "Knowledge distillation", "Perceptual loss", "Prompt-based segmentation"],
    preview: "https://arxiv.org/abs/2501.16740",
    title: "Efficient Knowledge Distillation of SAM for Medical Image Segmentation",
    description: [
      "Developed KD SAM which effectively balances segmentation accuracy and computational efficiency, making it well-suited for real-time medical image segmentation applications in resource-constrained environments.",
      "Implements advanced knowledge distillation techniques to compress the Segment Anything Model (SAM) while maintaining high performance."
    ],
    type: "Research",
    status: "Published",
    date: "2025",
    techStack: ["Python", "PyTorch", "SAM", "Knowledge Distillation", "Medical Imaging"],
    features: [
      "Efficient compression of SAM for medical imaging",
      "Real-time segmentation on resource-constrained devices",
      "Maintains high accuracy with reduced computational cost",
      "Perceptual loss for improved visual quality"
    ],
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2501.16740" }
    ],
  },
  {
    tags: ["CNN", "Raspberry Pi", "Classification", "Imaging"],
    preview: "https://drive.google.com/file/d/1QeTAZl_VUHc6Z304sZG7rytyNhju5Xok/view",
    title: "Automated Non-Invasive Diagnosis of Diabetic Retinopathy using CNN",
    description: [
      "Developed a portable, software-driven imaging system using Raspberry Pi to capture retinal fundus images and predict the severity of diabetic retinopathy using CNN.",
      "Cost-effective solution for early detection of diabetic retinopathy in resource-limited settings."
    ],
    type: "Desktop",
    status: "Completed",
    date: "2023",
    techStack: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi", "CNN"],
    features: [
      "Portable imaging system with Raspberry Pi",
      "Real-time retinal image capture and analysis",
      "Multi-class severity prediction (No DR, Mild, Moderate, Severe, Proliferative)",
      "User-friendly interface for clinicians",
      "Cost-effective solution for rural healthcare"
    ],
    links: [
      { label: "Demo Video", url: "https://drive.google.com/file/d/1QeTAZl_VUHc6Z304sZG7rytyNhju5Xok/view" }
    ],
  }
];