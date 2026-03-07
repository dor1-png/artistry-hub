import React from 'react';
import SEO from '../components/SEO';

export default function Artist() {
  const artistSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Artist",
    "description": "Contemporary multidisciplinary artist working across digital, painting, photography, and sculpture",
    "url": "https://artistry.com/artist",
    "sameAs": [],
    "knowsAbout": [
      "Digital Painting",
      "Contemporary Art",
      "Photography",
      "Sculpture",
      "Installation Art",
      "Minimalism",
      "Abstract Expressionism"
    ],
    "jobTitle": "Contemporary Artist",
    "worksFor": {
      "@type": "Organization",
      "name": "ARTISTRY"
    },
    "awards": [
      "Featured in 20+ international galleries"
    ]
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Artist Statement</h1>
          <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed italic">
            A creative practice rooted in intentionality, emotional clarity, and the pursuit of beauty in simplicity.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-light tracking-tight">Philosophy & Practice</h2>
            <div className="space-y-6 text-lg font-light text-gray-700 leading-relaxed">
              <p>
                My artistic practice is built on a fundamental belief: that art exists to create moments of genuine human connection. In a world of constant noise and distraction, I create spaces—visual and conceptual—where people can pause, feel, and discover meaning.
              </p>
              <p>
                Every piece begins with a single question. What am I trying to understand? What emotion do I want to evoke? What truth am I seeking to reveal? These questions guide my process, whether I'm working with digital tools, paint and canvas, or found materials.
              </p>
              <p>
                I believe in the power of constraint. The limitations we work within—whether technical, material, or conceptual—often lead to the most authentic and innovative solutions. Working with intention means making deliberate choices about form, color, composition, and materiality.
              </p>
              <p>
                My work celebrates the beauty of subtlety. I'm drawn to soft color palettes, negative space, and the expressive potential of minimal gestures. In a culture obsessed with excess, I find profound beauty in restraint and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Journey */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl font-light tracking-tight">Creative Journey</h2>
          
          <div className="space-y-16">
            {/* Timeline Item 1 */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-light text-gray-400">2010</span>
                <h3 className="text-2xl font-light tracking-wide">The Beginning</h3>
              </div>
              <p className="text-lg font-light text-gray-700 leading-relaxed ml-24">
                I began my artistic journey as a painter, studying traditional techniques and exploring how color and form could communicate emotion without relying on representation. These early years taught me discipline, observation, and the importance of process.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-light text-gray-400">2015</span>
                <h3 className="text-2xl font-light tracking-wide">Expanding Mediums</h3>
              </div>
              <p className="text-lg font-light text-gray-700 leading-relaxed ml-24">
                A turning point came when I began experimenting with digital tools and photography. This expansion opened new possibilities for exploring light, movement, and temporality. I realized that the medium matters less than the intention behind the work.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-light text-gray-400">2018</span>
                <h3 className="text-2xl font-light tracking-wide">International Recognition</h3>
              </div>
              <p className="text-lg font-light text-gray-700 leading-relaxed ml-24">
                My work was featured in galleries across Europe and Asia, allowing me to connect with diverse audiences. These exhibitions validated my approach while challenging me to push further, to take more risks, and to trust my intuition.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-light text-gray-400">2022–Present</span>
                <h3 className="text-2xl font-light tracking-wide">Integration & Synthesis</h3>
              </div>
              <p className="text-lg font-light text-gray-700 leading-relaxed ml-24">
                Today, I work across multiple disciplines simultaneously—combining painting, photography, digital art, and sculpture into a cohesive body of work. This synthesis reflects my belief that meaningful art transcends medium. I'm focused on creating immersive experiences that engage the viewer on multiple sensory and emotional levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirations & Influences */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl font-light tracking-tight">Inspirations & Influences</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-wide">Nature & Landscape</h3>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                The natural world remains my greatest teacher. I find endless inspiration in the play of light through leaves, the subtle gradations of a sunset, the geometry of crystals. Nature operates with perfect efficiency and beauty—lessons I constantly apply to my work.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-wide">Human Connection</h3>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                The complexities of human emotion and relationship fuel much of my practice. How do we communicate vulnerability? What is the visual language of joy, grief, hope? These questions drive my explorations into portraiture and figurative abstraction.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-wide">Art History & Culture</h3>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                I'm deeply influenced by minimalism, abstract expressionism, and contemporary installation art. Artists like Rothko, Agnes Martin, and James Turrell have profoundly shaped my understanding of how to create transcendent visual experiences through restraint and subtlety.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-wide">Science & Philosophy</h3>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                I'm fascinated by concepts from physics, neuroscience, and philosophy—how we perceive reality, the nature of consciousness, the invisible forces that shape our world. These ideas often translate into visual investigations about perception and presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Details */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light tracking-tight mb-16">By The Numbers</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <p className="text-5xl font-light text-gray-800">10+</p>
              <p className="text-lg font-light text-gray-600">Years of Creative Practice</p>
            </div>

            <div className="space-y-3">
              <p className="text-5xl font-light text-gray-800">50+</p>
              <p className="text-lg font-light text-gray-600">Works in Collections</p>
            </div>

            <div className="space-y-3">
              <p className="text-5xl font-light text-gray-800">20+</p>
              <p className="text-lg font-light text-gray-600">International Exhibitions</p>
            </div>

            <div className="space-y-3">
              <p className="text-5xl font-light text-gray-800">5</p>
              <p className="text-lg font-light text-gray-600">Artistic Disciplines</p>
            </div>

            <div className="space-y-3">
              <p className="text-5xl font-light text-gray-800">1</p>
              <p className="text-lg font-light text-gray-600">Mission: Create Beauty & Connection</p>
            </div>

            <div className="space-y-3">
              <p className="text-5xl font-light text-gray-800">∞</p>
              <p className="text-lg font-light text-gray-600">Possibilities Ahead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
            "Art is not decoration for your wall. Art is a revolution." — Henri Matisse
          </p>
          <p className="text-lg font-light text-gray-600 leading-relaxed">
            My practice is rooted in this belief. Every piece I create is an invitation—to feel deeply, to see differently, to question what we think we know about beauty, meaning, and connection. I create for those who understand that art is essential, not optional.
          </p>
          <p className="text-lg font-light text-gray-600 leading-relaxed">
            Thank you for being part of this journey.
          </p>
        </div>
      </section>
      </div>
    </>
  );
}