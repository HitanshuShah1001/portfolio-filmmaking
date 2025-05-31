import { useState } from "react";

const PortfolioWebsite = () => {
  const [currentView, setCurrentView] = useState("landing");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentProject, setCurrentProject] = useState("");

  // Project & category data
  const projectData = {
    // Narrative-driven projects
    "not-my-responsibility": {
      title: "Not My Responsibility",
      description: `Genre: Visual poetry  
Duration: 1 minute 33 seconds  
Logline: A confrontation dressed as a video cover to Billie Eilish’s ‘Not My Responsibility’—sharp, slow, and beautifully uncomfortable.  
Role: Director, Cinematographer, Editor.`,
      media: ["https://youtu.be/O_NpsdybeP8"],
    },
    "high-tide": {
      title: "High Tide",
      description: `Genre: Grief Drama  
Duration: 15 mins 16 seconds  
Logline: A grieving writer lets a stranger into his home—and maybe into his past.  
Role: Cinematographer, Editor.`,
      media: ["https://youtu.be/tEUHEG3bP4Y"],
    },
    "after-the-credits": {
      title: "After the Credits",
      description: `Genre: Experimental Romance  
Duration: 29 seconds  
Logline: A woman lingers in an empty theatre, caught in a one-sided love with a film. She waits for the screen to speak again, like love that never said goodbye properly.  
Role: Director, Cinematographer, Editor.`,
      media: ["https://youtu.be/ySZmGeTpsoc"],
    },
    licensed: {
      title: "Licensed?",
      description: `Genre: Social Drama  
Duration: (Not specified)  
Logline: A Hindi short film using metaphor and silence to confront the unspoken horror of marital rape in a society that refuses to acknowledge it.  
Role: (Not specified)`,
      media: ["https://youtu.be/Qlhhw4gdi9k"],
    },

    // Concept-driven projects
    "ripple-effect": {
      title: "Ripple Effect",
      description: `Medium: Photography (original works) paired with song lyrics to create graphics.  
Concept: No art is fully original—everything we create carries traces of what came before. The Ripple Effect explores the unseen lineage of inspiration, how past work—intentional or not—shapes new creations. It's about recognizing those echoes, and accepting that our art will leave its own behind. Art’s just a big game of pass-it-on.`,
      media: [
        "https://drive.google.com/file/d/14aI431UfMixQyTfEq5hHiDJVODMtjdts/view?usp=drive_link",
        "https://drive.google.com/file/d/16sjK-NFLlRRMda4hRHpjz5XEPdgMcL6T/view?usp=drive_link",
        "https://drive.google.com/file/d/1X10DX2KZvsKqOZ1IyfApzQaVS-oTUk9k/view?usp=drive_link",
        "https://drive.google.com/file/d/1wYPVkZU3_m9e_1lJraaMrHUBdr7iUnP8/view?usp=drive_link",
        "https://drive.google.com/file/d/1fUO4BZKkY2uUodrsS9R1UUTibEtN363F/view?usp=drive_link",
        "https://drive.google.com/file/d/1gk4tkC1pV05D9DEdQ-aBMf4d2w8gYbKz/view?usp=drive_link",
        "https://drive.google.com/file/d/1S7LGrjL_JVshYSGyyNSv4E0unOjkKbPj/view?usp=drive_link",
        "https://drive.google.com/file/d/1D6XE0kqS7N6oYH78r8-zayrzuoQIIA8_/view?usp=drive_link",
        "https://drive.google.com/file/d/1U_7cGtPOqiGf4YsSzo-XA9b5AxGpKCr4/view?usp=drive_link",
      ],
    },
    "this-room-saved-me": {
      title: "This Room Saved Me",
      description: `Medium: Photo Series  
Concept: This photo series is a quiet tribute to the movie theatre itself—the space that holds our collective escapes. With one subject and no distractions, it lets the setting take center stage. It's about honoring the room that gives shape to our fantasies, and the screen that makes other worlds feel just close enough to touch.`,
      media: [
        "https://drive.google.com/file/d/1lOd0iVLV9gDUK_ZT_YsidI3VBe4oo6f5/view?usp=drive_link",
        "https://drive.google.com/file/d/1ol9Zg8-jyDOUqFQwqQR561gaUaAAZ3kM/view?usp=drive_link",
        "https://drive.google.com/file/d/1Hj7nFwlJ85lq3RZXrC6cgVif-SHKFWfs/view?usp=drive_link",
        "https://drive.google.com/file/d/1sssGPgQRWokCIn1yTqfJFIF8llFXR29D/view?usp=drive_link",
        "https://drive.google.com/file/d/1Ntb-LawZQAbk-20agU1kenASQ2__p9ID/view?usp=drive_link",
        "https://drive.google.com/file/d/1IrlevU5oVjLitw7-03YL72Nxlym8cVnD/view?usp=drive_link",
        "https://drive.google.com/file/d/1n9ci7d1hLDeDPWNtj6Y-Z34rJTqdDEzW/view?usp=drive_link",
        "https://drive.google.com/file/d/1759_kHBWi2ZeUYfP2I6VXctJ1dYPeFzB/view?usp=drive_link",
        "https://drive.google.com/file/d/1-x3O_pqa0USc6C5a9Snfa1p1z9y_U1f5/view?usp=drive_link",
        "https://drive.google.com/file/d/12nun1Kab-haO1bD-XLKvYP4wiCLgQXbW/view?usp=drive_link",
        "https://drive.google.com/file/d/1VgWTfxHZAv1IhUm4Prq4f5cVhb6UtmNf/view?usp=drive_link",
        "https://drive.google.com/file/d/1xYnirngU7_X19chtlyMSjVMjVrRLypUl/view?usp=drive_link",
        "https://drive.google.com/file/d/1mJZGfTo5gGgSbddBtgD9w2G3vuYnIOxr/view?usp=drive_link",
        "https://drive.google.com/file/d/1iYKW3-whUixQdRzJ_JN3p1kfI5_1Vub0/view?usp=drive_link",
        "https://drive.google.com/file/d/1yc1bkRqPPK6Q_z86TJQtTqR1XZ4M8SO6/view?usp=drive_link",
        "https://drive.google.com/file/d/1PkWQxDONGQbpaIf_QvZGYqhfQF9x1eOm/view?usp=drive_link",
        "https://drive.google.com/file/d/1H2AO4d3KaoduMj_aaKRK2ACP0TgPe4xw/view?usp=drive_link",
        "https://drive.google.com/file/d/12JMTcl4S7bBVYnY5-LdH4p0IRKgUonKg/view?usp=drive_link",
      ],
    },
    "the-slow-city": {
      title: "The Slow City",
      description: `Medium: Photo Series  
Concept: This series follows an ordinary subject returning to the old city of Ahmedabad—not for nostalgia’s sake, but to breathe in a slower, simpler way of life. In contrast to the noise of modern cities, these spaces offer something quieter, less polished, and more human. It’s a gentle escape into the roots we’re told to move on from.`,
      media: [
        "https://drive.google.com/file/d/12Q2NY9idBD-QumenlzriMQFjvVzbxh0R/view?usp=drive_link",
        "https://drive.google.com/file/d/1YQra8aqybm6S1Z5qmKLovEK233_yPap5/view?usp=drive_link",
        "https://drive.google.com/file/d/1IOx28y2RZl9L3MaNMwHeQnYevmiZqPdL/view?usp=drive_link",
        "https://drive.google.com/file/d/1Vxq_vzSwrLWAMt8xdl58pLuphi7elG7Z/view?usp=drive_link",
        "https://drive.google.com/file/d/1wEian9dT3--h7-XCYcnkJI71vJWzOrY1/view?usp=drive_link",
        "https://drive.google.com/file/d/1B_biMjrydZgqhR64GMOH4lYEy_B1sIDy/view?usp=drive_link",
        "https://drive.google.com/file/d/1a-tJiWPH6IDyZj_f3dqIg49ESypPw0UN/view?usp=drive_link",
        "https://drive.google.com/file/d/1V8JqisawBSjeGrSFmYCjCP0H1d6dzeO4/view?usp=drive_link",
        "https://drive.google.com/file/d/1GLKbE79HXGPCZ7S2dP_LQnDOazUbxWW3/view?usp=drive_link",
        "https://drive.google.com/file/d/1SAIv3M9QzSOWzKXoA5X5WwZjAxVvyCQS/view?usp=drive_link",
        "https://drive.google.com/file/d/1TfE6HL_kyNH_BYL2ulm8wQK0-rg3BpJp/view?usp=drive_link",
        "https://drive.google.com/file/d/1-JDo9DWH9FdPryod1s4XrpvJ_H_tF5Aa/view?usp=drive_link",
        "https://drive.google.com/file/d/1sY4v0kIDn03iNfpcfI6JRXLH0so28WnX/view?usp=drive_link",
      ],
    },
    "this-fabric-fits-now": {
      title: "This Fabric Fits Now",
      description: `Medium: Photo Series  
Concept: This series captures a woman owning the space she once thought she didn’t belong in—Indian traditional clothing. What used to feel too graceful, too feminine, too much, now feels like power. It's about unlearning who we thought tradition was for, and rewriting the rules in your own damn drape.`,
      media: [
        "https://drive.google.com/file/d/1YQOs9J0NYDhfL-8tm_WXy6PJF2ITnxTr/view?usp=drive_link",
        "https://drive.google.com/file/d/159_84msPGxgOH1YCp6jdyXsLZfs6VEX9/view?usp=drive_link",
        "https://drive.google.com/file/d/1k7eLOs_ICm6HqGEXo47Kk2tuqISzpNZB/view?usp=drive_link",
        "https://drive.google.com/file/d/1VQmtp-rzUpRMrOpyZ2Voetu89Nfs9gvS/view?usp=drive_link",
        "https://drive.google.com/file/d/1lhTonmJQXkkLITICGuePbKtIh0vMOVuX/view?usp=drive_link",
        "https://drive.google.com/file/d/1bVc3XZcnAt5sRmeBk16lAs6cGFPHPMuX/view?usp=drive_link",
        "https://drive.google.com/file/d/1gaLFiuTZitYg4XazypXNeLDMQL9pGZyo/view?usp=drive_link",
        "https://drive.google.com/file/d/157a1Yg1jqyVtb9zEnSaCUlCTWDe6iA1N/view?usp=drive_link",
        "https://drive.google.com/file/d/1eqk0Ss60xTzUdLefUeIi1F0WPTJHtpgN/view?usp=drive_link",
        "https://drive.google.com/file/d/1JcJ3vqHozwpEhsTLHpOBHenR7G67pYz9/view?usp=drive_link",
        "https://drive.google.com/file/d/1H7aOKpI9Z6YLDCckYXmIm_p4tsxuo4iz/view?usp=drive_link",
        "https://drive.google.com/file/d/1PhmlrF9j-Mf1EzOPzofH6bH6_wn_-ATk/view?usp=drive_link",
      ],
    },
    paintings: {
      title: "Paintings",
      description:
        "Mixed media series on stretched canvas using acrylic paint and hand embroidery",
      media: [],
    },
    "Unseen Fire": {
      title: "Unseen Fire",
      description:
        "A tribute to acid attack survivors, showing the contrast between feminine strength and violent chaos.",
      media: [
        "https://drive.google.com/file/d/1UqwIZP1km0GQI4KKL_EjBU60wgtwEtQD/view?usp=sharing",
      ],
    },
    "Almost touching": {
      title: "Almost touching",
      description:
        "A love story between the sun and moon—separate but forever sharing the same sky.",
      media: [
        "https://drive.google.com/file/d/1HS8_il2JNeuIEYdig2uo_sqJKyJiDU1P/view?usp=drive_link",
      ],
    },
    "Blue Noise": {
      title: "Blue Noise",
      description:
        "Four overlapping faces caught in different shades of thought, all swallowed by blue static.",
      media: [
        "https://drive.google.com/file/d/1SePKz2SR2pzYfgxMexuqRr6461XnjBxC/view?usp=drive_link",
      ],
    },
    "Head Vs Heart": {
      title: "Head Vs Heart",
      description:
        "A girl caught mid-dilemma, holding logic in her hand and living with emotion in her mind.",
      media: [
        "https://drive.google.com/file/d/1oullhFj6InqW7MfLg1dPZci4bhlWNFus/view?usp=drive_link",
      ],
    },
    "Open heart": {
      title: "Open heart",
      description: "A raw heart, quietly becoming something beautiful.",
      media: [
        "https://drive.google.com/file/d/11-_E2JmsegmOOnLWVfsqC5tCSuELt9wO/view?usp=drive_link",
      ],
    },
    "White on Black": {
      title: "White on Black",
      description: "A poised figure in monochrome—pure form, no distraction.",
      media: [
        "https://drive.google.com/file/d/12qTL0ULEj_VHhuQPswHe2PuT40DpH8GQ/view?usp=drive_link",
      ],
    },
    "soft-ache": {
      title: "Soft Ache",
      description: `Medium: Photo Series  
Concept: A visual study of longing through a female subject. No backstory, no resolution—just the quiet tension of wanting something unnamed. It’s not about what she wants, but how it lingers. The kind of feeling that lives in glances, postures, and pauses.`,
      media: [
        "https://drive.google.com/file/d/1y361bRjlyvATFAFC-PR6b9RqxY5CwjRM/view?usp=drive_link",
        "https://drive.google.com/file/d/1yyPZ8PugjJkE66JhRfQUJWjvIAg1_bbZ/view?usp=drive_link",
        "https://drive.google.com/file/d/1NEEU9iPpifGKi5X8SYasnr4qsXk3owf8/view?usp=drive_link",
        "https://drive.google.com/file/d/1DijMGl6kXaevzeH_IDT0sSbmTDf7Swy3/view?usp=drive_link",
        "https://drive.google.com/file/d/1EF2KZco74FGRunXRZ3_F-SeQJ_t7l9Qg/view?usp=drive_link",
        "https://drive.google.com/file/d/17L6dFf0VUrHdpDkGEQrhSmyFxNtPiVUa/view?usp=drive_link",
        "https://drive.google.com/file/d/199hwSkq_Cybgt7kM4qkKCYlGJC6-cBM3/view?usp=drive_link",
        "https://drive.google.com/file/d/1d6ODdCsB-_FnmO4KrROKHcTkrRPWiYJH/view?usp=drive_link",
        "https://drive.google.com/file/d/1jsEgUlctfSrh9yzs5rK7_IqB_Hwx6S2s/view?usp=drive_link",
        "https://drive.google.com/file/d/10XkHH1NhDOjZL67iUN77IE7_ITQuAgFd/view?usp=drive_link",
      ],
    },
    "The channel": {
      title: "The Channel",
      description:
        "The Channel is a progressive arts and writing magazine published at the University of Sussex. As arts editor and co-editor, I worked on four issues, curating visual content and overseeing design and layout. The magazine features work from across the Sussex community—students, staff, alumni, and visitors—ranging from poetry and essays to illustration, photography, and experimental formats.",
      media: [],
    },
    "this-shouldnt-work": {
      title: "This Shouldn’t Work",
      description: `Medium: Photo Series  
Concept: This series explores the visual tension between objects we associate with softness—like flowers—and everyday clutter. From soda cans to cigarette packs, each pairing invites interpretation through contrast. Think Kuleshov effect, but still and a little unserious. It's less about meaning, more about suggestion—and the weird poetry that happens in between.`,
      media: [
        "https://drive.google.com/file/d/1ZyD1JupYFbqcN_W1qcBiqIsdr2Q_uxRr/view?usp=drive_link",
        "https://drive.google.com/file/d/1SX2-PxgWmz3o7_xpIh6BygO6803zk99D/view?usp=drive_link",
        "https://drive.google.com/file/d/1XJ1_1G7rBht6FNuadxXT4Ze5yVkPhDhg/view?usp=drive_link",
        "https://drive.google.com/file/d/16lnMMbm837J8kSfScetUmF96CFaWazBM/view?usp=drive_link",
        "https://drive.google.com/file/d/16c_6bvJ8pkrTXxNYVF0oc_0qnClqzkUh/view?usp=drive_link",
        "https://drive.google.com/file/d/1FiyXCSGl2cv4whP-H7g2coSU4qbyvQLs/view?usp=drive_link",
        "https://drive.google.com/file/d/1eKd6DUt_R8GWRJ_aP_bMWWo5u42ctU7D/view?usp=drive_link",
      ],
    },

    // Context-driven projects
    "inner-circle": {
      title: "Inner Circle",
      description: `Medium: Photo Series  
Context: During Navratri, a nine-night festival central to our city, the Inner Circle community curates immersive musical evenings built around dance, space, and community comfort. While most people see the celebration, this photo series shifts focus to the construction workers quietly building the experience behind the scenes—captured in the quiet hours before the crowds arrive.`,
      media: [
        "https://drive.google.com/file/d/1hXbD7lqtQY02qG8XFuudHxZRJ2HFy0dF/view?usp=drive_link",
        "https://drive.google.com/file/d/1yLIN8n_hzPqsbs46RVzc0MxTbnzpR-zx/view?usp=drive_link",
        "https://drive.google.com/file/d/1zD7qOBSyERbiiKxrppRO34t9iGRUTcB0/view?usp=drive_link",
        "https://drive.google.com/file/d/1EVib1KcF-KnLD2xX_meQN4llRfDK8cds/view?usp=drive_link",
        "https://drive.google.com/file/d/1NL4kUv_2Ne51RhIFJNzFFIAs-J2CcEmc/view?usp=drive_link",
        "https://drive.google.com/file/d/1jgFtgZic42B3Dvo4G5qNEEB2fQqm3swv/view?usp=drive_link",
      ],
    },
    "on a walk": {
      title: "On a walk",
      description:
        "One man stitched into motion, carrying on through a mess of color and uncertainty.",
      media: [
        "https://drive.google.com/file/d/1F5paT2DIpNxJNJDSFWXrTEUbJPDPNHZZ/view?usp=drive_link",
      ],
    },
    "paresh-pahuja": {
      title: "Paresh Pahuja",
      description: `Medium: Photo Series  
Context: A photo series shot during a live performance by Paresh Pahuja. Capturing the mood, lighting, and moments that happen only once—on stage and in the crowd.`,
      media: [
        "https://drive.google.com/file/d/1lea8Gj1jrcAXwpae9LY5JpYQin_RTMmC/view?usp=drive_link",
        "https://drive.google.com/file/d/1xWlYKL-MuFF2P4hVVVJzLo-M9ZyV7XiH/view?usp=drive_link",
        "https://drive.google.com/file/d/1_B_JGtBZ9lD5VzU7P98pLd419-t-1TYC/view?usp=drive_link",
        "https://drive.google.com/file/d/1tMtkcJr71jf639tgey5cbOVWUyehzyk7/view?usp=drive_link",
        "https://drive.google.com/file/d/1iNlnllUuvdMzbaovx9jfZE_NXaGJFduG/view?usp=drive_link",
        "https://drive.google.com/file/d/1eagNszbLngEXJnCmes80ikxXfmog4I7z/view?usp=drive_link",
        "https://drive.google.com/file/d/1cQ0NmKdM0sPrtDY-uKwdiSnfmaGWp2Tr/view?usp=drive_link",
      ],
    },
    "just-birds": {
      title: "Just Birds",
      description: `Medium: Photo Series  
Context: A casual photo series of birds—captured whenever and wherever they showed up. No theme, just small moments that felt worth shooting.`,
      media: [
        "https://drive.google.com/file/d/1eshCN1Oq2iR-fWmixP9hmSDSKumYRX8v/view?usp=drive_link",
        "https://drive.google.com/file/d/1Oz0XsmxCx6wb_8qP22VWIQHjadpQ3mrk/view?usp=drive_link",
        "https://drive.google.com/file/d/11rMCmHeWDK_puKmqJ4jqYV1-J1ur5TDM/view?usp=drive_link",
        "https://drive.google.com/file/d/1PqZuTV1NhVXM-LfEijThwDNgt-nXzFhf/view?usp=drive_link",
        "https://drive.google.com/file/d/1d7jrPjKODnglFz-TF9gHb_8KVkRIMpLn/view?usp=drive_link",
        "https://drive.google.com/file/d/1d7jrPjKODnglFz-TF9gHb_8KVkRIMpLn/view?usp=drive_link",
      ],
    },
    BrainNoise: {
      title: "Brain Noise",
      description: "The brain talks a lot. It’s not always helpful.",
      media: [
        "https://drive.google.com/file/d/1DA4eggJ5MCs_weUpFPIv5LN2ki-pFzre/view?usp=drive_link",
      ],
    },
    "Jelly Mood": {
      title: "Jelly Mood",
      description:
        "Just a soft creature minding its business in a weird environment.",
      media: [
        "https://drive.google.com/file/d/1xn6fL3_AOc1Q70GogmpMRY0S0zBtstFU/view?usp=drive_link",
      ],
    },
  };

  const categories = {
    narrative: {
      title: "Narrative-driven",
      subtitle: "Tiny epics with big feelings and soft endings.",
      intro: `These are stories that sat with me longer than they should’ve—and this is my way of trying to make sense of it all. I’ve tried to shoot, cut, and direct them with honesty, even when the truth was uncomfortable or strange. If you’re into slow burns, loaded silences, or just want to feel something weirdly specific—welcome.`,
      projects: [
        "not-my-responsibility",
        "high-tide",
        "after-the-credits",
        "licensed",
      ],
    },
    form: {
      title: "Form-driven",
      subtitle: "Chaotically sculpted work.",
      intro: "",
      projects: [
        "paintings",
        "Unseen Fire",
        "Almost touching",
        "Blue Noise",
        "on a walk",
        "Open heart",
        "Head Vs Heart",
        "White on Black",
        "Jelly Mood",
        "BrainNoise",
      ],
    },
    concept: {
      title: "Concept-driven",
      subtitle: "Thought experiments with great lighting.",
      intro: `These projects started with an idea—sometimes a big one, sometimes just a passing thought I couldn’t shake. I wasn’t trying to say something profound every time, just curious to see where a feeling or question could lead visually. Take what you want from them; I already did.`,
      projects: [
        "ripple-effect",
        "this-room-saved-me",
        "the-slow-city",
        "this-fabric-fits-now",
        "soft-ache",
        "this-shouldnt-work",
      ],
    },
    context: {
      title: "Context-driven",
      subtitle: `Visuals supported by the “why” behind the “what”.`,
      intro: `These projects are shaped by the people, places, and moments they came from. There’s not always a big concept behind them—sometimes I just happened to be there, paying attention. They exist because something about the context felt worth holding onto.`,
      projects: ["inner-circle", "paresh-pahuja", "just-birds"],
    },
  };

  // Helpers to detect media type
  const isImageLink = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/i);
  };
  const toDriveEmbed = (url) => {
    // Replace "/view" with "/preview" to embed
    return url.replace("/view", "/preview");
  };

  // View handlers
  const showCategory = (category) => {
    setCurrentCategory(category);
    setCurrentView("category");
  };
  const showProjectDetail = (projectId) => {
    setCurrentProject(projectId);
    setCurrentView("project");
  };
  const showLanding = () => {
    setCurrentView("landing");
    setCurrentCategory("");
    setCurrentProject("");
  };
  const goBackToCategory = () => {
    setCurrentView("category");
    setCurrentProject("");
  };

  // Sub-components
  const LandingPage = () => (
    <div className="flex flex-col justify-center items-center min-h-screen text-center animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg animate-slide-up">
        Aanchal's Portfolio
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-slide-up delay-300">
        Pick a Card
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl animate-slide-up delay-600">
        {Object.entries(categories).map(([key, category], index) => (
          <div
            key={key}
            onClick={() => showCategory(key)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl min-h-48"
          >
            {/* Thumbnail image fills the card */}
            <img
              src={`/images/${index + 1}.png`}
              alt={`${category.title} thumbnail`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Semi-transparent overlay to darken the image slightly */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Animated gradient stripe on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Text content (hidden until hover) */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <p className="text-gray-200 leading-relaxed px-4 text-center">
                {category.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CategoryPage = () => {
    const cat = categories[currentCategory];

    return (
      <div className="py-8 animate-fade-in mx-auto px-4">
        <div className="w-full flex justify-start px-0">
          <button
            onClick={showLanding}
            className="ml-0 bg-gray-800 bg-opacity-60 border border-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-700 hover:bg-opacity-80 transition-all duration-300 hover:-translate-x-2 backdrop-blur-lg mb-8"
          >
            ← Back to Home
          </button>
        </div>

        {/* Category Title */}
        <h2 className="text-4xl md:text-5xl text-white text-center mb-6 font-bold drop-shadow-lg">
          {cat.title}
        </h2>

        {cat.subtitle && (
          <h3 className="text-gray-300 text-center text-lg mb-12 leading-relaxed whitespace-pre-line">
            {cat.subtitle}
          </h3>
        )}

        {/* Page Opening / Intro */}
        {cat.intro && (
          <p className="text-gray-300 text-center text-lg mb-12 leading-relaxed whitespace-pre-line">
            {cat.intro}
          </p>
        )}

        {/* List of Projects */}
        <div className="flex flex-col gap-8">
          {cat.projects.length > 0 ? (
            cat.projects.map((pid, i) => {
              const p = projectData[pid];
              if (!p) return null;

              return (
                <div
                  key={pid}
                  onClick={() => showProjectDetail(pid)}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:bg-opacity-60 hover:translate-x-3 animate-slide-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {p.description}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-400 text-center italic">
              No projects available in this category yet.
            </p>
          )}
        </div>
      </div>
    );
  };

  const ProjectDetailPage = () => {
    const proj = projectData[currentProject];

    return (
      <div className="py-8 animate-fade-in">
        <button
          onClick={goBackToCategory}
          className="bg-gray-800 bg-opacity-60 border border-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-700 hover:bg-opacity-80 transition-all duration-300 hover:-translate-x-2 backdrop-blur-lg mb-8"
        >
          ← Back to Category
        </button>
        <h2 className="text-4xl md:text-5xl text-white text-center mb-4 font-bold drop-shadow-lg">
          {proj.title}
        </h2>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-4xl mx-auto leading-relaxed">
          {proj.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proj.media.map((url, idx) => {
            // If the URL ends with a common image extension, render as <img>
            if (isImageLink(url)) {
              return (
                <div
                  key={idx}
                  className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <img
                    src={url}
                    alt={proj.title + " image " + (idx + 1)}
                    className="w-full h-64 object-cover"
                  />
                </div>
              );
            } else {
              // Otherwise, assume it's a Google Drive video and embed via iframe
              const embedUrl = toDriveEmbed(url);
              return (
                <div
                  key={idx}
                  className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <iframe
                    src={embedUrl}
                    title={proj.title + " video " + (idx + 1)}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-64"
                  ></iframe>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {currentView === "landing" && <LandingPage />}
      {currentView === "category" && <CategoryPage />}
      {currentView === "project" && <ProjectDetailPage />}
    </div>
  );
};

export default PortfolioWebsite;
