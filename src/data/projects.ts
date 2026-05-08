export const projects = [
    {
        name: "SinBrief",
        date: "July 2025 - May 2026",
        description: "Developed an NLP-based framework for generating concise summaries of Sinhala legal texts in a low-resource setting, without relying on annotated datasets. The system leverages domain-aware word graphs, sentence clustering, and self-supervised learning across multiple models (mBert, Laser, Llama 3.1, Falcon 7B, and a continually pre-trained Llama 3.1) to identify and rank important content.",
        tags: ["Python", "Gradio", "NLTK", "Unsupervised learning"],
        outcomes: "Continually Pre-trained Llama Model, and an Unsupervised Summarisation Framework.",
        links: {
            demo: "https://huggingface.co/spaces/Minduli-Lasandi/SinBrief",
        }
    },
    {
        name: "SinhaLegal",
        date: "January 2026",
        description: "A Sinhala legal dataset with over 2 million tokens, designed for information extraction and analysis.",
        tags: ["Post-processing", "Silver standard dataset", "Legal documents", "Sinhala"],
        outcomes: "A Silver standard Sinhala Legal Dataset (SinhaLegal)",
        links: {
            github: "https://github.com/Minduli-Lasandi/SinhaLegal",
            huggingface: "https://huggingface.co/datasets/Minduli-Lasandi/SinhaLegal",
            publication: "https://aclanthology.org/2026.loreslm-1.11/",
        }
    },
    {
        name: "SignWave",
        date: "October 2023 -March 2024",
        description: "Cross-platform mobile app that improves media accessibility for the hearing-impaired by translating various inputs into ASL.",
        tags: ["Python", "Gradio", "NLTK", "Unsupervised learning"],
        links: {
            github: "https://github.com/Minduli-Lasandi/SignWave",
        }
    },
]