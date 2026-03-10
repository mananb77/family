import { useEffect, useRef } from 'react'
import './App.css'

const grandparents = [
  {
    id: 'nana',
    nameEn: 'Shri Umakant Bhargava',
    nameHi: 'श्री उमाकांत भार्गव',
    relation: 'Nana',
    relationHi: 'नाना',
    years: 'Nov 3, 1936 – Apr 28, 2021',
    description: 'A man of adventure, laughter, and boundless love.',
    descriptionHi: 'साहस, हँसी और असीम प्रेम के व्यक्ति।',
    photo: 'IMG_2012.JPG',
    link: 'https://mananb77.github.io/nana',
  },
  {
    id: 'nani',
    nameEn: 'Smt. Krishna Bhargava',
    nameHi: 'श्रीमती कृष्णा भार्गव',
    relation: 'Nani',
    relationHi: 'नानी',
    years: 'Sep 7, 1940 – Dec 4, 2021',
    description: 'A heart of gold, a garden of warmth.',
    descriptionHi: 'सोने का दिल, स्नेह का बगीचा।',
    photo: 'Nani.jpg',
    link: 'https://mananb77.github.io/nani',
  },
  {
    id: 'dada',
    nameEn: 'Shri Kailash Nath Bhargava',
    nameHi: 'श्री कैलाश नाथ भार्गव',
    relation: 'Dada',
    relationHi: 'दादा',
    years: '1930 – 2023',
    description: 'A life of wisdom, integrity, and quiet strength.',
    descriptionHi: 'ज्ञान, ईमानदारी और शांत शक्ति का जीवन।',
    photo: 'dada-hero.jpg',
    link: 'https://mananb77.github.io/dada',
  },
  {
    id: 'dadi',
    nameEn: 'Smt. Kalpana Bhargava',
    nameHi: 'श्रीमती कल्पना भार्गव',
    relation: 'Dadi',
    relationHi: 'दादी',
    years: 'Nov 8, 1941 – Feb 6, 2026',
    description: 'Scholar, educator, mother, and lifelong devotee.',
    descriptionHi: 'विद्वान, शिक्षिका, माँ और आजीवन भक्त।',
    photo: 'IMG-20210801-WA0000 Copy.JPG',
    link: 'https://mananb77.github.io/dadi',
  },
]

const familyTree = {
  maternalGrandparents: {
    grandfather: {
      name: 'Umakant',
      nameHi: 'उमाकांत',
      surname: 'Bhargava',
      photo: 'IMG_2012.JPG',
      relation: 'Nana',
    },
    grandmother: {
      name: 'Krishna',
      nameHi: 'कृष्णा',
      surname: 'Bhargava',
      photo: 'Nani.jpg',
      relation: 'Nani',
    },
  },
  paternalGrandparents: {
    grandfather: {
      name: 'Kailash Nath',
      nameHi: 'कैलाश नाथ',
      surname: 'Bhargava',
      photo: 'dada-hero.jpg',
      relation: 'Dada',
    },
    grandmother: {
      name: 'Kalpana',
      nameHi: 'कल्पना',
      surname: 'Bhargava',
      photo: 'IMG-20210801-WA0000 Copy.JPG',
      relation: 'Dadi',
    },
  },
  parents: {
    mother: {
      name: 'Aparna',
      nameHi: 'अपर्णा',
      surname: 'Bhargava',
      relation: 'Mom',
    },
    father: {
      name: 'Harsh',
      nameHi: 'हर्ष',
      surname: 'Bhargava',
      relation: 'Dad',
    },
  },
  children: [
    { name: 'Naman', nameHi: 'नमन', relation: 'Son' },
    { name: 'Manan', nameHi: 'मनन', relation: 'Son' },
  ],
}

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = ref.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

function PersonCircle({ name, nameHi, photo, relation, size = 'medium' }) {
  const sizeClass = `person-circle person-circle--${size}`
  return (
    <div className={sizeClass}>
      <div className="person-photo-wrapper">
        {photo ? (
          <img
            src={`${import.meta.env.BASE_URL}photos/${photo}`}
            alt={name}
            className="person-photo"
          />
        ) : (
          <div className="person-initials">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <div className="person-name">{name}</div>
      <div className="person-name-hi hindi">{nameHi}</div>
      <div className="person-relation">{relation}</div>
    </div>
  )
}

export default function App() {
  const containerRef = useScrollReveal()

  const shareText = 'The Bhargava Family — In loving memory of our grandparents.'
  const shareUrl = 'https://mananb77.github.io/family/'
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`

  return (
    <div className="app" ref={containerRef}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner fade-in">
          <div className="hero-diya">🪔</div>
          <h1 className="hero-title">The Bhargava Family</h1>
          <p className="hero-title-hindi hindi">भार्गव परिवार</p>
          <div className="divider">
            <span className="divider-symbol">✦</span>
          </div>
          <p className="hero-subtitle">In Loving Memory</p>
          <p className="hero-subtitle-hindi hindi">श्रद्धांजलि</p>
          <p className="hero-message">
            Four extraordinary lives that built everything we are. Four stories we will carry forever.
          </p>
          <p className="hero-message hindi">
            चार असाधारण जीवन जिन्होंने हमारा सब कुछ गढ़ा। चार कहानियाँ जो हम सदा संजोएँगे।
          </p>
        </div>
      </section>

      {/* Memorial Cards */}
      <section className="memorials">
        <div className="section-inner">
          <h2 className="section-title fade-in">In Memoriam</h2>
          <p className="section-title-hindi fade-in">स्मृति में</p>
          <div className="cards-grid">
            {grandparents.map((gp, i) => (
              <a
                key={gp.id}
                href={gp.link}
                className="memorial-card fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-photo-container">
                  <img
                    src={`${import.meta.env.BASE_URL}photos/${gp.photo}`}
                    alt={gp.nameEn}
                    className="card-photo"
                  />
                  <div className="card-photo-overlay" />
                </div>
                <div className="card-content">
                  <span className="card-relation">{gp.relation} · {gp.relationHi}</span>
                  <h3 className="card-name">{gp.nameEn}</h3>
                  <p className="card-name-hindi hindi">{gp.nameHi}</p>
                  <p className="card-years">{gp.years}</p>
                  <p className="card-description">{gp.description}</p>
                  <p className="card-description hindi">{gp.descriptionHi}</p>
                  <span className="card-link">
                    Visit Memorial <span className="arrow">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Family Tree */}
      <section className="family-tree">
        <div className="section-inner">
          <h2 className="section-title fade-in">Our Family Tree</h2>
          <p className="section-title-hindi fade-in">हमारा वंश वृक्ष</p>

          <div className="tree fade-in">
            {/* Grandparents Row */}
            <div className="tree-row tree-grandparents">
              <div className="tree-couple">
                <p className="couple-label">Maternal Grandparents · नाना-नानी</p>
                <div className="couple-photos">
                  <PersonCircle
                    {...familyTree.maternalGrandparents.grandfather}
                    size="large"
                  />
                  <div className="couple-connector" />
                  <PersonCircle
                    {...familyTree.maternalGrandparents.grandmother}
                    size="large"
                  />
                </div>
              </div>
              <div className="tree-couple">
                <p className="couple-label">Paternal Grandparents · दादा-दादी</p>
                <div className="couple-photos">
                  <PersonCircle
                    {...familyTree.paternalGrandparents.grandfather}
                    size="large"
                  />
                  <div className="couple-connector" />
                  <PersonCircle
                    {...familyTree.paternalGrandparents.grandmother}
                    size="large"
                  />
                </div>
              </div>
            </div>

            {/* Connector Lines */}
            <div className="tree-connector-vertical">
              <div className="connector-line" />
              <div className="connector-line" />
            </div>

            {/* Parents Row */}
            <div className="tree-row tree-parents">
              <div className="tree-couple">
                <div className="couple-photos">
                  <PersonCircle
                    {...familyTree.parents.mother}
                    size="medium"
                  />
                  <div className="couple-connector couple-connector--heart">❤️</div>
                  <PersonCircle
                    {...familyTree.parents.father}
                    size="medium"
                  />
                </div>
              </div>
            </div>

            {/* Connector to Children */}
            <div className="tree-connector-vertical tree-connector-single">
              <div className="connector-line" />
            </div>

            {/* Children Row */}
            <div className="tree-row tree-children">
              {familyTree.children.map((child) => (
                <PersonCircle
                  key={child.name}
                  {...child}
                  size="medium"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extended Family Tree */}
      <section className="extended-tree">
        <div className="section-inner">
          <h2 className="section-title fade-in">The Extended Family</h2>
          <p className="section-title-hindi fade-in">विस्तृत परिवार</p>

          <div className="ext-tree fade-in">
            <div className="ext-sides-row">
              {/* Maternal Side */}
              <div className="ext-side">
                <p className="ext-side-title">Maternal Side · मातृ पक्ष</p>

                {/* Generation 1: Grandparents */}
                <div className="ext-generation">
                  <div className="ext-grandparents">
                    <PersonCircle name="Umakant" nameHi="उमाकांत" photo="IMG_2012.JPG" relation="Nana" size="large" />
                    <div className="couple-connector" />
                    <PersonCircle name="Krishna" nameHi="कृष्णा" photo="Nani.jpg" relation="Nani" size="large" />
                  </div>
                </div>

                {/* Generation 2: Their children's families */}
                <div className="ext-generation ext-generation--families">
                  <div className="ext-family-unit">
                    <div className="ext-couple">
                      <PersonCircle name="Aparna" nameHi="अपर्णा" photo="Aparna.jpg" relation="Daughter" size="small" />
                      <div className="couple-connector couple-connector--heart">❤️</div>
                      <PersonCircle name="Harsh" nameHi="हर्ष" photo="Harsh.JPG" relation="Son-in-law" size="small" />
                    </div>
                    <div className="ext-children-connector">
                      <div className="connector-line connector-line--short" />
                    </div>
                    <div className="ext-children-row">
                      <PersonCircle name="Naman" nameHi="नमन" photo="Naman.JPG" relation="Son" size="small" />
                      <PersonCircle name="Manan" nameHi="मनन" photo="Manan.JPG" relation="Son" size="small" />
                    </div>
                  </div>

                  <div className="ext-family-unit">
                    <div className="ext-couple">
                      <PersonCircle name="Anshu" nameHi="अंशु" relation="Daughter" size="small" />
                      <div className="couple-connector couple-connector--heart">❤️</div>
                      <PersonCircle name="Ravi" nameHi="रवि" relation="Son-in-law" size="small" />
                    </div>
                    <div className="ext-children-connector">
                      <div className="connector-line connector-line--short" />
                    </div>
                    <div className="ext-children-row">
                      <PersonCircle name="Ankita" nameHi="अंकिता" relation="Daughter" size="small" />
                      <PersonCircle name="Rishabh" nameHi="ऋषभ" relation="Son" size="small" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="ext-divider-vertical" />

              {/* Paternal Side */}
              <div className="ext-side">
                <p className="ext-side-title">Paternal Side · पितृ पक्ष</p>

                {/* Generation 1: Grandparents */}
                <div className="ext-generation">
                  <div className="ext-grandparents">
                    <PersonCircle name="Kailash Nath" nameHi="कैलाश नाथ" photo="dada-hero.jpg" relation="Dada" size="large" />
                    <div className="couple-connector" />
                    <PersonCircle name="Kalpana" nameHi="कल्पना" photo="IMG-20210801-WA0000 Copy.JPG" relation="Dadi" size="large" />
                  </div>
                </div>

                {/* Generation 2: Their children's families */}
                <div className="ext-generation ext-generation--families">
                  <div className="ext-family-unit">
                    <div className="ext-couple">
                      <PersonCircle name="Harsh" nameHi="हर्ष" photo="Harsh.JPG" relation="Son" size="small" />
                      <div className="couple-connector couple-connector--heart">❤️</div>
                      <PersonCircle name="Aparna" nameHi="अपर्णा" photo="Aparna.jpg" relation="Daughter-in-law" size="small" />
                    </div>
                    <div className="ext-children-connector">
                      <div className="connector-line connector-line--short" />
                    </div>
                    <div className="ext-children-row">
                      <PersonCircle name="Naman" nameHi="नमन" photo="Naman.JPG" relation="Son" size="small" />
                      <PersonCircle name="Manan" nameHi="मनन" photo="Manan.JPG" relation="Son" size="small" />
                    </div>
                  </div>

                  <div className="ext-family-unit">
                    <div className="ext-couple">
                      <PersonCircle name="Shailendra" nameHi="शैलेन्द्र" relation="Son" size="small" />
                      <div className="couple-connector couple-connector--heart">❤️</div>
                      <PersonCircle name="Chavi" nameHi="छवि" relation="Daughter-in-law" size="small" />
                    </div>
                    <div className="ext-children-connector">
                      <div className="connector-line connector-line--short" />
                    </div>
                    <div className="ext-children-row">
                      <PersonCircle name="Vedang" nameHi="वेदांग" relation="Son" size="small" />
                      <PersonCircle name="Anisha" nameHi="अनीशा" relation="Daughter" size="small" />
                    </div>
                  </div>

                  <div className="ext-family-unit">
                    <div className="ext-couple">
                      <PersonCircle name="Bhaiyu" nameHi="भैयू" relation="Son" size="small" />
                      <div className="couple-connector couple-connector--heart">❤️</div>
                      <PersonCircle name="Yuthika" nameHi="युथिका" relation="Daughter-in-law" size="small" />
                    </div>
                    <div className="ext-children-connector">
                      <div className="connector-line connector-line--short" />
                    </div>
                    <div className="ext-children-row">
                      <PersonCircle name="Somya" nameHi="सौम्या" relation="Daughter" size="small" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-diya">🪔</div>
          <p className="footer-title">The Bhargava Family</p>
          <p className="footer-title-hindi hindi">भार्गव परिवार</p>
          <div className="divider">
            <span className="divider-symbol">✦</span>
          </div>
          <a
            href={whatsappLink}
            className="share-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share with Family
          </a>
        </div>
      </footer>
    </div>
  )
}
