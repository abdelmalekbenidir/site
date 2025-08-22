import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "header": {
        "home": "Home",
        "about": "About",
        "features": "Features",
        "tokenomics": "Tokenomics",
        "roadmap": "Roadmap",
        "blog": "Blog",
        "partners": "Partners",
        "faq": "FAQ",
        "contact": "Contact",
        "theme_toggle_aria": "Switch to {{theme}} mode"
      },
      "languageSwitcher": {
        "label": "Change Language",
        "en": "English", "ar": "العربية", "es": "Español", "fr": "Français", "de": "Deutsch", "zh": "中文", "ja": "日本語"
      },
      "footer": {
        "description": "An AI-powered cryptocurrency analytics platform on the Solana network, focused on transparency, innovation, and community growth.",
        "copyright": "© {{year}} ARTOFELE. All Rights Reserved.",
        "privacy_policy": "Privacy Policy",
        "terms_of_use": "Terms of Use",
        "newsletter_title": "Stay Updated",
        "newsletter_description": "Subscribe to our newsletter for the latest project news, updates, and insights.",
        "newsletter_placeholder": "Enter your email",
        "newsletter_button": "Subscribe",
        "newsletter_success_title": "Subscribed!",
        "newsletter_success_desc": "Thank you! You're now on our list for exclusive updates.",
        "newsletter_error_invalid": "Please enter a valid email address."
      },
      "homePage": {
        "hero": {
          "line1": "AI-Powered",
          "dynamic_phrases": ["Crypto Analytics", "Market Insights", "Whale Movements", "Social Trends"],
          "line3": "on the Solana Network",
          "description": "ARTOFELE is a decentralized token on the Solana blockchain, powering an innovative AI analytics platform. We champion transparency, innovation, and community growth.",
          "explore_features_btn": "Explore Features",
          "view_tokenomics_btn": "View Tokenomics"
        },
        "features_section": {
          "title": "Unlock the Power of AI",
          "description": "Our platform provides cutting-edge tools to give you a competitive edge in the crypto market.",
          "feature1_title": "AI-Powered Analysis", "feature1_desc": "Get in-depth analysis and potential trend predictions for any token on the Solana network.",
          "feature2_title": "Social Sentiment", "feature2_desc": "Gauge market sentiment by analyzing data from social media and news outlets in real-time.",
          "feature3_title": "Whale Tracking", "feature3_desc": "Monitor the movements of major token holders to understand market-moving trades."
        },
        "why_us_section": {
          "title": "Why Choose ARTOFELE?",
          "description": "We are built on a foundation of core values that guide everything we do.",
          "value1_title": "Transparency", "value1_desc": "We operate with complete clarity, from our tokenomics to our development roadmap. Your trust is our priority.",
          "value2_title": "Innovation", "value2_desc": "We are committed to pushing the boundaries of technology to deliver powerful and intuitive tools for our users.",
          "value3_title": "Community", "value3_desc": "Our community is the heart of our project. We foster an inclusive and supportive environment for all members."
        },
        "cta_section": {
          "title": "Ready to Dive Deeper?",
          "description": "Explore our full suite of features and join the ARTOFELE community today.",
          "explore_btn": "Explore Our Features"
        }
      },
      "aboutPage": {
          "title": "About ARTOFELE",
          "subtitle": "Driving the future of crypto analytics with transparency, innovation, and a powerful community.",
          "mission_title": "Our Mission",
          "mission_desc": "Our mission is to democratize cryptocurrency analytics by providing powerful, AI-driven tools that are accessible to everyone. We aim to empower investors with clear, actionable insights, fostering a more informed and transparent crypto ecosystem on the Solana blockchain.",
          "vision_title": "Our Vision",
          "vision_desc": "We envision a future where every crypto enthusiast, from novice to expert, can navigate the complexities of the digital asset market with confidence. ARTOFELE will be the go-to platform for predictive analytics, real-time data, and community-driven insights.",
          "values_title": "Our Core Values",
          "value1_title": "Transparency", "value1_desc": "We operate with complete clarity. Your trust is our most valuable asset.",
          "value2_title": "Innovation", "value2_desc": "We relentlessly push the boundaries of technology to deliver cutting-edge tools.",
          "value3_title": "Community", "value3_desc": "Our community is the heart of our project. We build together, we grow together.",
          "team_title": "Meet the Team",
          "team_member1_name": "Alex 'Vision' Chen", "team_member1_role": "Founder & Lead AI Architect",
          "team_member2_name": "Ben 'Nexus' Carter", "team_member2_role": "Blockchain Lead",
          "team_member3_name": "Carla 'Aura' Rodriguez", "team_member3_role": "Head of Community & Marketing",
          "team_member4_name": "David 'Forge' Lee", "team_member4_role": "Frontend & UX Lead"
      },
      "featuresPage": {
          "title": "Platform Features",
          "subtitle": "The toolkit for your crypto success.",
          "feature1_title": "AI-Powered Token Analysis", "feature1_desc": "Leverage sophisticated machine learning models to get in-depth analysis of any token on the Solana network, predicting potential trends and identifying risks.",
          "feature2_title": "Live Price Tracking", "feature2_desc": "Stay ahead of the market with real-time price data, advanced charting tools, and customizable alerts for your favorite tokens.",
          "feature3_title": "Social Sentiment Analysis", "feature3_desc": "Our AI scans social media platforms and news outlets to gauge market sentiment, giving you a crucial edge in your investment strategy.",
          "feature4_title": "Whale Tracking", "feature4_desc": "Monitor the movements of major token holders in real-time. Understand what the biggest players are doing and why.",
          "feature5_title": "Solana Token Creation Tool", "feature5_desc": "Launch your own token on the Solana blockchain in minutes with our intuitive, secure, and user-friendly creation tool."
      },
      "tokenomicsPage": {
        "title": "Tokenomics",
        "subtitle": "A transparent breakdown of the ART token economy.",
        "name": "Token Name", "symbol": "Symbol", "blockchain": "Blockchain", "supply": "Total Supply", "decimals": "Decimals", "address": "Mint Address",
        "chart_title": "Token Distribution",
        "dist_lp": "Liquidity Pool", "dist_lp_desc": "Locked to ensure a stable and healthy trading environment on decentralized exchanges.",
        "dist_treasury": "Community Treasury", "dist_treasury_desc": "Funds for ecosystem growth, grants, and community-led initiatives, governed by ART holders.",
        "dist_team": "Team & Advisors", "dist_team_desc": "Vested allocation for the core team and strategic advisors, aligned with long-term project success.",
        "dist_marketing": "Marketing & Development", "dist_marketing_desc": "Fuels platform development, global marketing campaigns, and strategic partnerships to expand our reach.",
        "copied": "Copied"
      },
      "roadmapPage": {
        "title": "Roadmap",
        "subtitle": "Our journey to redefine crypto analytics.",
        "current_phase_aria": "Current Phase",
        "phase1_title": "Foundation", "phase1_subtitle": "Project Kickstart & Community Building", "phase1_item1": "Whitepaper Release", "phase1_item2": "Website Launch", "phase1_item3": "Initial Social Media Campaign", "phase1_item4": "Smart Contract Deployment",
        "phase2_title": "Launch", "phase2_subtitle": "Token Generation & Initial Listing", "phase2_item1": "ART Token Generation Event (TGE)", "phase2_item2": "Liquidity Pool Creation on Raydium", "phase2_item3": "First Community Airdrop", "phase2_item4": "CoinGecko & CoinMarketCap Listing",
        "phase3_title": "Platform Development", "phase3_subtitle": "AI Analytics Platform Beta", "phase3_item1": "Beta version of AI analysis platform release", "phase3_item2": "Integration of live price tracking", "phase3_item3": "User feedback collection and iteration", "phase3_item4": "Onboarding first 1,000 beta testers",
        "phase4_title": "Expansion", "phase4_subtitle": "Full Platform Launch & New Features", "phase4_item1": "Public launch of the full analytics platform", "phase4_item2": "Introduction of Social Sentiment Analysis and Whale Tracking", "phase4_item3": "Mobile application development begins", "phase4_item4": "Strategic partnerships with other Solana projects",
        "phase5_title": "Ecosystem Growth", "phase5_subtitle": "DAO & Governance", "phase5_item1": "Launch of Solana Token Creation Tool", "phase5_item2": "Implementation of DAO for community governance", "phase5_item3": "Staking program for ART holders", "phase5_item4": "Global marketing push and exchange listings"
      },
      "faqPage": {
        "title": "Frequently Asked Questions",
        "subtitle": "Have questions? We have answers.",
        "q1": "What is ARTOFELE?", "a1": "ARTOFELE is a decentralized token on the Solana blockchain that is intrinsically linked to an AI-powered cryptocurrency analytics platform. Our project is built on the core principles of transparency, innovation, and community growth.",
        "q2": "How to buy ART?", "a2": "You can purchase ART tokens on decentralized exchanges (DEXs) on the Solana network, such as Raydium or Jupiter. You will need a Solana-compatible wallet (like Phantom or Solflare) funded with SOL to swap for ART.",
        "q3": "How does the AI analysis platform work?", "a3": "Our AI platform leverages machine learning algorithms to analyze vast amounts of blockchain data and market trends. It provides users with actionable insights, including live price tracking, social sentiment analysis, and whale movement tracking, to help them make informed investment decisions.",
        "q4": "Is the project secure?", "a4": "Security is our top priority. Our smart contracts are audited by reputable third-party security firms, and our platform is built using industry best practices to ensure the safety of our users' data and assets.",
        "q5": "What is the total supply of ART?", "a5": "The total supply of ART is capped at 80,000,000 tokens. This fixed supply ensures that the token is deflationary by nature. You can find more details on our Tokenomics page.",
        "q6": "What makes ARTOFELE different from other crypto analytics platforms?", "a6": "ARTOFELE distinguishes itself through its deep integration of AI on the high-speed Solana network, a strong commitment to community-driven development, and by offering a suite of advanced tools like our Solana Token Creation Tool, all under one roof.",
        "q7": "Is there a staking program for ART tokens?", "a7": "Yes, a staking program for ART holders is planned as part of our 'Ecosystem Growth' phase on the roadmap. This will allow token holders to earn rewards and participate more deeply in the project's success.",
        "q8": "How can I get involved with the ARTOFELE community?", "a8": "We'd love for you to join us! You can follow us on our social media channels like Twitter and join our Telegram group for live discussions. We value community feedback and participation in building the future of ARTOFELE."
      },
      "contactPage": {
        "title": "Get In Touch", "subtitle": "We'd love to hear from you. Reach out with any questions or collaboration ideas.",
        "info_title": "Contact Information", "info_desc": "For direct inquiries, please email us. We aim to respond within 24 hours.",
        "form_name": "Your Name", "form_email": "Your Email", "form_message": "Message", "form_button": "Send Message",
        "success_title": "Thank You!", "success_desc": "Your message has been received. We will get back to you shortly."
      },
      "partnershipPage": {
        "title": "Become a Partner", "subtitle": "Collaborate with ARTOFELE to shape the future of decentralized AI analytics.",
        "why_partner_title": "Why Partner With Us?", "why_partner_desc": "Joining forces with ARTOFELE means tapping into a rapidly growing ecosystem at the intersection of AI and blockchain.",
        "benefit1_title": "Access Innovation", "benefit1_desc": "Integrate with our cutting-edge AI analytics and leverage our technology to enhance your own offerings.",
        "benefit2_title": "Reach a New Audience", "benefit2_desc": "Connect with our dedicated community of crypto enthusiasts, traders, and builders on the Solana network.",
        "benefit3_title": "Drive Ecosystem Growth", "benefit3_desc": "Contribute to a more transparent and intelligent crypto space, and grow alongside a leading Solana project.",
        "who_we_look_for_title": "Who We're Looking For",
        "type1_title": "Technology & dApp Integrations", "type1_desc": "Wallets, DeFi protocols, or any Solana-based project looking to integrate our analytics.",
        "type2_title": "Marketing & Content Collaborators", "type2_desc": "Influencers, media outlets, and educators who can help us spread the word about ARTOFELE.",
        "type3_title": "Data & Research Providers", "type3_desc": "Organizations with unique data sets that can enrich our AI models and analytical capabilities.",
        "form_title": "Let's Get in Touch",
        "form_company_name": "Company/Project Name", "form_contact_name": "Your Name", "form_email": "Contact Email", "form_website": "Website or Social Link", "form_partnership_type": "Partnership Type", "form_proposal": "Your Proposal", "form_button": "Submit Proposal",
        "partnership_type_tech": "Technology/Integration", "partnership_type_marketing": "Marketing/Content", "partnership_type_data": "Data/Research", "partnership_type_other": "Other",
        "success_title": "Proposal Received!", "success_desc": "Thank you for your interest. Our team will review your proposal and get in touch shortly.",
        "email_subject": "Partnership Proposal from {{companyName}}",
        "email_body": "Company/Project Name: {{companyName}}\nContact Name: {{contactName}}\nContact Email: {{email}}\nWebsite or Social Link: {{website}}\nPartnership Type: {{partnershipType}}\n\nProposal:\n-------------------------\n{{proposal}}",
        "preparing_email": "Preparing...",
        "redirect_message": "Your default email client will now open. Please review and send your proposal."
      },
       "privacyPolicyPage": {
        "title": "Privacy Policy", "subtitle": "Our commitment to protecting your privacy.",
        "last_updated": "Last Updated: {{date}}",
        "p1": "Welcome to ARTOFELE ('we', 'our', 'us'). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.",
        "h1": "Information We Collect",
        "p2": "We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.",
        "item1_title": "Personal Data", "item1_desc": "Information you provide such as name, email address, and contact details.",
        "item2_title": "Usage Data", "item2_desc": "Information collected automatically about your use of our website, such as IP address, browser type, and pages visited.",
        "item3_title": "Wallet Information", "item3_desc": "If you connect a cryptocurrency wallet, we may collect your public wallet address.",
        "item4_title": "Cookies and Tracking Technologies", "item4_desc": "We use cookies to track activity and hold certain information.",
        "h2": "How We Use Your Information",
        "p3": "We use personal information collected via our Website for a variety of business purposes described below.",
        "use1": "To provide, operate, and maintain our Website.", "use2": "To improve, personalize, and expand our Website.",
        "use3": "To understand and analyze how you use our Website.", "use4": "To communicate with you, either directly or through one of our partners.",
        "use5": "For compliance purposes, including enforcing our Terms of Use.",
        "h3": "Sharing Your Information",
        "p4": "We do not share your Personal Information with third parties except as described in this Privacy Policy.",
        "h4": "Data Security",
        "p5": "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.",
        "h5": "Contact Us",
        "p6": "If you have questions or comments about this policy, you may",
        "contact_link": "contact us"
      },
      "termsOfUsePage": {
        "title": "Terms of Use", "subtitle": "The rules for using our services.",
        "last_updated": "Last Updated: {{date}}",
        "p1": "Please read these Terms of Use carefully before using the ARTOFELE website. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.",
        "h1": "Acceptance of Terms",
        "p2": "By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.",
        "h2": "Use of the Platform",
        "p3": "You agree not to use the platform for any unlawful purpose or in any way that could harm our services or reputation. You are responsible for any activity that occurs through your account or wallet.",
        "h3": "Intellectual Property",
        "p4": "The Service and its original content, features, and functionality are and will remain the exclusive property of ARTOFELE and its licensors. The Service is protected by copyright, trademark, and other laws of both the and foreign countries.",
        "h4": "Disclaimers",
        "p5": "Our Service is provided 'AS IS' and 'AS AVAILABLE', without any warranties of any kind. We do not warrant that the service will be uninterrupted, secure, or error-free. You acknowledge that cryptocurrency markets are volatile and we are not responsible for any financial losses.",
        "h5": "Governing Law",
        "p6": "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is established, without regard to its conflict of law provisions."
      },
      "blogPage": {
        "title": "ARTOFELE Blog",
        "subtitle": "Insights on AI, Crypto, and the Solana Ecosystem.",
        "read_more": "Read More",
        "posted_by": "By {{author}}",
        "posted_on": "on {{date}}",
        "back_to_blog": "Back to Blog",
        "post_not_found_title": "Post Not Found",
        "post_not_found_desc": "Sorry, we couldn't find the blog post you were looking for."
      },
      "blogPosts": {
        "ai-in-crypto": {
          "title": "The Role of AI in Modern Crypto Trading",
          "excerpt": "Artificial intelligence is no longer science fiction; it's a powerful tool that's reshaping the cryptocurrency landscape. From predictive analytics to sentiment analysis, AI is giving traders an unprecedented edge...",
          "content": [
            "Artificial intelligence is no longer science fiction; it's a powerful tool that's reshaping the cryptocurrency landscape. From predictive analytics to sentiment analysis, AI is giving traders an unprecedented edge. At ARTOFELE, we are at the forefront of this revolution, building tools that harness the power of machine learning to demystify market trends.",
            "One of the key applications is predictive modeling. By analyzing historical price data, trading volumes, and even blockchain metrics, our AI can identify patterns that are invisible to the human eye. This allows for more accurate forecasting, helping users make informed decisions about when to buy, hold, or sell.",
            "Furthermore, sentiment analysis is a game-changer. Our platform scours the web, from Twitter threads to news articles, to gauge the collective mood about a particular asset. A sudden shift in sentiment can often be a leading indicator of a price movement. By quantifying this sentiment, we provide a crucial piece of the puzzle that was previously difficult to obtain.",
            "As we continue to develop our platform, the integration of AI will only become deeper. We believe that by making these advanced tools accessible, we can level the playing field and empower a new generation of savvy crypto investors."
          ]
        },
        "understanding-solana": {
          "title": "Why We Chose Solana: A Deep Dive into the High-Speed Blockchain",
          "excerpt": "When we decided to build ARTOFELE, one of the most critical decisions was choosing the right blockchain. After extensive research, the choice was clear: Solana. Its unparalleled speed, low transaction costs, and vibrant ecosystem...",
          "content": [
            "When we decided to build ARTOFELE, one of the most critical decisions was choosing the right blockchain. After extensive research, the choice was clear: Solana. Its unparalleled speed, low transaction costs, and vibrant ecosystem provided the perfect foundation for our ambitious project.",
            "Solana's high throughput, capable of handling tens of thousands of transactions per second (TPS), is a massive advantage. For an analytics platform that processes vast amounts of data, this speed is essential. It ensures that our users get real-time insights without the frustrating delays common on other networks.",
            "Another major factor is the low cost of transactions. Solana's fees are a fraction of a cent, which makes our platform more accessible. Whether you're a small retail investor or a large institution, you can use our tools without worrying about prohibitive gas fees eating into your capital.",
            "Finally, the Solana ecosystem is one of the most innovative and fastest-growing in the crypto space. Being part of this community allows us to integrate with other cutting-edge projects and provides our users with a seamless experience within a thriving network of dApps and services. We are proud to build on Solana and contribute to its continued growth."
          ]
        },
        "community-is-key": {
          "title": "Community is Key: Building ARTOFELE Together",
          "excerpt": "A crypto project is only as strong as its community. From day one, we've made community growth and engagement a cornerstone of our philosophy. We believe that the best ideas come from collaboration, and that transparency is...",
          "content": [
            "A crypto project is only as strong as its community. From day one, we've made community growth and engagement a cornerstone of our philosophy. We believe that the best ideas come from collaboration, and that transparency is the key to building lasting trust.",
            "Our approach is simple: listen, engage, and build in the open. We actively solicit feedback on our platform, our roadmap, and even our marketing initiatives. Our Telegram and Twitter channels are not just for announcements; they are vibrant forums for discussion and debate, where every voice is heard and valued.",
            "We are also committed to rewarding our community. Through airdrops, beta testing programs, and future governance mechanisms via a DAO, we ensure that our most dedicated supporters have a real stake in the project's success. Your success is our success.",
            "Join us on this journey. Whether you're an AI enthusiast, a Solana supporter, or a passionate crypto trader, there's a place for you in the ARTOFELE community. Together, we can build the future of decentralized analytics."
          ]
        }
      }
    }
  },
  ar: {
    translation: {
      "header": {
        "home": "الرئيسية", "about": "من نحن", "features": "المميزات", "tokenomics": "اقتصاديات التوكن", "roadmap": "خارطة الطريق", "blog": "المدونة", "partners": "شركاء", "faq": "الأسئلة الشائعة", "contact": "اتصل بنا", "theme_toggle_aria": "التحويل إلى الوضع {{theme}}"
      },
      "languageSwitcher": {
        "label": "تغيير اللغة", "en": "English", "ar": "العربية", "es": "Español", "fr": "Français", "de": "Deutsch", "zh": "中文", "ja": "日本語"
      },
      "footer": {
        "description": "منصة تحليل للعملات المشفرة مدعومة بالذكاء الاصطناعي على شبكة سولانا، تركز على الشفافية والابتكار ونمو المجتمع.", 
        "copyright": "© {{year}} ARTOFELE. جميع الحقوق محفوظة.", 
        "privacy_policy": "سياسة الخصوصية",
        "terms_of_use": "شروط الاستخدام",
        "newsletter_title": "ابق على اطلاع",
        "newsletter_description": "اشترك في نشرتنا الإخبارية للحصول على آخر أخبار المشروع وتحديثاته ورؤاه.",
        "newsletter_placeholder": "أدخل بريدك الإلكتروني",
        "newsletter_button": "اشتراك",
        "newsletter_success_title": "تم الاشتراك!",
        "newsletter_success_desc": "شكراً لك! أنت الآن في قائمتنا للحصول على التحديثات الحصرية.",
        "newsletter_error_invalid": "الرجاء إدخال عنوان بريد إلكتروني صالح."
      },
      "homePage": {
        "hero": {
          "line1": "تحليلات مدعومة", "dynamic_phrases": ["بالذكاء الاصطناعي", "للسوق", "للحيتان", "للتوجهات"], "line3": "على شبكة سولانا",
          "description": "ARTOFELE هو توكن لامركزي على بلوكتشين سولانا، يدعم منصة تحليل مبتكرة بالذكاء الاصطناعي. نحن ندعم الشفافية والابتكار ونمو المجتمع.", "explore_features_btn": "استكشف المميزات", "view_tokenomics_btn": "عرض اقتصاديات التوكن"
        },
        "features_section": {
          "title": "أطلق قوة الذكاء الاصطناعي", "description": "توفر منصتنا أدوات متطورة لمنحك ميزة تنافسية في سوق العملات المشفرة.",
          "feature1_title": "تحليل مدعوم بالذكاء الاصطناعي", "feature1_desc": "احصل على تحليل متعمق وتنبؤات بالاتجاهات المحتملة لأي توكن على شبكة سولانا.",
          "feature2_title": "تحليل المشاعر الاجتماعية", "feature2_desc": "قم بقياس معنويات السوق من خلال تحليل البيانات من وسائل التواصل الاجتماعي والمنافذ الإخبارية في الوقت الفعلي.",
          "feature3_title": "تتبع الحيتان", "feature3_desc": "راقب تحركات كبار حاملي التوكن لفهم الصفقات التي تحرك السوق."
        },
        "why_us_section": {
          "title": "لماذا تختار ARTOFELE؟", "description": "نحن مبنيون على أساس من القيم الأساسية التي توجه كل ما نقوم به.",
          "value1_title": "الشفافية", "value1_desc": "نعمل بوضوح تام، من اقتصاديات التوكن إلى خارطة طريق التطوير. ثقتك هي أولويتنا.",
          "value2_title": "الابتكار", "value2_desc": "نحن ملتزمون بدفع حدود التكنولوجيا لتقديم أدوات قوية وبديهية لمستخدمينا.",
          "value3_title": "المجتمع", "value3_desc": "مجتمعنا هو قلب مشروعنا. نحن نعزز بيئة شاملة وداعية لجميع الأعضاء."
        },
        "cta_section": {
          "title": "هل أنت مستعد للتعمق أكثر؟", "description": "استكشف مجموعتنا الكاملة من الميزات وانضم إلى مجتمع ARTOFELE اليوم.", "explore_btn": "استكشف ميزاتنا"
        }
      },
      "aboutPage": {
        "title": "عن ARTOFELE", "subtitle": "قيادة مستقبل تحليلات الكريبتو بالشفافية والابتكار ومجتمع قوي.",
        "mission_title": "مهمتنا", "mission_desc": "مهمتنا هي إضفاء الطابع الديمقراطي على تحليلات العملات المشفرة من خلال توفير أدوات قوية مدفوعة بالذكاء الاصطناعي ومتاحة للجميع. نهدف إلى تمكين المستثمرين برؤى واضحة وقابلة للتنفيذ، وتعزيز نظام بيئي للعملات المشفرة أكثر استنارة وشفافية على بلوكتشين سولانا.",
        "vision_title": "رؤيتنا", "vision_desc": "نتصور مستقبلًا يمكن فيه لكل متحمس للعملات المشفرة، من المبتدئ إلى الخبير، التنقل في تعقيدات سوق الأصول الرقمية بثقة. ستكون ARTOFELE المنصة المفضلة للتحليلات التنبؤية والبيانات في الوقت الفعلي والرؤى التي يحركها المجتمع.",
        "values_title": "قيمنا الأساسية",
        "value1_title": "الشفافية", "value1_desc": "نعمل بوضوح تام. ثقتك هي أغلى أصولنا.",
        "value2_title": "الابتكار", "value2_desc": "ندفع بلا هوادة حدود التكنولوجيا لتقديم أدوات متطورة.",
        "value3_title": "المجتمع", "value3_desc": "مجتمعنا هو قلب مشروعنا. نبني معًا، وننمو معًا.",
        "team_title": "تعرف على الفريق",
        "team_member1_name": "أليكس 'فيجن' تشين", "team_member1_role": "المؤسس ومهندس الذكاء الاصطناعي الرئيسي",
        "team_member2_name": "بن 'نيكسوس' كارتر", "team_member2_role": "قائد البلوكتشين",
        "team_member3_name": "كارلا 'أورا' رودريغيز", "team_member3_role": "رئيسة المجتمع والتسويق",
        "team_member4_name": "ديفيد 'فورج' لي", "team_member4_role": "قائد الواجهة الأمامية وتجربة المستخدم"
      },
      "featuresPage": {
        "title": "ميزات المنصة", "subtitle": "مجموعة الأدوات لنجاحك في عالم الكريبتو.",
        "feature1_title": "تحليل التوكن بالذكاء الاصطناعي", "feature1_desc": "استفد من نماذج تعلم الآلة المتطورة للحصول على تحليل متعمق لأي توكن على شبكة سولانا، والتنبؤ بالاتجاهات المحتملة وتحديد المخاطر.",
        "feature2_title": "تتبع الأسعار المباشر", "feature2_desc": "ابق في صدارة السوق ببيانات الأسعار في الوقت الفعلي، وأدوات الرسوم البيانية المتقدمة، والتنبيهات القابلة للتخصيص للتوكنات المفضلة لديك.",
        "feature3_title": "تحليل المشاعر الاجتماعية", "feature3_desc": "يقوم الذكاء الاصطناعي لدينا بمسح منصات التواصل الاجتماعي والمنافذ الإخبارية لقياس معنويات السوق، مما يمنحك ميزة حاسمة في استراتيجيتك الاستثمارية.",
        "feature4_title": "تتبع الحيتان", "feature4_desc": "راقب تحركات كبار حاملي التوكن في الوقت الفعلي. افهم ما يفعله أكبر اللاعبين ولماذا.",
        "feature5_title": "أداة إنشاء توكن سولانا", "feature5_desc": "أطلق التوكن الخاص بك على بلوكتشين سولانا في دقائق باستخدام أداتنا البديهية والآمنة وسهلة الاستخدام."
      },
      "tokenomicsPage": {
        "title": "اقتصاديات التوكن", "subtitle": "تحليل شفاف لاقتصاد توكن ART.",
        "name": "اسم التوكن", "symbol": "الرمز", "blockchain": "البلوكتشين", "supply": "إجمالي المعروض", "decimals": "الخانات العشرية", "address": "عنوان العقد",
        "chart_title": "توزيع التوكن",
        "dist_lp": "مجمع السيولة", "dist_lp_desc": "مؤمنة لضمان بيئة تداول مستقرة وصحية في البورصات اللامركزية.",
        "dist_treasury": "خزانة المجتمع", "dist_treasury_desc": "أموال مخصصة لنمو النظام البيئي والمنح والمبادرات التي يقودها المجتمع، وتخضع لحوكمة حاملي ART."
      },
      "partnershipPage": {
        "title": "كن شريكًا",
        "subtitle": "تعاون مع ARTOFELE لتشكيل مستقبل تحليلات الذكاء الاصطناعي اللامركزية.",
        "why_partner_title": "لماذا تشاركنا؟",
        "why_partner_desc": "توحيد الجهود مع ARTOFELE يعني الاستفادة من نظام بيئي سريع النمو عند تقاطع الذكاء الاصطناعي والبلوكتشين.",
        "benefit1_title": "الوصول إلى الابتكار",
        "benefit1_desc": "تكامل مع تحليلاتنا المتطورة للذكاء الاصطناعي واستفد من تقنيتنا لتعزيز عروضك الخاصة.",
        "benefit2_title": "الوصول إلى جمهور جديد",
        "benefit2_desc": "تواصل مع مجتمعنا المتفاني من عشاق العملات المشفرة والتجار والبناة على شبكة سولانا.",
        "benefit3_title": "دفع نمو النظام البيئي",
        "benefit3_desc": "ساهم في فضاء تشفير أكثر شفافية وذكاءً، ونمو جنبًا إلى جنب مع مشروع رائد في سولانا.",
        "who_we_look_for_title": "عمن نبحث",
        "type1_title": "تكاملات التكنولوجيا والتطبيقات اللامركزية",
        "type1_desc": "المحافظ، بروتوكولات التمويل اللامركزي، أو أي مشروع قائم على سولانا يتطلع إلى دمج تحليلاتنا.",
        "type2_title": "متعاونون في التسويق والمحتوى",
        "type2_desc": "المؤثرون، والمنافذ الإعلامية، والمعلمون الذين يمكنهم مساعدتنا في نشر الكلمة عن ARTOFELE.",
        "type3_title": "مزودو البيانات والبحوث",
        "type3_desc": "المنظمات التي لديها مجموعات بيانات فريدة يمكنها إثراء نماذج الذكاء الاصطناعي والقدرات التحليلية لدينا.",
        "form_title": "لنتواصل",
        "form_company_name": "اسم الشركة/المشروع",
        "form_contact_name": "اسمك",
        "form_email": "البريد الإلكتروني للاتصال",
        "form_website": "موقع الويب أو الرابط الاجتماعي",
        "form_partnership_type": "نوع الشراكة",
        "form_proposal": "مقترحك",
        "form_button": "إرسال المقترح",
        "partnership_type_tech": "تكنولوجيا/تكامل",
        "partnership_type_marketing": "تسويق/محتوى",
        "partnership_type_data": "بيانات/بحث",
        "partnership_type_other": "آخر",
        "email_subject": "مقترح شراكة من {{companyName}}",
        "email_body": "اسم الشركة/المشروع: {{companyName}}\nاسم جهة الاتصال: {{contactName}}\nالبريد الإلكتروني للاتصال: {{email}}\nموقع الويب أو الرابط الاجتماعي: {{website}}\nنوع الشراكة: {{partnershipType}}\n\nالمقترح:\n-------------------------\n{{proposal}}",
        "preparing_email": "جار التحضير...",
        "redirect_message": "سيتم الآن فتح برنامج البريد الإلكتروني الافتراضي لديك. يرجى مراجعة وإرسال مقترحك."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
