import { IProject } from "@/interface/projects";
import { colorMap } from "@/utils/colormap";

export const projectsData: IProject[] = [
  {
    tags: ["LLM", "AI Agent", "PAO Loop", "Medical grounding"],
    tagBgColors: [colorMap["keyword"], colorMap["keyword"], colorMap["keyword"], colorMap["keyword"]],
    code: "https://github.com/MiRL-IITM/medpao-agent",
    title: "MedPAO: A Protocol-Driven Agent for Structuring Medical Reports",
    description: [
      "MedPAO is an intelligent agent system designed to process and structure medical radiology reports according to the standardized P.A.B.C.D.E.F protocol for chest x-ray interpretation.",
      "The system extracts medical concepts from free-text radiology reports, maps them to standard medical ontologies, and organizes them into a structured clinical format. <span class='font-medium'>Paper accepted in MICCAI 2025</span>",
    ],
  },
  {
    tags: ["LLM", "MCP", "RAG", "AI Agent"],
    tagBgColors: [colorMap["keyword"], colorMap["keyword"], colorMap["keyword"], colorMap["keyword"]],
    code: "https://github.com/Gowthamaan-Aerobiosys/cxr_agent",
    title: "CXR Agent- Comprehensive Chest X-Ray Analysis System",
    description: [
      "A state-of-the-art AI system that combines advanced computer vision techniques with agentic Retrieval-Augmented Generation (RAG) for comprehensive chest X-ray analysis."
    ]
  },
  {
    tags: ["Segmentation", "Knowledge distillation", "Perceptual loss", "Prompt-based segmentation"],
    tagBgColors: [colorMap["keyword"], colorMap["keyword"], colorMap["keyword"], colorMap["keyword"]],
    preview: "https://arxiv.org/abs/2501.16740",
    title: "Efficient Knowledge Distillation of SAM for Medical Image Segmentation",
    description: [
      "Developed KD SAM which effectively balances segmentation accuracy and computational efficiency, making it well-suited for real-time medical image segmentation applications in resource-constrained environments."
    ]
  },
  {
    tags: ["CNN", "Raspberry Pi", "Classification", "Imaging"],
    tagBgColors: [colorMap["keyword"], colorMap["keyword"], colorMap["keyword"], colorMap["keyword"]],
    preview: "https://drive.google.com/file/d/1QeTAZl_VUHc6Z304sZG7rytyNhju5Xok/view",
    title: "Automated Non-Invasive Diagnosis of Diabetic Retinopathy using CNN",
    description: [
      "Developed a portable, software-driven imaging system using Raspberry Pi to capture retinal fundus images and predict the severity of diabetic retinopathy using CNN."
    ]
  },
  {
    tags: ["2D-3D Reconstruction", "Volumetry", "Surgical Planning"],
    tagBgColors: [colorMap["keyword"], colorMap["keyword"], colorMap["keyword"]],
    preview: "https://arxiv.org/abs/2501.16740",
    title: "3D Reconstruction and Volumetry of Liver Cancer from CT Images",
    description: [
      "Developed KD SAM which effectively balances segmentation accuracy and computational efficiency, making it well-suited for real-time medical image segmentation applications in resource-constrained environments."
    ]
  },
];