// src/components/sections/infrastructure/InfrastructureSection.tsx
import MainArticle from './components/main_article';
import SideArticle from './components/side_article';
import ArticleList from './components/article_list';
import MainImage from './assets/images/article_images/robo_article_image_1.jpg'
import SideImage1 from './assets/images/article_images/robo_article_image_2.png'
import SideImage2 from './assets/images/article_images/robo_article_image_3.png'
import StayUpdated from './components/stay_update';
import ExternalLinks from './components/external_links';

const articles = [
  {
    title: 'From Reflex to Reasoning',
    date: 'March 15, 2023',
    description: 'We transferred end-to-end policies based hybrid systems that incorporate symbolic reasoning, enabling more structured learning.',
    href: '/infrastructure/reflex-to-reasoning'
  },
  {
    title: 'Policy-Aware Data Filtering at Scale',
    date: 'March 18, 2023',
    description: 'We developed a selective filtering facing law that conditions data selection on current policy uncertainty. This reduced overfitting in high-confidence regions by 35% on real-world navigation agents.',
    href: '/infrastructure/policy-aware-filtering'
  },
  {
    title: 'Logs to Curriculum',
    date: 'April 8, 2023',
    description: 'We implemented an automated data curriculum builder that sequences training data by difficulty using logged model errors and task level success.',
    href: '/infrastructure/logs-curriculum'
  }
];

export default function Infra_Section() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-radial-custom">
      <h1
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: 40,
          lineHeight: '40px',
          letterSpacing: 0,
          verticalAlign: 'middle',
          color: '#000',
        }}
        className="mb-12"
      >
        INFRASTRUCTURE
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <MainArticle
          date="April 20, 2023"
          title="Embodied Reasoning"
          image_url={MainImage}
          href="/infrastructure/embodied-reasoning"
        />
        
        <div className="space-y-2">
          <SideArticle
            title="Policy Distribution"
            date="May 10, 2025"
            image_url={SideImage1}
            href="/infrastructure/policy-distribution"
          />
          <SideArticle
            title="Scaling Synthetic Data Generation"
            date="May 12, 2025"
            image_url={SideImage2}
            href="/infrastructure/synthetic-data"
          />
        </div>
      </div>

      <ArticleList articles={articles} />

      <div className="grid grid-cols-2 w-full items-start">
        <div className="flex justify-start">
          <StayUpdated />
        </div>
        <div className="flex justify-start">
          <ExternalLinks />
        </div>
      </div>
    </section>
  );
}