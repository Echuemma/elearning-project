import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, Box, Alert, Paper } from '@mui/material';
import MalariaQuizModule2 from '../../components/MalariaQuizModule2';
import QuizFour from "../../components/QuizFour";  
import HIVQuizModule2 from "../../components/HIVQuizModule2";  
import HIVQuizModule4 from "../../components/HIVQuizModule4";  
import TBQuizModule2 from "../../components/TBQuizModule2";  
// Import other quiz components as needed

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
          Zooming in further, Nigeria is at the epicenter of the malaria crisis. As Africa's most populous country, Nigeria alone contributes nearly one-quarter of all global malaria cases. Despite massive efforts including awareness campaigns, insecticide-treated nets, and access to medications, malaria continues to take a heavy toll on the nation's public health and economy.
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
          The RTS,S/AS01 malaria vaccine—also known as Mosquirix—has been introduced in select countries in sub-Saharan Africa. It is the world's first approved malaria vaccine and has shown promise in reducing severe cases in children.
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
            <li><strong>Microscopy:</strong> This traditional method involves examining a drop of the patient's blood under a microscope to detect the presence of malaria parasites. It is considered the gold standard and allows identification of the specific Plasmodium species and the parasite density.</li>
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
          It's important to avoid self-medication with antimalarials. Misuse can lead to drug resistance, making treatment less effective in the long run. Always seek a diagnosis and use prescribed treatment.
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
    },
    'hiv': {
      'module-1': {
        title: 'Introduction & Overview - HIV',
        content: `<p>
          <strong>What is HIV and AIDS?</strong><br>
          HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system, specifically the CD4 cells (T cells), which help the immune system fight off infections. If left untreated, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome). While HIV is the virus that causes the infection, AIDS is the most advanced stage of the disease, characterized by a severely weakened immune system and the occurrence of certain opportunistic infections or cancers.<br><br>

          <strong>How HIV Affects the Immune System:</strong><br>
          Once HIV enters the body, it targets and destroys CD4 cells, which play a crucial role in immune defense. Over time, as the number of CD4 cells declines, the body becomes more vulnerable to infections and diseases it would normally be able to fight off. Without treatment, HIV can weaken the immune system to the point that it progresses to AIDS, where the immune system is badly damaged.<br><br>

          <strong>The Global and Local Impact of HIV/AIDS:</strong><br>
          HIV/AIDS remains a major global public health issue. According to UNAIDS, millions of people worldwide live with HIV, with the majority in low- and middle-income countries. Sub-Saharan Africa bears the highest burden. Locally, HIV has impacted communities by affecting the health, social structure, and economy, particularly where access to treatment and education is limited. Stigma and misinformation also continue to hinder effective prevention and care.<br><br>

          <strong>Watch this short video to learn more about HIV:</strong><br>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/F0LBU1VHdlA" title="HIV Overview" frameborder="0" allowfullscreen></iframe>
        </p>`
      },

      
     'module-2': {
  title: 'HIV Transmission',
  content: `
    <h2>How HIV is Transmitted</h2>
    <p>HIV (Human Immunodeficiency Virus) is transmitted through specific bodily fluids from a person who has HIV. It can be passed from one person to another, but only under certain conditions.</p><br />

    <h3>Main Ways HIV is Transmitted</h3>
    <ul>
      <li><strong>Unprotected Sexual Contact:</strong> HIV can be transmitted during vaginal, anal, or oral sex without the use of a condom or other barrier methods, especially if one partner has a detectable viral load.</li><br />
      <li><strong>Sharing Needles:</strong> Sharing needles, syringes, or other drug injection equipment with someone who has HIV can transmit the virus.</li><br />
      <li><strong>From Mother to Child:</strong> A pregnant person with HIV can pass the virus to their baby during pregnancy, childbirth, or breastfeeding. However, with proper treatment, this risk can be greatly reduced.</li><br />
      <li><strong>Blood Transfusions and Organ Transplants:</strong> Although rare in countries with rigorous testing, HIV can be transmitted through infected blood or organs.</li><br />
    </ul>

    <h3>HIV is <strong>not</strong> Transmitted By</h3>
    <p>HIV cannot be spread through casual contact. This includes:</p><br /><br />
    <ul>
      <li>Hugging, kissing, or shaking hands</li><br />
      <li>Sharing food or drinks</li>
      <li>Toilet seats or showers</li>
      <li>Insect bites</li>
    </ul>

    <h3>Preventing HIV Transmission</h3>
    <p>There are several effective ways to reduce the risk of HIV transmission:</p><br />
    <ul>
      <li>Using condoms correctly every time you have sex</li><br />
      <li>Taking PrEP (pre-exposure prophylaxis) if you are at high risk</li><br />
      <li>Never sharing needles or syringes</li><br />
      <li>Regular HIV testing and knowing your partner's status</li><br />
      <li>Ensuring any blood products or medical instruments are sterile</li><br />
    </ul>

    <p>Understanding how HIV is transmitted helps reduce fear and stigma, and encourages safe, informed behaviors that protect you and others.</p><br /><br />
  `
},


     'module-3': {
  title: 'HIV Treatment',
  content: `
    <h2>Understanding HIV Treatment</h2>
    <p>HIV treatment involves taking medicines that reduce the amount of virus in the body. These medicines are called antiretroviral therapy (ART). While there is no cure for HIV, ART helps people with HIV live long, healthy lives and reduces the risk of transmitting the virus to others.</p><br />

    <p>ART works by preventing the virus from multiplying, which protects the immune system. A strong immune system can fight off infections and certain HIV-related cancers more effectively.</p><br />

    <p>It is recommended that everyone diagnosed with HIV begin treatment as soon as possible, regardless of how long they’ve had the virus or how healthy they feel.</p><br />

    <h3>Key Benefits of HIV Treatment</h3>
    <ul>
      <li>Helps people with HIV live longer, healthier lives</li><br />
      <li>Reduces the risk of HIV transmission</li><br />
      <li>Prevents the progression to AIDS</li><br />
    </ul>

    <p>It is important to take HIV medicine every day as prescribed. Missing doses can allow the virus to multiply and become resistant to medication.</p><br />

    <h3>Watch: How HIV Treatment Works</h3>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mKJpazk2d-w" title="How HIV Treatment Works" frameborder="0" allowfullscreen></iframe><br />

    <p>If you're living with HIV, staying on treatment and maintaining regular medical checkups can help you achieve and maintain an undetectable viral load — which means the virus is so low in your body that standard tests can’t detect it.</p><br />
  `
},


     'module-4': {
  title: 'HIV Testing and Antiretroviral Therapy (ART)',
  content: `
    <h2>HIV Testing: The First Step Toward Treatment</h2>
    <p>HIV testing is the only way to know if someone has the virus. Early detection through testing allows people to start treatment sooner, protect their partners, and maintain better long-term health.</p><br /><br />

    <p>There are several types of HIV tests, including:</p><br /><br />
    <ul>
      <li><strong>Antibody tests:</strong> Detect antibodies the body produces in response to HIV.</li><br /><br />
      <li><strong>Antigen/antibody tests:</strong> Can detect both HIV antibodies and antigens, often within 2–4 weeks after exposure.</li><br />
      <li><strong>Nucleic acid tests (NATs):</strong> Detect the virus itself in the blood and can diagnose HIV earlier than other tests.</li><br />
    </ul>

    <p>HIV testing can be done in clinics, hospitals, at home (with self-test kits), or at mobile testing units. It’s fast, confidential, and often free.</p><br />

    <h2>What Happens After a Positive Result?</h2>
    <p>If someone tests positive for HIV, they should begin antiretroviral therapy (ART) as soon as possible. Starting ART early improves health outcomes and greatly reduces the risk of transmitting HIV to others.</p><br /><br />

    <h2>Antiretroviral Therapy (ART)</h2>
    <p>ART is the standard treatment for HIV. It involves taking a combination of HIV medicines daily. These medicines control the virus and protect the immune system.</p><br /><br />

    <p>Key benefits of ART include:</p><br />
    <ul>
      <li>Lowering the viral load to undetectable levels</li><br />
      <li>Preventing the progression to AIDS</li><br />
      <li>Improving quality of life and life expectancy</li><br />
      <li>Reducing the risk of transmitting HIV to others (U=U: Undetectable = Untransmittable)</li><br />
    </ul>

    <p>Consistency is critical — ART must be taken exactly as prescribed. Skipping doses or stopping treatment can lead to drug resistance and treatment failure.</p><br />

    <h2>Monitoring During ART</h2>
    <p>People on ART need regular checkups to monitor their viral load and immune function (CD4 count). These tests help healthcare providers adjust treatment if needed.</p><br />

    <p>With early testing and continuous ART, people living with HIV can lead full, productive, and healthy lives.</p><br />
  `
},


     'module-5': {
  title: 'HIV Stigma and Discrimination',
  content: `
    <h2>What is HIV Stigma?</h2>
    <p>HIV stigma refers to negative beliefs, feelings, and attitudes towards people living with HIV. It often stems from fear, misinformation, and cultural beliefs about how HIV is transmitted or who is affected.</p><br />

    <p>Examples of stigma include blaming people for contracting HIV, avoiding physical contact, or treating them as though they are dangerous or less valuable.</p><br />

    <h2>What is HIV Discrimination?</h2>
    <p>Discrimination occurs when people with HIV are treated unfairly or denied their rights based on their HIV status. This can happen in healthcare, workplaces, schools, communities, and even within families.</p><br />

    <p>Examples of discrimination include being denied employment or healthcare, being excluded from social events, or having one's HIV status shared without consent.</p><br />

    <h2>Impacts of Stigma and Discrimination</h2>
    <p>Stigma and discrimination can discourage people from getting tested or seeking treatment. It can also cause emotional harm, isolation, and depression. In some cases, it even leads to violence or abandonment.</p><br />

    <p>For people already living with HIV, stigma can reduce quality of life and negatively affect mental and physical health.</p><br />

    <h2>How to Fight HIV Stigma</h2>
    <ul>
      <li><strong>Educate others:</strong> Share facts about HIV to dispel myths and reduce fear.</li><br /><br />
      <li><strong>Use respectful language:</strong> Say “person living with HIV” instead of labeling someone as “HIV-infected.”</li>
      <li><strong>Support those affected:</strong> Be a listener, an advocate, or simply a kind presence.</li>
      <li><strong>Challenge discrimination:</strong> Speak up when you see unfair treatment or stigma in action.</li>
    </ul> <br/>

    <h2>Watch: Ending HIV Stigma</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/K3cE2i0x_k4" title="Ending HIV Stigma | WHO" frameborder="0" allowfullscreen></iframe><br /><br />

    <p>By ending stigma and discrimination, we can encourage more people to get tested, treated, and supported. Compassion, education, and community action are essential in the fight against HIV.</p><br /><br />
  `
},


   'module-6': {
  title: 'HIV Support and Advocacy',
  content: `
    <h2>What is HIV Support?</h2>
    <p>HIV support involves providing care, encouragement, and assistance to individuals living with HIV. This support can come from family, friends, healthcare providers, community organizations, and peer networks.</p><br />

    <p>Support plays a critical role in helping people cope with their diagnosis, stick to treatment plans, and maintain good mental and physical health. It also helps reduce feelings of isolation and fear.</p><br />

    <h2>Types of Support</h2>
    <ul>
      <li><strong>Emotional support:</strong> Includes listening without judgment, offering reassurance, and encouraging open conversations.</li><br />
      <li><strong>Medical support:</strong> Includes access to doctors, treatment, medication, and regular health monitoring.</li><br />
      <li><strong>Peer support:</strong> Connecting with others who are also living with HIV can be empowering and healing.</li><br />
      <li><strong>Community support:</strong> NGOs, support groups, and local centers often offer education, services, and social events to build community and awareness.</li><br />
    </ul>

    <h2>What is HIV Advocacy?</h2>
    <p>HIV advocacy is the effort to promote equal rights, access to treatment, awareness, and dignity for people living with HIV. Advocates work to eliminate stigma, influence public policies, and ensure that healthcare systems serve all individuals fairly.</p><br />

    <p>Advocacy can take many forms, including public speaking, writing, organizing community events, campaigning for policy changes, and using social media to raise awareness.</p><br />

    <h2>Why Advocacy Matters</h2>
    <p>Advocacy helps ensure that people with HIV have access to life-saving medications, safe environments, and legal protection. It also strengthens the global fight against HIV by pushing for funding, research, and education.</p><br />

    <p>When more people get involved in advocacy, communities become safer, better informed, and more compassionate toward those living with HIV.</p><br />

    <h2>How You Can Support and Advocate</h2>
    <ul>
      <li>Educate yourself and others about HIV facts and myths.</li><br />
      <li>Stand up against discrimination and stigma when you see it.</li><br />
      <li>Support or volunteer with HIV organizations in your area.</li><br />
      <li>Amplify voices of people living with HIV and their stories.</li><br />
    </ul>

    <p>Support and advocacy go hand in hand in improving the lives of people with HIV and moving us closer to ending the epidemic.</p><br />
  `
}    


    },
    'tuberculosis': {
    'module-1': {
  title: 'TB Fundamentals',
  content: `
    <h2>What is Tuberculosis (TB)?</h2>
    <p>Tuberculosis (TB) is a potentially serious infectious disease caused by a bacterium called <em>Mycobacterium tuberculosis</em>. While it primarily affects the lungs (pulmonary TB), it can also spread to other parts of the body such as the kidneys, spine, or brain (extrapulmonary TB).</p><br /><br />

    <p>TB spreads from person to person through the air. When someone with active pulmonary TB coughs, sneezes, or even speaks, tiny droplets containing the bacteria can be inhaled by others nearby.</p><br /><br />

    <h2>Types of TB</h2>
    <ul>
      <li><strong>Latent TB:</strong> The bacteria remain in the body in an inactive state and cause no symptoms. It isn’t contagious, but it can become active later.</li><br /><br />
      <li><strong>Active TB:</strong> The bacteria are active, multiply in the body, and cause symptoms. This form is contagious and requires immediate treatment.</li><br /><br />
    </ul>

    <h2>Symptoms of Active TB</h2>
    <p>Common symptoms of active TB include:</p><br /><br />
    <ul>
      <li>Persistent cough (sometimes with blood)</li><br /><br />
      <li>Chest pain</li><br /><br />
      <li>Unexplained weight loss</li><br /><br />
      <li>Fever and night sweats</li><br /><br />
      <li>Fatigue and weakness</li><br /><br />
    </ul>

    <h2>Who is at Risk?</h2>
    <p>Anyone can get TB, but certain groups are at higher risk. These include people with weakened immune systems (e.g., HIV-positive individuals), people living in crowded or poorly ventilated areas, healthcare workers, and people who use tobacco or alcohol heavily.</p><br /><br />

    <h2>Importance of Early Detection</h2>
    <p>Early diagnosis and treatment of TB are crucial. Untreated TB can lead to serious health problems or even death, and people with active TB can infect many others.</p><br /><br />

    <p>With proper medical care, TB is curable and preventable. Understanding the fundamentals is the first step toward reducing its spread and impact.</p><br /><br />
  `
},


     'module-2': {
  title: 'TB Transmission and Infection',
  content: `
    <h2>How is Tuberculosis (TB) Transmitted?</h2>
    <p>TB is transmitted through the air when a person with active pulmonary TB coughs, sneezes, talks, or spits. Tiny infectious droplets are released into the air, and people nearby can inhale them into their lungs.</p><br /><br />

    <p>TB is not spread through shaking hands, sharing food or drink, touching surfaces, or kissing. It requires prolonged exposure in a closed or poorly ventilated environment for transmission to occur.</p><br /><br />

    <h2>Risk of Infection</h2>
    <p>Not everyone who inhales the TB bacteria becomes sick. In fact, most people infected with the bacteria will develop latent TB, which means the bacteria are present but inactive and do not cause symptoms or spread to others.</p><br /><br />

    <p>However, if the immune system becomes weak (due to HIV, malnutrition, or other illnesses), latent TB can become active. People with weakened immune systems are at greater risk of developing active TB.</p><br /><br />

    <h2>Environments That Promote TB Spread</h2>
    <ul>
      <li>Overcrowded and poorly ventilated spaces</li><br /><br />
      <li>Hospitals and clinics with inadequate infection control</li><br /><br />
      <li>Prisons, shelters, and refugee camps</li><br /><br />
      <li>Homes with individuals who are not receiving proper TB treatment</li><br /><br />
    </ul>

    <h2>Preventing TB Transmission</h2>
    <ul>
      <li>Early detection and treatment of TB</li><br /><br />
      <li>Good ventilation in indoor spaces</li><br /><br />
      <li>Wearing masks in high-risk environments</li><br /><br />
      <li>Covering the mouth when coughing or sneezing</li><br /><br />
    </ul>

    <p>Understanding how TB spreads helps reduce the risk of infection and protects communities from outbreaks.</p><br /><br />
  `
},



   'module-3': {
  title: 'TB Prevention Measures',
  content: `
    <h2>Why TB Prevention Matters</h2>
    <p>Tuberculosis (TB) is a serious disease that can spread quickly in communities, especially where healthcare is limited or living conditions are overcrowded. Preventing TB is essential to protect individuals and communities from infection and long-term health complications.</p><br /><br />

    <h2>Key Prevention Strategies</h2>
    <ul>
      <li><strong>Early Diagnosis and Treatment:</strong> The most effective way to prevent the spread of TB is to identify and treat people with active TB as soon as possible. Treatment not only helps the individual recover but also stops them from spreading TB to others.</li><br /><br />

      <li><strong>Ventilation and Airflow:</strong> Since TB spreads through the air, good ventilation in homes, schools, public spaces, and clinics is crucial. Keeping windows open and allowing fresh air to circulate can help reduce the risk of airborne transmission.</li><br /><br />

      <li><strong>Cough Etiquette:</strong> People with coughs, especially in high-risk areas, should be encouraged to cover their mouths with a tissue or elbow when coughing or sneezing, and to wear a mask if they are suspected of having TB.</li><br /><br />

      <li><strong>Protective Measures in Healthcare:</strong> Healthcare workers should use personal protective equipment (PPE) like masks and gloves when dealing with TB patients. Isolation of infectious cases may also be necessary in hospitals to prevent spread.</li><br /><br />

      <li><strong>BCG Vaccination:</strong> The Bacillus Calmette-Guérin (BCG) vaccine offers protection, especially for children in countries with a high rate of TB. It helps reduce the risk of severe forms of TB, such as TB meningitis.</li><br /><br />
    </ul>

    <h2>Supporting Community Prevention</h2>
    <p>Community health education is critical to help people understand how TB spreads and how to protect themselves. Reducing stigma around TB also encourages more people to seek early diagnosis and treatment.</p><br /><br />

    <h2>Watch: Preventing the Spread of TB</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ni2XU5H_Gbo" title="How to prevent tuberculosis | WHO" frameborder="0" allowfullscreen></iframe><br /><br />

    <p>With the right combination of public health education, early treatment, proper hygiene, and strong healthcare systems, TB prevention is possible and effective. Everyone plays a role in stopping its spread.</p><br /><br />
  `
},


    'module-4': {
  title: 'TB Diagnosis and Treatment',
  content: `
    <h2>Diagnosing Tuberculosis (TB)</h2>
    <p>Early and accurate diagnosis of TB is essential to control the disease and prevent its spread. TB diagnosis often begins with an evaluation of symptoms such as a persistent cough, chest pain, night sweats, fever, and unexplained weight loss.</p><br /><br />

    <h3>Common Diagnostic Methods</h3>
    <ul>
      <li><strong>Sputum Test:</strong> This is one of the most common tests. A patient provides a sample of mucus from the lungs (sputum), which is examined under a microscope for TB bacteria.</li><br /><br />
      <li><strong>Chest X-ray:</strong> Helps identify damage or abnormalities in the lungs associated with TB infection.</li><br /><br />
      <li><strong>GeneXpert Test:</strong> A molecular test that detects TB bacteria and checks for drug resistance. It is fast and highly accurate.</li><br /><br />
      <li><strong>Skin and Blood Tests:</strong> These help determine if someone has been infected with TB bacteria, especially in cases of latent TB.</li><br /><br />
    </ul>

    <h2>Treating TB</h2>
    <p>TB is a treatable and curable disease, but it requires a strict and lengthy course of antibiotics. Treatment is usually free in most public healthcare settings.</p><br /><br />

    <h3>Standard TB Treatment Plan</h3>
    <ul>
      <li>TB treatment generally lasts for 6 months and includes a combination of antibiotics such as isoniazid, rifampicin, pyrazinamide, and ethambutol.</li><br /><br />
      <li>The first two months are the intensive phase, where four drugs are taken to kill most of the bacteria.</li><br /><br />
      <li>The last four months are the continuation phase, involving fewer drugs to kill any remaining bacteria and prevent relapse.</li><br /><br />
    </ul>

    <h3>Importance of Completing Treatment</h3>
    <p>It is critical that patients take their medication exactly as prescribed and complete the full treatment, even if symptoms improve early. Stopping treatment too soon can lead to the development of drug-resistant TB, which is harder and more expensive to treat.</p><br /><br />

    <h2>Drug-Resistant TB</h2>
    <p>Some forms of TB do not respond to standard drugs and require special medications. Multidrug-resistant TB (MDR-TB) and extensively drug-resistant TB (XDR-TB) are more difficult to treat and require longer treatment durations with second-line drugs.</p><br /><br />

    <h2>Support for TB Patients</h2>
    <p>Many healthcare systems provide counseling, education, and follow-up visits to help TB patients stick to their treatment and fully recover. Family and community support also play a key role in treatment success.</p><br /><br />

    <p>With proper diagnosis, timely treatment, and community awareness, TB can be effectively controlled and eventually eliminated.</p><br /><br />
  `
},


      'module-5':{
        title:'TB and Social Determinants of Health',
        content:'<p></p>'
      },

      'module-6':{
        title:'TB Control Programs',
        content:'<p></p>'
      },
    },
    'substance-abuse': {
      'module-1': {
        title: 'Understanding Substance Use Disorders',
        content: '<p>Substance use disorders occur when the recurrent use of alcohol and/or drugs causes clinically significant impairment, including health problems, disability, and failure to meet major responsibilities.</p>'
      },

      'module-2':{
        title:'Biological and Social Factors',
        content:'<p></p>'
      },

      'module-3':{
        title:'Prevention of Substance Abuse',
        content:'<p></p>'
      },

      'module-4':{
        title:'Screening and Treatment Approches',
        content:'<p></p>'
      },

      'module-5':{
        title:'Recovery and Harm Reduction',
        content:'<p></p>'
      },

      'module-6':{
        title:'Community Based Interventions',
        content:'<p></p>'
      },
    },
    'polio': {
      'module-1': {
        title: 'Polio Virus and Disease',
        content: '<p>Polio is a highly infectious disease caused by the poliovirus. It invades the nervous system and can cause total paralysis in a matter of hours.</p>'
      },
      'module-2':{
        title:'Polio Transmission Patterns',
        content:'<p></p>'
      },

      'module-3':{
        title:'Polio Eradication Strategies',
        content:'<p></p>'
      },

      'module-4':{
        title:'Vaccination Campaigns and Surveilance',
        content:'<p></p>'
      },

      'module-5':{
        title:'Challenges in Polio Eradication',
        content:'<p></p>'
      },

      'module-6':{
        title:'Post-Eradications',
        content:'<p></p>'
      },
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

  // Function to render the appropriate quiz component based on course and module
  const renderQuizComponent = () => {
    if (courseId === 'malaria') {
      if (moduleId === 'module-2') {
        return <MalariaQuizModule2 />;
      } else if (moduleId === 'module-4') {
        return <QuizFour />;
      }
    } else if (courseId === 'hiv') {

      if (moduleId === 'module-2') {
  
        return <HIVQuizModule2/>;

      }else if(moduleId == 'module-3'){
        return<Alert severity='info'>HIV module 3 Quiz Not Available</Alert>
      }else if(moduleId == 'module-4'){
        return<HIVQuizModule4/>
      }
    }else if(courseId === 'tuberculosis'){
      if(moduleId == "module-2"){
        return<TBQuizModule2/>
      }
    }
    
    return null; 
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>{currentModule?.title}</Typography>
      
      <Paper elevation={3} sx={{ padding: 3 }}>
        <div
          dangerouslySetInnerHTML={{ __html: currentModule?.content }}
        />
        
        {renderQuizComponent()}
      </Paper>
    </Box>
  );
};

export default ModuleContent;