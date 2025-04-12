import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, Box, Alert, Paper } from '@mui/material';
import MalariaQuizModule2 from '../../components/MalariaQuizModule2';
import QuizFour from "../../components/QuizFour";  

// If the file has a different name or is located in a different folder, adjust accordingly


const ModuleContent = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');

  const courseId = pathParts[3] || 'malaria';
  const moduleId = pathParts[4] || 'module-1';

  console.log("Course ID:", courseId);
  console.log("Module ID:", moduleId);

  const moduleContent = {
    malaria: {
      'module-1': {
        title: 'Understanding Malaria: Causes, Transmission, and Global Impact',
        content: `<p>
          Malaria is one of the most persistent and devastating infectious diseases in human history. It has influenced the outcomes of wars, hindered economic growth, and continues to place a heavy burden on healthcare systems around the world. Caused by Plasmodium parasites and transmitted through the bites of infected female Anopheles mosquitoes, malaria is both preventable and curable, yet it remains a leading cause of illness and death in tropical and subtropical regions.
          <br /><br />
          Globally, malaria affects over 200 million people each year, with hundreds of thousands of deaths, especially among young children and pregnant women. While it is a global health concern, the African continent bears the greatest burden—accounting for roughly 95% of all malaria cases and deaths. In many African nations, malaria remains one of the top causes of mortality and a significant barrier to development.
          <br /><br />
          Zooming in further, Nigeria is at the epicenter of the malaria crisis. As Africa’s most populous country, Nigeria alone contributes nearly one-quarter of all global malaria cases. Despite massive efforts including awareness campaigns, insecticide-treated nets, and access to medications, malaria continues to take a heavy toll on the nation’s public health and economy.
          <br /><br />
          This module introduces you to the basic understanding of malaria, its causes, effects, and importance on a global, continental, and national scale. As you move through the course, you will explore malaria's transmission, symptoms, prevention strategies, and the global and local actions aimed at its control and eventual eradication.
              <br /><br />
    <strong>Watch this short video for a visual overview:</strong><br />
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/61333168?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Child health: understanding signs of malaria"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></p>`
      },
      'module-2': {
        title: 'Mode of Transmission - Malaria',
        content: `<p>
          Malaria is transmitted exclusively through the bites of infected female <strong>Anopheles</strong> mosquitoes, which are active mainly between dusk and dawn. The transmission cycle begins when a mosquito bites a person already infected with the malaria parasite. The mosquito ingests the parasites during the blood meal, and after a developmental period in the mosquito's gut, the parasites migrate to its salivary glands. When the mosquito bites another person, the parasites are injected into the bloodstream, beginning a new infection.
          <br /><br />
          The intensity and frequency of malaria transmission depend on multiple interconnected factors: the presence of the Plasmodium parasite (most commonly <em>P. falciparum</em> and <em>P. vivax</em>), the mosquito vector's breeding habits and density, the level of immunity within the human population, and environmental conditions such as temperature, humidity, and rainfall—which directly affect mosquito survival and breeding.
          <br /><br />
          In areas where malaria is endemic, humans serve as the primary reservoir for the parasite, creating a continuous transmission cycle. While mosquito bites remain the main route of transmission, malaria can also be transmitted through blood transfusions, organ transplants, shared needles, and from mother to child during childbirth (congenital malaria)—though these instances are rare compared to vector-borne transmission.
          <br /><br />
          Understanding the mode of transmission is critical in designing effective prevention strategies such as mosquito net use, indoor residual spraying, environmental control of breeding sites, and public health education to reduce human-vector contact.
        </p>`
      },


      'module-3': {
        title: 'Malaria Prevention Strategy',
        content: `<p>
    Preventing malaria is one of the most critical steps in reducing its global burden, especially in regions where the disease is endemic. Malaria prevention strategies focus primarily on controlling the mosquito vector, preventing human-mosquito contact, and using chemoprevention in vulnerable populations. Below are the most effective and widely recommended methods:
    <br /><br />

    <strong>1. Insecticide-Treated Nets (ITNs):</strong><br />
    Sleeping under insecticide-treated mosquito nets is one of the most effective ways to prevent malaria, especially for children and pregnant women. Long-lasting insecticidal nets (LLINs) not only protect the user but also reduce mosquito populations in the surrounding area.
    <br /><br />

    <strong>2. Indoor Residual Spraying (IRS):</strong><br />
    This involves spraying the inside of homes with insecticides that remain effective for several months. IRS kills mosquitoes when they rest on treated surfaces, thereby reducing malaria transmission. It is most effective when at least 80% of homes in an area are sprayed.
    <br /><br />

    <strong>3. Environmental Management:</strong><br />
    Controlling the mosquito breeding environment by draining stagnant water, covering water storage containers, and clearing bushes around homes can significantly reduce mosquito populations. Community efforts and sanitation campaigns play a vital role in this method.
    <br /><br />

    <strong>4. Chemoprevention:</strong><br />
    Preventive medication can be administered to high-risk groups. For example, <em>Intermittent Preventive Treatment in Pregnancy (IPTp)</em> and <em>Seasonal Malaria Chemoprevention (SMC)</em> for children in areas of high seasonal transmission have proven effective.
    <br /><br />

    <strong>5. Malaria Vaccine:</strong><br />
    The RTS,S/AS01 malaria vaccine—also known as Mosquirix—has been introduced in select countries in sub-Saharan Africa. It is the world’s first approved malaria vaccine and has shown promise in reducing severe cases in children.
    <br /><br />

    <strong>6. Personal Protection:</strong><br />
    Wearing long-sleeved clothing, using mosquito repellents containing DEET or picaridin, and ensuring windows and doors are screened are practical everyday steps individuals can take, especially in high-transmission zones.
    <br /><br />

    <strong>7. Health Education and Community Engagement:</strong><br />
    Educating communities about how malaria is transmitted, the importance of using preventive tools, and when to seek treatment plays a crucial role in sustained malaria control. Engagement through schools, local health workers, and media campaigns strengthens the overall impact.
    <br /><br />

    <strong>Watch this informative video by the WHO to better understand malaria prevention:</strong><br />
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rww1cS9CLRA" title="Preventing Malaria | World Health Organization" frameborder="0" allowfullscreen></iframe>
    <br /><br />

    Malaria prevention is not the responsibility of a single individual or government—it requires a combined effort of communities, health systems, global organizations, and continuous research. With proper implementation of these strategies, malaria cases and deaths can be drastically reduced, bringing the world closer to eradication.
  </p>`
      },

      'module-4': {
        title: 'Malaria Testing and Treatment',
        content: `<p>
    Early and accurate diagnosis of malaria is crucial for effective treatment and for reducing disease transmission. Malaria testing helps distinguish it from other febrile illnesses and ensures that antimalarial drugs are used appropriately.
    <br /><br />
    <strong>1. Diagnostic Methods:</strong><br />
    There are two primary methods for diagnosing malaria:
    <ul>
      <li><strong>Microscopy:</strong> This traditional method involves examining a drop of the patient’s blood under a microscope to detect the presence of malaria parasites. It is considered the gold standard and allows identification of the specific Plasmodium species and the parasite density.</li>
      <li><strong>Rapid Diagnostic Tests (RDTs):</strong> RDTs detect specific antigens produced by malaria parasites. These tests are quicker and easier to use, especially in areas where quality microscopy is not available.</li>
    </ul>
    <br />
    <strong>2. Treatment Approaches:</strong><br />
    Treatment depends on several factors including the type of malaria parasite, severity of the disease, and patient age or pregnancy status. The World Health Organization (WHO) recommends the following:
    <ul>
      <li><strong>Uncomplicated Malaria:</strong> Artemisinin-based Combination Therapy (ACT) is the first-line treatment. ACTs combine two drugs to reduce the chance of resistance and improve effectiveness.</li>
      <li><strong>Severe Malaria:</strong> Requires immediate hospitalization and administration of injectable artesunate, followed by ACT for full treatment once the patient stabilizes.</li>
      <li><strong>Relapsing Malaria (e.g., Plasmodium vivax):</strong> In addition to ACT, Primaquine is used to eliminate dormant liver stages and prevent relapses.</li>
    </ul>
    <br />
    <strong>3. Self-Medication and Resistance:</strong><br />
    It’s important to avoid self-medication with antimalarials. Misuse can lead to drug resistance, making treatment less effective in the long run. Always seek a diagnosis and use prescribed treatment.
    <br /><br />
 <strong>Watch this short WHO video on malaria testing and treatment:</strong><br />
<iframe width="100%" height="315" src="https://www.youtube.com/embed/F0LBU1VHdlA" title="Malaria: How is it diagnosed and treated?" frameborder="0" allowfullscreen></iframe>
<br /><br />

  </p>`
      },




      'module-5': {
        title: 'Mode of Transmission - Malaria',
        content: `<p>
          
        </p>`
      },
      'module-6': {
        title: 'Mode of Transmission - Malaria',
        content: `<p>
          
        </p>`
      },

      // Add other modules
    },
    'hiv': {
      'module-1': {
        title: 'Introduction & Overview - HIV',
        content: '<p>HIV (Human Immunodeficiency Virus) is a virus that attacks the body\'s immune system. If HIV is not treated, it can lead to AIDS (Acquired Immunodeficiency Syndrome).</p>'
      },
      'module-2': {
        title: 'HIV Transmission',
        content: '<p>HIV is transmitted through contact with certain body fluids from a person with HIV who has a detectable viral load. These fluids include blood, semen, pre-seminal fluid, rectal fluids, vaginal fluids, and breast milk.</p>'
      }
      // Add other modules
    },
    'tuberculosis': {
      'module-1': {
        title: 'TB Fundamentals',
        content: '<p>Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis bacteria. TB generally affects the lungs, but can also affect other parts of the body.</p>'
      }
      // Add other modules
    },
    'substance-abuse': {
      'module-1': {
        title: 'Understanding Substance Use Disorders',
        content: '<p>Substance use disorders occur when the recurrent use of alcohol and/or drugs causes clinically significant impairment, including health problems, disability, and failure to meet major responsibilities.</p>'
      }
      // Add other modules
    },
    'polio': {
      'module-1': {
        title: 'Polio Virus and Disease',
        content: '<p>Polio is a highly infectious disease caused by the poliovirus. It invades the nervous system and can cause total paralysis in a matter of hours.</p>'
      }
      // Add other modules
    }
  };

  // Check if the content exists and debug if it doesn't
  if (!moduleContent[courseId] || !moduleContent[courseId][moduleId]) {
    return (
      <Box my={4}>
        <Alert severity="warning">
          Content not found for this module. (Course: {courseId}, Module: {moduleId})
        </Alert>
      </Box>
    );
  }

  const currentModule = moduleContent[courseId]?.[moduleId];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>{currentModule?.title}</Typography>
      
      <Paper elevation={3} sx={{ padding: 3 }}>
        <div
          dangerouslySetInnerHTML={{ __html: currentModule?.content }}
        />
        
        {/* Only render the quiz component for module-4 */}
        {moduleId === 'module-2' && <MalariaQuizModule2 />}
        {moduleId === 'module-4' && <QuizFour />}
      </Paper>
    </Box>
  );
};

export default ModuleContent;